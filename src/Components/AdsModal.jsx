import { faker } from '@faker-js/faker';
import Button from './Button';
import { useContext, useEffect } from 'react';
import { LayoutContext } from '../Contexts/LayoutContext';
import { UserContext } from '../Contexts/UserContext';
import { NgoContext } from '../Contexts/NgoContext';
import i18next from '../Configs/i18n';
import { toast } from 'react-hot-toast';
import { createDonation } from '../services/donation';

export default function AdsModal(ngo) {
	const { adsModalOpen, setAdsModalOpen } = useContext(LayoutContext);
	const { user, setUser } = useContext(UserContext);
	const { setNgo } = useContext(NgoContext);

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
		}
		toast(
			'You are almost there! Wait 5 more seconds for us to calculate your donation. ',
			{ duration: 5000, icon: '⏱️' },
		);
		const timeOut = setTimeout(handleDonation, 1000);

		return () => clearTimeout(timeOut);
	}, [setUser, user, setAdsModalOpen, adsModalOpen, setNgo]);
	return (
		<div className='modal z-20 h-[calc(100% - 20px)] blur-none overflow-y-scroll absolute w-5/6 text-neutral-950  font-semibold drop-shadow-2xl shadow-2xl rounded-md bg-neutral-50  p-4 mx-auto my-auto flex flex-col gap-2 items-center justify-center'>
			<h1 className='w-full text-base font-extrabold text-center '>
				{i18next.t('adsModalTitle')}
			</h1>
			<h2 className='text-sm text-center '>{i18next.t('adsModalText')}</h2>
			<div className='w-full bg-neutral-200 h-fit modal'>
				<img src={faker.image.urlLoremFlickr()} className='w-full h-[130px]' />
			</div>
			<div className='w-full bg-neutral-200 h-fit modal'>
				<img src={faker.image.urlLoremFlickr()} className='w-full h-[130px]' />
			</div>
			<div className='w-full mb-3 bg-neutral-200 h-fit modal'>
				<img src={faker.image.urlLoremFlickr()} className='w-full h-[130px]' />
			</div>
			<Button
				onClick={() => setAdsModalOpen(false)}
				tailwind={'border-2 text-start bg-neutral-50'}
				textColor='text-neutral-600'
				textSize='text-sm'>
				{i18next.t('close')}
			</Button>
		</div>
	);
}
