import { prisma } from '$lib/db';
import type { Product } from '@prisma/client';
import type { ProductI as ProductAPI } from '../+page.server';
import type { Actions } from './$types';

export const actions: Actions = {
	default: async (event) => {
		//fetch products from fake store api
		let productsAPI = await fetch('https://fakestoreapi.com/products').then(
			(res) => res.json() as unknown as ProductAPI[]
		);

		//create OUR products from fake store API products
		let productsArr: Array<Omit<Product, 'id'>> = [];
		for (let i = 0; i < productsAPI.length; i++) {
			productsArr.push({
				title: productsAPI[i].title,
				category: productsAPI[i].category,
				image: productsAPI[i].image,
				price: productsAPI[i].price,
				description: productsAPI[i].description,
				rating: productsAPI[i].rating.rate
			});
		}

		//insert new prodects into DB
		await prisma.product.createMany({
			data: productsArr
		});
		console.log('EVENT');
		return {};
	}
};
