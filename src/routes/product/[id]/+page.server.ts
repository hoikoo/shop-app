import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async (event) => {
    return {
        productId: event.params.id
    };
};