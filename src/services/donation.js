import axios from '../utils/axios';
import toast from 'react-hot-toast';

async function createDonation({ user, setUser, setNgo, ngoId, type }) {
	console.log(ngoId, type);
	try {
		const response = await axios.post(
			'/donation/new',
			{ user, ngoId, type },
			{
				headers: {
					'Content-Type': 'application/json',
				},
			},
		);

		console.log(response);
		setNgo(() => response.data.ngos);
		if (user) setUser(() => ({ ...response.data.user }));

		toast.success(response.data.message);
	} catch (error) {
		toast.error(error.message);
	}
}

export { createDonation };
