import { prisma } from '$lib/db';
import type { Actions } from './$types';

function getFormValue(data: FormData, key: string): string | null {
	return data.get(key) as unknown as string | null;
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

		if (
			name == null ||
			name.length < 2 ||
			surname == null ||
			surname.length < 2 ||
			adress == null ||
			adress.length < 2 ||
			postcode == null ||
			postcode.length < 2 ||
			city == null ||
			city.length < 2 ||
			email == null ||
			email.length < 2 ||
			password == null ||
			password.length < 2
		) {
			return { error: true };
		}

		await prisma.customer.create({
			data: {
				name: name,
				surname: surname,
				adress: adress,
				postCode: Number(postcode),
				city: city,
				email: email,
				password: password
			}
		});

		return { error: false };
	}
};
