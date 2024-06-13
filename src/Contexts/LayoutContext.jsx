import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

function getLang() {
	if (localStorage.getItem('i18nextLng') === 'en') return 'US';
	else return 'BR';
}

export const LayoutContext = createContext();

export default function LayoutContextProvider({ children }) {
	const [state, setState] = useState({
		adsModalOpen: { status: false, ngo: null },
		infoModalOpen: false,
		paymentModalOpen: { status: false, ngo: null },
		phoneNumberModalOpen: false,
		language: getLang(),
		type: 'all',
	});

	const setBlurred = (blurred) => setState((prev) => ({ ...prev, blurred }));
	const setInfoModalOpen = (infoModalOpen) =>
		setState((prev) => ({ ...prev, infoModalOpen }));
	const setAdsModalOpen = (adsModalOpen) =>
		setState((prev) => ({ ...prev, adsModalOpen }));
	const setPaymentModalOpen = (paymentModalOpen) =>
		setState((prev) => ({ ...prev, paymentModalOpen }));
	const setPhoneNumberModalOpen = (phoneNumberModalOpen) =>
		setState((prev) => ({ ...prev, phoneNumberModalOpen }));
	const setLanguage = (language) => setState((prev) => ({ ...prev, language }));

	return (
		<LayoutContext.Provider
			value={{
				...state,
				setBlurred,
				setInfoModalOpen,
				setAdsModalOpen,
				setPaymentModalOpen,
				setPhoneNumberModalOpen,
				setLanguage,
			}}>
			{children}
		</LayoutContext.Provider>
	);
}

LayoutContextProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
