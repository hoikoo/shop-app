import type { Customer } from "@prisma/client";
import { redirect } from "@sveltejs/kit";
import { prisma } from "../../lib/db";
import type { Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = async (event) => {
    const parentData = await event.parent()
    
    

};

export const actions: Actions = {
    default: async (event) => {

        
    }

};