import type { Customer } from "@prisma/client";
import type { Actions } from "./$types";

function getFormValue(data: FormData, key: string): string | null {
    return data.get(key) as unknown as string | null
}

export const actions: Actions = {
    default: async (event) => {
        const form = await event.request.formData();
        const name = getFormValue(form, 'name');
        const surname = getFormValue(form, 'surname');
        const city = getFormValue(form, 'city');
        const adress = getFormValue(form, 'adress');
        const postcode = getFormValue(form, 'postcode');
        const email = getFormValue(form, 'email');
        const password = getFormValue(form, 'password');

        console.log(name);
        console.log(surname);
        console.log(city);        
        console.log(postcode);
        console.log(adress);
        console.log(email);
        console.log(password);

        

        // customer:
        const newCustomer: Customer = { 
            name:name , 
            surname:surname ,
            adress:adress,              ///// ???????? not to assign null, well figures
            postcode:postcode, 
            city:city, 
            email:email , 
            password:password ,
        
        }



        console.log(newCustomer)
    }
};