import axios from '../utils/axios';
import toast from 'react-hot-toast';

async function createOrder({ data, actions, ngoId, valueToDonate, currency }) {
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
		console.log(error);
	}
}
async function onApprove(data, actions) {
	// Order is captured on the server and the response is returned to the browser
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
		toast.success(response.data.message, {
			duration: 10000,
		});
		return true;
	} catch (error) {
		console.log(error);
	}
}

export { createOrder, onApprove };
