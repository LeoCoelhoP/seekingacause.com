import { useContext, useEffect } from 'react';

import { LayoutContext } from '../Contexts/LayoutContext';
import i18next from '../Configs/i18n';

import Button from './Button';

export default function RegisterPhoneNumberModal() {
	const { setPhoneNumberModalOpen } = useContext(LayoutContext);

	useEffect(() => {
		const timeOut = setTimeout(() => setPhoneNumberModalOpen(false), 7000);
		return () => clearTimeout(timeOut);
	}, [setPhoneNumberModalOpen]);
	return (
		<div className='modal z-20 h-[calc(100% - 20px)] blur-none absolute lg:w-2/6 w-5/6 text-neutral-950 font-semibold drop-shadow-2xl shadow-2xl rounded-md bg-neutral-50 p-4 mx-auto my-auto flex flex-col gap-2 items-center justify-center'>
			<h1 className='text-2xl font-semibold text-center'>
				{i18next.t('thanksMessage')}
			</h1>
			<h1 className='text-xl font-medium text-center'>
				{i18next.t('phoneModalTitle')}
			</h1>
			<img
				className='rounded-md h-[200px] w-fit'
				src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/2048px-Telegram_logo.svg.png'
				alt='Telegram Popup'
			/>
			<p>{i18next.t('phoneModalDescription')}</p>
			<form className='w-full'></form>
			<div className='flex w-full gap-2'>
				<Button
					onClick={() => setPhoneNumberModalOpen(false)}
					tailwind='border-2 text-start bg-neutral-50 p-0'
					textColor='text-neutral-600'
					textSize='text-sm'>
					{i18next.t('close')}
				</Button>
				<Button
					onClick={() =>
						window.open('https://telegram.me/Seekingacause_bot?start', '_blank')
					}
					tailwind='border-2 text-start bg-blue-600 p-0 w-2/3'
					textColor='text-neutral-50'
					textSize='text-sm'>
					{i18next.t('phoneModalAddPhoneNumberButtonText')}
				</Button>
			</div>
		</div>
	);
}
