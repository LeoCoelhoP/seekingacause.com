import { useContext, useState } from 'react';

import { MdOutlinePhone } from 'react-icons/md';

import { LayoutContext } from '../Contexts/LayoutContext';
import i18next from '../Configs/i18n';

import Button from './Button';

export default function RegisterPhoneNumberModal() {
	const { setPhoneNumberModalOpen } = useContext(LayoutContext);

	const [phoneNumber, setPhoneNumber] = useState('');

	function handlePhoneNumberSubmit() {
		// Todo Phone Submission
	}
	return (
		<div className='modal z-20 h-[calc(100% - 20px)] blur-none overflow-y-scroll absolute w-5/6 text-neutral-950 font-semibold drop-shadow-2xl shadow-2xl rounded-md bg-neutral-50 p-4 mx-auto my-auto flex flex-col gap-2 items-center justify-center'>
			<h1 className='text-xl font-semibold text-center'>
				{i18next.t('phoneModalTitle')}
			</h1>
			<img
				className='rounded-md h-[200px] w-full'
				src='/whatsappPopUp.jpg'
				alt='WhatsApp Popup'
			/>
			<p>{i18next.t('phoneModalDescription')}</p>
			<form className='w-full'>
				<label className='w-full'>
					<span className='relative top-[13px] left-2 bg-neutral-50 text-xl w-fit'>
						Phone Number:
					</span>
					<input
						type='number'
						onChange={(e) => setPhoneNumber(() => e.target.value)}
						className='h-[50px] border-2 w-full rounded-md border-neutral-300 bg-neutral-50 indent-8'
						value={phoneNumber}
						placeholder={i18next.t('phoneModalPhoneNumberPlaceholder')}
					/>
					<MdOutlinePhone className='relative bottom-8 left-2' />
				</label>
			</form>
			<div className='flex w-full gap-2'>
				<Button
					onClick={() => setPhoneNumberModalOpen(false)}
					tailwind='border-2 text-start bg-neutral-50 p-0'
					textColor='text-neutral-600'
					textSize='text-sm'>
					{i18next.t('close')}
				</Button>
				<Button
					onClick={handlePhoneNumberSubmit}
					tailwind='border-2 text-start bg-blue-600 p-0 w-2/3'
					textColor='text-neutral-50'
					textSize='text-sm'>
					{i18next.t('phoneModalAddPhoneNumberButtonText')}
				</Button>
			</div>
		</div>
	);
}
