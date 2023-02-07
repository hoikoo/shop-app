import type { Customer } from "@prisma/client";
import type { CartItem } from "@prisma/client";
import type { Product } from "@prisma/client";
import { loadUser } from "$lib/auth";
import { redirect } from "@sveltejs/kit";
import { prisma } from "../../lib/db";
import type { Actions, PageServerLoad } from "./$types";


export interface CartI {
    cartId: number,
    productId : number,
    customerId : number,
    quantity : number,
    product: Product
 }






export const load: PageServerLoad = async (event) => {
    const parentData = await event.parent()

        const user = await loadUser(event.cookies);

        const b =  await prisma.cartItem.findMany({
            where: {
              customerId: user?.id
            },
            include: {
                product: true
                
            }
        })
    
        return {
            bob: b

        }
};



export const actions: Actions = {
    default: async (event) => {


    }

};