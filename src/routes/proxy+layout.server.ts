import { loadUser } from '$lib/auth';
import type { LayoutServerLoad } from './$types';

export const load = async (event: Parameters<LayoutServerLoad>[0]) => {
	return {
		user: loadUser(event.cookies)
	};
};
