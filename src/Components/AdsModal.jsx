import { faker } from '@faker-js/faker';
import Button from './Button';
import { useContext } from 'react';
import { LayoutContext } from '../Contexts/LayoutContext';
import { ADS_MODAL_TEXT, ADS_MODAL_TITLE } from '../Constants/AdsModal';

export default function AdsModal() {
	const { setAdsModalOpen } = useContext(LayoutContext);
	return (
		<div className='modal z-20 h-[calc(100% - 20px)] blur-none overflow-y-scroll absolute w-5/6 text-neutral-950  font-semibold drop-shadow-2xl shadow-2xl rounded-md bg-neutral-50  p-4 mx-auto my-auto flex flex-col gap-2 items-center justify-center'>
			<h1 className='w-full text-base font-extrabold text-center '>
				{ADS_MODAL_TITLE}
			</h1>
			<h2 className='text-sm text-center '>{ADS_MODAL_TEXT}</h2>
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
				Close
			</Button>
		</div>
	);
}
