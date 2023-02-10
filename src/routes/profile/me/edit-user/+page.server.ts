// import type { Customer } from '@prisma/client';
import { prisma } from '$lib/db';
import type { Actions, PageServerLoad } from './$types';
import { loadUser } from '$lib/auth';
import { redirect } from '@sveltejs/kit';

function getFormValue(data: FormData, key: string): string | null {
	return data.get(key) as unknown as string | null;
}

export const load: PageServerLoad = async (event) => {
	return {
		userLogg: await loadUser(event.cookies)
	};
};

export const actions: Actions = {
	image: async (event) => {
		const form = await event.request.formData();
		const user = await loadUser(event.cookies);
		const x = form.get('userPFP') as unknown as Blob;
		const y = await x.arrayBuffer();
		const z = Buffer.from(y);

		if (y.byteLength < 1) {
			console.log('NO IMAGEFOUND');
			return { error: true };
		} else {
			await prisma.customer.update({
				where: {
					id: user?.id
				},
				data: {
					profilePicture: z
				}
			});
			return { error: false };
		}
	},

	submit: async (event) => {
		const form = await event.request.formData();
		const user = await loadUser(event.cookies);
		const name = getFormValue(form, 'name');
		const surname = getFormValue(form, 'surname');
		const city = getFormValue(form, 'city');
		const adress = getFormValue(form, 'adress');
		const postcode = getFormValue(form, 'postcode');

		if (
			name == null ||
			name.length < 2 ||
			surname == null ||
			surname.length < 2 ||
			adress == null ||
			adress.length < 2 ||
			postcode == null ||
			postcode.length < 2 ||
			city == null ||
			city.length < 2
		) {
			return { error: true };
		}
		await prisma.customer.update({
			where: {
				id: user?.id
			},
			data: {
				name: name,
				surname: surname,
				adress: adress,
				postCode: Number(postcode),
				city: city
			}
		});
		throw redirect(302, '/profile/me');
	},

	cancel: async (event) => {
		throw redirect(302, '/profile/me');
	}
};
