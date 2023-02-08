import type { Actions, PageServerLoad } from "./$types";
import type { Product } from "@prisma/client";
import type { CartItem } from "@prisma/client";
import { prisma } from "../../../lib/db";
import { loadUser } from "$lib/auth";
import { redirect } from "@sveltejs/kit";




export const load: PageServerLoad = async (event) => {

    
    return {
        userLogg: await loadUser(event.cookies)
    }


};



export const actions: Actions = {
    logout: async (event) => {
    
    const form = await event.request.formData(); 
        console.log("CLick")

        event.cookies.set('session', "", {
            path: '/',
            expires: new Date(1)
            } );




    },

    edit: async (event) => {
    
        const form = await event.request.formData(); 
        console.log("CLick clock")
    
        throw redirect(302, "/profile/me/edit-user"); 
    
    }



}