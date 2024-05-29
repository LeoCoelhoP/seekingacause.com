import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const LayoutContext = createContext();

export default function LayoutContextProvider({ children }) {
	const [state, setState] = useState({
		isBlurred: false,
		isInfoModalOpen: false,
		isAdsModalOpen: false,
		isPhoneNumberModalOpen: false,
	});

	const setBlurred = (isBlurred) =>
		setState((prev) => ({ ...prev, isBlurred }));
	const setInfoModalOpen = (isInfoModalOpen) =>
		setState((prev) => ({ ...prev, isInfoModalOpen }));
	const setAdsModalOpen = (isAdsModalOpen) =>
		setState((prev) => ({ ...prev, isAdsModalOpen }));
	const setPhoneNumberModalOpen = (isPhoneNumberModalOpen) =>
		setState((prev) => ({ ...prev, isPhoneNumberModalOpen }));

	return (
		<LayoutContext.Provider
			value={{
				...state,
				setBlurred,
				setInfoModalOpen,
				setAdsModalOpen,
				setPhoneNumberModalOpen,
			}}>
			{children}
		</LayoutContext.Provider>
	);
}

LayoutContextProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
