import type { Customer } from "@prisma/client";
import { prisma } from "../../lib/db";
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



        if (name==null || name.length<2 || surname==null|| surname.length<2 || adress==null || adress.length<3  || postcode==null|| postcode.length<3  || city==null || city.length<3 || email==null || email.length<8 || password==null || password.length<8) {
            /////////////////// removing those sticks results into creating NULL data >:C
            

            // if(name!==null && name.length<2){
            //     console.log("Name error");
            //     return {nameError:true}
            // }
            console.log("error");
            return {error:true}

        }
            console.log(name);
            console.log(surname);
            console.log(city);        
            console.log(postcode);
            console.log(adress);
            console.log(email);
            console.log(password);

        ////////////////////// program notices that you can pass null that can be .length more than 2, thus kinda passing validation ??
        // customer:

        await prisma.customer.create ({

            data : {
                name:name , 
                surname:surname ,
                adress:adress,              
                postCode:Number(postcode), 
                city:city, 
                email:email , 
                password:password 

            }

        })
        const c = await prisma.customer.findMany()
        const p =  await prisma.product.findMany() 
        // await prisma.product.create({
        //     data: {
        //         category: 'Milk & Dairy',
        //         price: 2,
        //         image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Oat_milk_glass_and_bottles.jpg/320px-Oat_milk_glass_and_bottles.jpg",
        //         title: 'Very Nice Milk',
        //     }
        // })  
        console.log(p);
        console.log(c);




    }
};
