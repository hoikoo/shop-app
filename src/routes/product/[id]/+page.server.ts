import type { Actions, PageServerLoad } from "./$types";
import type { Product } from "@prisma/client";
import type { CartItem } from "@prisma/client";
import { prisma } from "../../../lib/db";
import { loadUser } from "$lib/auth";
import { redirect } from "@sveltejs/kit";

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

export const actions: Actions = {
    default: async (event) => {


        
        const redirectToCart = await prisma.$transaction(async (p) => {

        const form = await event.request.formData(); 
        const user = await loadUser(event.cookies);    
        


        
             
        const prodInCartTrue = await prisma.cartItem.findFirst({
            where: {
                productId: parseInt(event.params.id),
                customerId: user?.id


            },

        })

            if (prodInCartTrue == null && user!== null) {

                const a = await p.cartItem.create ({

                    data: { 
                        quantity:1,
                        productId: parseInt(event.params.id),
                        customerId: user?.id
                                    
                    }
                });
                return true;
            } else if (prodInCartTrue !== null && user!== null) {
                const k = await p.cartItem.update ({
                    where: {
                        cartId: prodInCartTrue.cartId
                    },
                    
                    data: {
                        quantity: {
                            increment: 1,
                        },
                    },
                });
                return true;
            } else {
                return false;

            }
  
        })
        
        if(redirectToCart) {
            throw redirect(302, "/cart"); 
        }  
        else {
            throw redirect(302, "/create-customer");

        }
    }
};