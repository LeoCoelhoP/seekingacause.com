import axios from '../Configs/axios';
import toast from 'react-hot-toast';

async function createDonation({ user, setUser, setNgo, ngoId, type }) {
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

		const updatedNgos = response.data.ngos.map((ngo) => {
			if (ngo.donations.length > 0) {
				let monthDonations = 0;
				ngo.donations.forEach((donation) => {
					const donateMonth = new Date(donation.iat).getMonth();
					const donateYear = new Date(donation.iat).getFullYear();
					const currentMonth = new Date(donation.iat).getMonth();
					const currentYear = new Date().getFullYear();

					if (
						donation.type === 'money' &&
						donateMonth === currentMonth &&
						donateYear === currentYear
					)
						monthDonations = monthDonations + donation.amount;
				});
				ngo.monthDonations = monthDonations;
				return ngo;
			}
			ngo.monthDonations = 0;
			return ngo;
		});
		setNgo(() => updatedNgos);
		if (response.data.user) setUser(() => ({ ...response.data.user }));
		toast.success(response.data.message, { duration: 15000 });
	} catch (error) {
		toast.error(error.message || 'An error occurred');
	}
}

export { createDonation };
