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


 function getFormValue(data: FormData, key: string): string | null {
    return data.get(key) as unknown as string | null
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


        const itemIsDeleted = await prisma.$transaction(async (p) => {

        const form =  await event.request.formData(); 
        const getcartID = getFormValue(form, 'cartProdId');

        if (getcartID == null) {
            return false
        } else {
            const deleteItemCart = await p.cartItem.delete({
                where: {
                    cartId: parseInt(getcartID)

                }
            })
            return true

        }

      });

      if (itemIsDeleted) {

        console.log("Product has been deleted");
        throw redirect(301, "/cart")
      } else {

        console.log("Unexpected error");
        throw redirect(301, "/")
      }




    }

};