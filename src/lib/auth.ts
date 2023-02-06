import type { Customer, Product } from "@prisma/client";
import type { Cookies } from "@sveltejs/kit";
import { prisma } from "./db";

export function loadUser(cookies: Cookies): Promise<Customer | null> {
    const email = cookies.get('session');

    if(email == null) {
        return Promise.resolve(null);
    }

    return prisma.customer.findUnique({
        where: {
            email


        },
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