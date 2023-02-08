import type { Customer, Product } from "@prisma/client";
import { transformDocument } from "@prisma/client/runtime";
import type { Cookies } from "@sveltejs/kit";
import { prisma } from "./db";

export async function loadUser(cookies: Cookies) {
    const email = cookies.get('session');

    if(email == null) {
        return Promise.resolve(null);
    }

    return await prisma.customer.findUnique({
        where: {
            email


        },
        select: {
            id: true,
            surname: true,
            name: true,
            adress: true,
            city: true,
            postCode: true,
            email: true

        }
    });

}

//-----------------------------------------------unused----- failed attemp to make product availiable on all pages --- kinda dum tbh
// export function loadProd(productId: string): Promise<Product | null> {
//     const id = productId;

//     if (id == null) {
//         return Promise.resolve(null);
//     }

//     return prisma.product.findUnique({
//         where: {
//             id:parseInt(productId)


//         },
//     });

// }