import axios from '../Configs/axios';
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

		setNgo(() => response.data.ngos);
		if (response.data.user) setUser(() => ({ ...response.data.user }));

		toast.success(response.data.message, { duration: 15000 });
	} catch (error) {
		console.error(error);
		toast.error(error.message);
	}
}

export { createDonation };
