import { useContext, useEffect } from 'react';

import { toast } from 'react-hot-toast';

import { UserContext } from '../Contexts/UserContext';
import { LayoutContext } from '../Contexts/LayoutContext';
import { NgoContext } from '../Contexts/NgoContext';

import i18next from '../Configs/i18n';
import { createDonation } from '../services/donation';

import Button from './Button';

export default function AdsModal() {
	const { adsModalOpen, setAdsModalOpen, setPhoneNumberModalOpen } =
		useContext(LayoutContext);
	const { user, setUser } = useContext(UserContext);
	const { setNgo } = useContext(NgoContext);

	let onAds = false;
	useEffect(() => {
		function handleDonation() {
			createDonation({
				user,
				setUser,
				setNgo,
				type: 'ads',
				ngoId: adsModalOpen.ngoId,
			});
			setAdsModalOpen(false);
			console.log(user);
			if (!user?.telegramChatId) setPhoneNumberModalOpen(true);
		}
		if (!onAds) {
			onAds = true;
			toast(i18next.t('almostThere'), { duration: 5000, icon: '⏱️' });
		}
		const timeOut = setTimeout(handleDonation, 5000);
		return () => clearTimeout(timeOut);
	}, [setUser, user, setAdsModalOpen, adsModalOpen, setNgo]);

	return (
		<div className='modal z-20 h-[calc(100% - 20px)] blur-none overflow-y-scroll absolute w-5/6 text-neutral-950  font-semibold drop-shadow-2xl shadow-2xl rounded-md bg-neutral-50  p-4 mx-auto my-auto flex flex-col gap-2 items-center justify-center'>
			<h1 className='w-full text-base text-center font-extra bold md:text-2xl '>
				{i18next.t('adsModalTitle')}
			</h1>
			<h2 className='text-sm text-center md:text-xl '>
				{i18next.t('adsModalText')}
			</h2>
			<div className='w-full bg-neutral-200 h-fit modal'>
				<img src={''} className='w-full h-[130px]' />
			</div>
			<div className='w-full bg-neutral-200 h-fit modal'>
				<img src={''} className='w-full h-[130px]' />
			</div>
			<div className='w-full mb-3 bg-neutral-200 h-fit modal'>
				<img src={''} className='w-full h-[130px]' />
			</div>
			<Button
				onClick={() =>
					setAdsModalOpen((state) => ({ ...state, status: false }))
				}
				tailwind={'border-2 text-start bg-neutral-50'}
				textColor='text-neutral-600'
				textSize='text-sm'>
				{i18next.t('close')}
			</Button>
		</div>
	);
}
