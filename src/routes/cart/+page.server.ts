import type { Customer } from "@prisma/client";
import type { CartItem } from "@prisma/client";
import { loadUser } from "$lib/auth";
import { redirect } from "@sveltejs/kit";
import { prisma } from "../../lib/db";
import type { Actions, PageServerLoad } from "./$types";

export interface CartI {
    productId : number,
    customerId : number,
    quantity : number
}







export const load: PageServerLoad = async (event) => {
    const parentData = await event.parent()

};



export const actions: Actions = {
    default: async (event) => {

        const user = await loadUser(event.cookies);

        allCartProd: await prisma.cartItem.findMany({
            where: {
              customerId: user?.id
            },
        })
    
    }

};