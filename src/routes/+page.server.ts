import type { PageServerLoad } from './$types';
import { prisma } from '../lib/db';

export interface ProductI {
	id: number;
	title: string;
	price: number;
	description: string;
	category: string;
	image: string;
	rating: number;
}

export const load: PageServerLoad = async () => {
	return {
		products: await prisma.product.findMany()
	};
};
