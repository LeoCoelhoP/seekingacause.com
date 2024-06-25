import axios from '../Configs/axios';
import toast from 'react-hot-toast';

async function createOrder({ ngoId, valueToDonate, currency, user }) {
	try {
		const response = await axios.post(
			'/payment/create-paypal-order',
			{ cart: { ngoId: ngoId, cost: String(valueToDonate), currency }, user },
			{
				headers: {
					'Content-Type': 'application/json',
				},
			},
		);
		return response.data.id;
	} catch (error) {
		console.error(error);
	}
}
async function onApprove({ data, user, setUser, setNgo, setPaymentModalOpen }) {
	try {
		const response = await axios.post(
			'/payment/capture-paypal-order',
			{ orderID: data.orderID, user },
			{
				headers: {
					'Content-Type': 'application/json',
				},
			},
		);
		toast.success(response.data.message, {
			duration: 15000,
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
		setNgo(() => updatedNgos);
		console.log('leoo');
		setPaymentModalOpen(false);
		if (response.data.user) setUser(() => ({ ...response.data.user }));
	} catch (error) {
		console.error(error);
	}
}

export { createOrder, onApprove };
