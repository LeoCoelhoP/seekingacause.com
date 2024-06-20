import { PayPalButtons } from '@paypal/react-paypal-js';
import PropTypes from 'prop-types';

import { createOrder, onApprove } from '../services/payment';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../Contexts/UserContext';
import { NgoContext } from '../Contexts/NgoContext';

export default function PayPalPaymentButton({
	ngoId,
	valueToDonate,
	setPaymentModalOpen,
}) {
	const { user, setUser } = useContext(UserContext);
	const { setNgo } = useContext(NgoContext);
	const [newKey, setNewKey] = useState(null);
	useEffect(() => {
		setNewKey(user);
	}, [user]);
	return (
		<PayPalButtons
			key={newKey}
			createOrder={(data, actions) =>
				createOrder({
					data,
					actions,
					ngoId,
					valueToDonate,
					currency: 'BRL',
				})
			}
			onApprove={async (data) => {
				const response = await onApprove(data, user, setUser, setNgo);
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
