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



        if (name==null || name.length<2 || surname==null|| surname.length<2 || adress==null || adress.length<2  || postcode==null|| postcode.length<2  || city==null || city.length<2 || email==null || email.length<2 || password==null || password.length<2) {
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

            return {error:false}

        //  const c = await prisma.customer.findUnique({
        //     where: {
        //         email: "fake@email.com",
        //     }

        //  })   
        // const p =  await prisma.product.findMany() 
        // console.log(p);

        
        //  console.log(c , "------------LOK LOOK LOOK-----------");




            // const c1 = await prisma.customer.findUnique({
            //     where: {
            //         email: email
            //       },

            //     });

            // console.log(c1 + "-------I AM LOOKING FOR THIS--------");


        //-----------------------------------------------------.json() as unknown as Customer------------------
        // await prisma.product.create({
        //     data: {
        //         category: 'Milk & Dairy',
        //         price: 2,
        //         image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Oat_milk_glass_and_bottles.jpg/320px-Oat_milk_glass_and_bottles.jpg",
        //         title: 'Very Nice Milk',
        //     }
        // })  

    }
};
