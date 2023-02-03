import type { PageServerLoad } from "./$types";
import type { Product } from "@prisma/client";
import { prisma } from "../lib/db";
import type { Decimal } from "@prisma/client/runtime";



export interface ProductI {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: number
}

export const load: PageServerLoad = async () => {
    
    return {
        hello: 'world',
        products: await prisma.product.findMany()

        
    };
};