import { loadUser } from '$lib/auth';
import { prisma } from '$lib/db';
import { json, type RequestHandler } from '@sveltejs/kit';

async function loadDefaultProfile(f: typeof fetch) {
	const image = await f('/user.png');
	return await image.blob();
}

export const GET: RequestHandler = async (event) => {
	const authenticatedUser = await loadUser(event.cookies);

	if (authenticatedUser == null) {
		return json(
			{
				message: 'go away :('
			},
			{
				status: 401
			}
		);
	}

	const profilePicUser = await prisma.customer.findUnique({
		where: {
			id: authenticatedUser.id
		},
		select: {
			profilePicture: true
		}
	});

	const fallbackPicture = await loadDefaultProfile(event.fetch);

	return new Response(profilePicUser?.profilePicture ?? fallbackPicture, {
		headers: {
			'Content-Type': 'image/png'
		}
	});
};
