import type { Actions } from "./$types";
import { prisma } from "../../../../lib/db";
import { loadUser } from "$lib/auth";
import type { Customer } from "@prisma/client";


function getFormValue(data: FormData, key: string): string | null {
    return data.get(key) as unknown as string | null
}


export const actions: Actions = {
    default: async (event) => {
        const form = await event.request.formData(); 


        const x = form.get('userPFP') as unknown as Blob;
        const y = await x.arrayBuffer();
        const z = Buffer.from(y);

        console.log(y);
        console.log(z);

        const profileiMG = getFormValue(form, 'userPFP');
        const user = await loadUser(event.cookies);

        console.log("TEST TEST TEST TEST --- PFP string name:", profileiMG, "--- TEST TEST TEST TEST --- userId:", user?.id);

        const zaza = await prisma.customer.update({
            where: {
                id:user?.id
            
             },
             data: {
                profilePicture:z

             }

        })

        console.log(zaza);

        return {result:true}
    }
};