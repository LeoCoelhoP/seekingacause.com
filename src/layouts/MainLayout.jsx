import { useContext, useMemo } from 'react';
import PropTypes from 'prop-types';

import { LayoutContext } from '../Contexts/LayoutContext';

import AdsModal from '../Components/AdsModal';
import Header from '../Components/Header';
import InfoModal from '../Components/InfoModal';
import Navbar from '../Components/common/Navbar';
import PaymentModal from '../Components/PaymentModal';
import RegisterPhoneNumberModal from '../Components/RegisterPhoneNumberModal';

export default function MainLayout({
	children,
	showNav = true,
	showHeader = false,
}) {
	const {
		adsModalOpen,
		infoModalOpen,
		paymentModalOpen,
		phoneNumberModalOpen,
	} = useContext(LayoutContext);

	const isAnyModalOpen =
		infoModalOpen ||
		adsModalOpen.status ||
		phoneNumberModalOpen ||
		paymentModalOpen.status;

	const blurClass = useMemo(
		() => (isAnyModalOpen ? 'blur-md' : ''),
		[isAnyModalOpen],
	);
	return (
		<div className='flex flex-col items-center justify-start overflow-hidden bg-neutral-200 h-svh w-svw'>
			<div className={`w-full h-fit  ${blurClass} bg-neutral-50 z-20`}>
				{showHeader && <Header />}
			</div>
			<div
				className={`overflow-y-scroll h-full w-svw z-0 ${blurClass} bg-neutral-200 lg:flex lg:flex-row lg:items-start lg:justify-center`}>
				{children}
			</div>
			<div className={`w-full h-fit z-10 ${blurClass} `}>
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
