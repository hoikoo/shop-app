import type { PageServerLoad } from "./$types";
import type { Product } from "@prisma/client";
import { prisma } from "../../../lib/db";

interface Rating {
    rate: number;
    count: number;
}

export interface ProductI {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string
    rating: Rating
}

export interface productGetId {
    id: number

}


export const load: PageServerLoad = async (event) => {

    return {
        productId: event.params.id, 

        products: await prisma.product.findUnique({
            where: {
              id: parseInt(event.params.id)
            },
        })

    };
};