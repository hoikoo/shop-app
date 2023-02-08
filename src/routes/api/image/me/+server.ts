import { loadUser } from "$lib/auth";
import { prisma } from "$lib/db";
import  { json, type RequestHandler } from "@sveltejs/kit";



export const GET: RequestHandler = async (event) => {
    const authenticatedUser = await loadUser(event.cookies);
    
    if(authenticatedUser == null) {
        return json({
            message: 'go away :('
        },
        {
            status: 401, 
        })
    }

    const profilePicUser = await prisma.customer.findUnique({
        where: {
            id: authenticatedUser.id
        },
        select: {
            profilePicture: true
        }
    })

    return new Response(profilePicUser?.profilePicture, {
        headers: {
            "Content-Type": 'image/png'
        }
    })
};