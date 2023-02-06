import type { Customer } from "@prisma/client";
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
