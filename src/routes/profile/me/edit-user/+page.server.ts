import type { Customer } from "@prisma/client";
import { prisma } from "$lib/db";
import type { Actions, PageServerLoad } from "./$types";
import { loadUser } from "$lib/auth";
import { redirect } from "@sveltejs/kit";



function getFormValue(data: FormData, key: string): string | null {
    return data.get(key) as unknown as string | null
}



export const load: PageServerLoad = async (event) => {

    
    return {
        userLogg: await loadUser(event.cookies)
    }


};






export const actions: Actions = {
    submit: async (event) => {
        const form = await event.request.formData();
        const user = await loadUser(event.cookies);
        const name = getFormValue(form, 'name');
        const surname = getFormValue(form, 'surname');
        const city = getFormValue(form, 'city');
        const adress = getFormValue(form, 'adress');
        const postcode = getFormValue(form, 'postcode');




        if (name==null || name.length<2 || surname==null|| surname.length<2 || adress==null || adress.length<2  || postcode==null|| postcode.length<2  || city==null || city.length<2 ) {
            /////////////////// removing those sticks results into creating NULL data >:C
            

            // if(name!==null && name.length<2){
            //     console.log("Name error");
            //     return {nameError:true}
            // }
            console.log("error");
            return {error:true}

        }
            // console.log(name);
            // console.log(surname);
            // console.log(city);        
            // console.log(postcode);
            // console.log(adress);
            // console.log(email);
            // console.log(password);

             await prisma.customer.update ({
                 where : {
                     id: user?.id

                 },
                 data : {
                     name:name , 
                     surname:surname ,
                     adress:adress,              
                     postCode:Number(postcode), 
                     city:city, 

                 }

             })

            
            throw redirect (302, "/profile/me"); 

    },


    cancel: async (event) => {

        console.log("CLick clock")
        throw redirect(302, "/profile/me"); 

    }
};