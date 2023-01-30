import type { PageServerLoad } from "./$types";


interface Rating {
    rate: number;
    count: number;
}

export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string
    rating: Rating
}

export interface productGetId {
    id: number

}


export const load: PageServerLoad = async (event) => {

    return {
        productId: event.params.id, 

        products: fetch('https://fakestoreapi.com/products/'+ event.params.id) 
        .then(res=>res.json() as unknown as Product)

    };
};