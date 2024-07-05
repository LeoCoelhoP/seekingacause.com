import { createContext, useEffect, useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from '../Configs/axios';

function getLang() {
	if (localStorage.getItem('i18nextLng') === 'en') return 'US';
	else return 'BR';
}

export const LayoutContext = createContext();

export default function LayoutProvider({ children }) {
	const [state, setState] = useState({
		adsModalOpen: { status: false, ngo: null },
		infoModalOpen: false,
		paymentModalOpen: { status: false, ngo: null },
		phoneNumberModalOpen: false,
		windowWidth: null,
		language: getLang(),
		type: 'all',
		page: 'home',
	});

	useEffect(() => {
		axios.defaults.headers.common['language'] = state.language;
	}, [state.language]);

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
	const setWindowWidth = (windowWidth) =>
		setState((prev) => ({ ...prev, windowWidth }));
	const setPage = (page) => setState((prev) => ({ ...prev, page }));

	useLayoutEffect(() => {
		function updateWidth() {
			setWindowWidth(window.innerWidth);
		}
		const event = window.addEventListener('resize', updateWidth);
		updateWidth();

		return () => window.removeEventListener('resize', event);
	}, []);

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
				setWindowWidth,
				setPage,
			}}>
			{children}
		</LayoutContext.Provider>
	);
}

LayoutProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
