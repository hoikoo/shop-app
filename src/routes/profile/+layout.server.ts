import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async (event) => {
	const parentData = await event.parent();

	if (parentData.user == null) {
		throw redirect(302, '/login-customer');
	}

	return {};
};
