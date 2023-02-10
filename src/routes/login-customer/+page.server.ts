import { redirect } from '@sveltejs/kit';
import { prisma } from '../../lib/db';
import type { Actions, PageServerLoad } from './$types';

function getFormValue(data: FormData, key: string): string | null {
	return data.get(key) as unknown as string | null;
}

export const load: PageServerLoad = async (event) => {
	const parentData = await event.parent();

	if (parentData.user != null) {
		throw redirect(302, '/');
	}
};

export const actions: Actions = {
	default: async (event) => {
		const form = await event.request.formData();
		const email = getFormValue(form, 'email');
		const password = getFormValue(form, 'password');

		if (email == null || email.length < 2 || password == null || password.length < 2) {
			return { error: true };
		}

		const c = await prisma.customer.findUnique({
			where: {
				email
			}
		});

		if (c?.password == password) {
		} else {
			return { errorPass: true };
		}

		event.cookies.set('session', email, {
			path: '/'
		});

		return { error: false };
	}
};
