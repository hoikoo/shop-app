import { prisma } from "$lib/db";
import type { Customer } from "@prisma/client";
import type { Cookies } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async (event) => {

    return {
        user: loadUser(event.cookies)

    };
};

function loadUser(cookies: Cookies): Promise<Customer | null> {
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
