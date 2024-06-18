import { PayPalButtons } from '@paypal/react-paypal-js';
import PropTypes from 'prop-types';

import { createOrder, onApprove } from '../services/payment';

export default function PayPalPaymentButton({
	ngoId,
	valueToDonate,
	setPaymentModalOpen,
}) {
	const language = localStorage.getItem('i18nextLng') || 'en';
	return (
		<PayPalButtons
			createOrder={(data, actions) =>
				createOrder({
					data,
					actions,
					ngoId,
					valueToDonate,
					currency: 'BRL',
				})
			}
			onApprove={async (data, actions) => {
				const response = await onApprove(data, actions, ngoId);
				if (response) {
					setPaymentModalOpen(false);
				}
			}}></PayPalButtons>
	);
}

PayPalPaymentButton.propTypes = {
	ngoId: PropTypes.string,
	valueToDonate: PropTypes.number,
	setPaymentModalOpen: PropTypes.func,
};
