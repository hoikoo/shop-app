import type { Actions, PageServerLoad } from './$types';
import { prisma } from '../../../lib/db';
import { loadUser } from '$lib/auth';
import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async (event) => {
	return {
		productId: event.params.id,
		products: await prisma.product.findUnique({
			where: {
				id: parseInt(event.params.id)
			}
		})
	};
};

export const actions: Actions = {
	default: async (event) => {
		const redirectToCart = await prisma.$transaction(async (p) => {
			const user = await loadUser(event.cookies);

			const prodInCartTrue = await prisma.cartItem.findFirst({
				where: {
					productId: parseInt(event.params.id),
					customerId: user?.id
				}
			});

			if (prodInCartTrue == null && user !== null) {
				await p.cartItem.create({
					data: {
						quantity: 1,
						productId: parseInt(event.params.id),
						customerId: user?.id
					}
				});
				return true;
			} else if (prodInCartTrue !== null && user !== null) {
				await p.cartItem.update({
					where: {
						cartId: prodInCartTrue.cartId
					},

					data: {
						quantity: {
							increment: 1
						}
					}
				});
				return true;
			} else {
				return false;
			}
		});

		if (redirectToCart) {
			throw redirect(302, '/cart');
		} else {
			throw redirect(302, '/login-customer');
		}
	}
};
