import axios from '../Configs/axios';
import toast from 'react-hot-toast';

async function createOrder({ ngoId, valueToDonate, currency }) {
	try {
		const response = await axios.post(
			'/payment/create-paypal-order',
			{ cart: { ngoId: ngoId, cost: String(valueToDonate), currency } },
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
async function onApprove(data, user, setUser, setNgo) {
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

		console.log(response);
		setNgo(() => response.data.ngos);
		if (response.data.user) setUser(() => ({ ...response.data.user }));
	} catch (error) {
		console.error(error);
	}
}

export { createOrder, onApprove };
