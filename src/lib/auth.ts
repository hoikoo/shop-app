import type { Cookies } from '@sveltejs/kit';

import { prisma } from './db';

export async function loadUser(cookies: Cookies) {
	const email = cookies.get('session');

	if (email == null) {
		return Promise.resolve(null);
	}

	return await prisma.customer.findUnique({
		where: {
			email
		},
		select: {
			id: true,
			surname: true,
			name: true,
			adress: true,
			city: true,
			postCode: true,
			email: true
		}
	});
}
