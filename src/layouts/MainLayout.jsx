import { useContext, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';

import Navbar from '../Components/common/Navbar';
import InfoModal from '../Components/InfoModal';
import RegisterPhoneNumberModal from '../Components/RegisterPhoneNumberModal';
import AdsModal from '../Components/AdsModal';
import { LayoutContext } from '../Contexts/LayoutContext';
import Header from '../Components/Header';
import PaymentModal from '../Components/PaymentModal';

export default function MainLayout({
	children,
	showNav = true,
	showHeader = false,
}) {
	const {
		adsModalOpen,
		setAdsModalOpen,
		infoModalOpen,
		paymentModalOpen,
		setInfoModalOpen,
		phoneNumberModalOpen,
		setPhoneNumberModalOpen,
		setPaymentModalOpen,
	} = useContext(LayoutContext);

	const isAnyModalOpen =
		infoModalOpen ||
		adsModalOpen.status ||
		phoneNumberModalOpen ||
		paymentModalOpen.status;

	const handleCloseModal = useCallback(
		(e) => {
			const divTarget = e.target.closest('div');
			if (!divTarget || !divTarget.classList.contains('modal')) {
				setAdsModalOpen(false);
				setInfoModalOpen(false);
				setPhoneNumberModalOpen(false);
				setPaymentModalOpen(false);
			}
		},
		[
			setAdsModalOpen,
			setInfoModalOpen,
			setPhoneNumberModalOpen,
			setPaymentModalOpen,
		],
	);

	const blurClass = useMemo(
		() => (isAnyModalOpen ? 'blur-md' : ''),
		[isAnyModalOpen],
	);

	return (
		<div className='flex flex-col items-center justify-start overflow-hidden bg-neutral-200 h-svh w-svw'>
			<div className={`w-full h-fit z-10 ${blurClass}`}>
				{showHeader && <Header />}
			</div>
			<div
				onClick={handleCloseModal}
				className={`overflow-y-scroll h-full z-0 ${blurClass} bg-neutral-200 lg:flex lg:flex-row lg:items-start lg:justify-center`}>
				{children}
			</div>
			<div className={`w-full h-fit z-10 ${blurClass}`}>
				{showNav && <Navbar />}
			</div>

			{isAnyModalOpen && (
				<div className='absolute z-20 flex items-center justify-center h-svh w-svw'>
					{infoModalOpen && <InfoModal />}
					{adsModalOpen.status && <AdsModal />}
					{phoneNumberModalOpen && <RegisterPhoneNumberModal />}
					{paymentModalOpen.status && <PaymentModal />}
				</div>
			)}
		</div>
	);
}

MainLayout.propTypes = {
	children: PropTypes.node.isRequired,
	showNav: PropTypes.bool,
	showHeader: PropTypes.bool,
};
