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
async function onApprove(data) {
	try {
		const response = await axios.post(
			'/payment/capture-paypal-order',
			{ orderID: data.orderID },
			{
				headers: {
					'Content-Type': 'application/json',
				},
			},
		);
		toast.loading(response.data.message, {
			duration: 15000,
		});
		return true;
	} catch (error) {
		console.error(error);
	}
}

export { createOrder, onApprove };
