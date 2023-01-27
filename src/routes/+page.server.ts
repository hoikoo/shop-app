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

export const load: PageServerLoad = async () => {
    
    return {
        hello: 'world',
        products: fetch('https://fakestoreapi.com/products')
        .then(res=>res.json() as unknown as Product[])
        
    };
};