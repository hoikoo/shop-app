import type { Customer } from '@prisma/client';
import type { CartItem } from '@prisma/client';
import type { Product } from '@prisma/client';
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
				const deleteItemCart = await p.cartItem.delete({
					where: {
						cartId: parseInt(getcartID)
					}
				});
				return true;
			}
		});

		if (itemIsDeleted) {
			console.log('Product has been deleted');
			throw redirect(301, '/cart');
		} else {
			console.log('Unexpected error');
			throw redirect(301, '/');
		}
	},

	pay: async (event) => {
		const form = await event.request.formData();
		const user = await loadUser(event.cookies);

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

		fetch(env.HOOK_URL, {
			method: 'post',
			headers: {
				'content-type': 'application/json;charset=UTF-8'
			},
			body: JSON.stringify(cartItems)
		});

		const payFor = await prisma.cartItem.deleteMany({
			where: {
				customerId: user?.id
			}
		});

        throw redirect(302, '/cart/success');
	}
};
