import axios from '../Configs/axios';
import toast from 'react-hot-toast';

async function getAllNgos(setNgo) {
	try {
		const response = await axios.get('/ngo', {
			headers: {
				'Content-Type': 'application/json',
			},
		});
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
		setNgo(updatedNgos);
	} catch (error) {
		console.error(error);
		toast.error(error.message);
	}
}

export { getAllNgos };
