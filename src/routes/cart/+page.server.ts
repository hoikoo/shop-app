import { loadUser } from '$lib/auth';
import { redirect } from '@sveltejs/kit';
import { prisma } from '../../lib/db';
import type { Actions, PageServerLoad } from './$types';
import { env } from '$env/dynamic/private';

function getFormValue(data: FormData, key: string): string | null {
	return data.get(key) as unknown as string | null;
}

export const load: PageServerLoad = async (event) => {
	const { user } = await event.parent();

	const cartItems = await prisma.cartItem.findMany({
		where: {
			customerId: user?.id
		},
		include: {
			product: true
		}
	});

	return {
		cartItems
	};
};

export const actions: Actions = {
	delete: async (event) => {
		const itemIsDeleted = await prisma.$transaction(async (p) => {
			const form = await event.request.formData();
			const getcartID = getFormValue(form, 'cartProdId');

			if (getcartID == null) {
				return false;
			} else {
				await p.cartItem.delete({
					where: {
						cartId: parseInt(getcartID)
					}
				});
				return true;
			}
		});

		if (itemIsDeleted) {
			throw redirect(301, '/cart');
		} else {
			throw redirect(301, '/');
		}
	},

	pay: async (event) => {
		const user = await loadUser(event.cookies);

		await prisma.customer.findUnique({
			where: {
				id: user?.id
			},
			select: {
				name: true,
				surname: true
			}
		});

		const cartItems = await prisma.cartItem.findMany({
			where: {
				customerId: user?.id
			},
			select: {
				quantity: true,
				product: {
					select: {
						title: true,
						price: true
					}
				}
			}
		});
		console.log(cartItems);

		await fetch(env.HOOK_URL, {
			method: 'post',
			headers: {
				'content-type': 'application/json;charset=UTF-8'
			},
			body: JSON.stringify({
				user: {
					id: user?.id,
					name: user?.name,
					surname: user?.surname
				},
				cartItems: cartItems
			})
		});

		await prisma.cartItem.deleteMany({
			where: {
				customerId: user?.id
			}
		});

		throw redirect(302, '/cart/success');
	}
};
