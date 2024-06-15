import { useContext, useState } from 'react';
import Button from './Button';
import { LayoutContext } from '../Contexts/LayoutContext';

import i18next from '../Configs/i18n';
import PayPalPaymentButton from './PayPalPaymentButton';

export default function PaymentModal() {
	const { paymentModalOpen, setPaymentModalOpen } = useContext(LayoutContext);
	const [valueToDonate, setValueToDonate] = useState(5);
	const language = localStorage.getItem('i18nextLng') || 'en';

	return (
		<div className='absolute z-20 flex flex-col items-center justify-center w-5/6 gap-2 p-4 mx-auto my-auto overflow-hidden font-semibold rounded-md shadow-2xl modal h-fitblur-none text-neutral-950 drop-shadow-2xl bg-neutral-50'>
			<div className='w-full h-full font-normal'>
				{/* PAYMENTS OPTIONS */}
				<h1 className='text-2xl font-bold text-center'>
					{i18next.t('valueToDonate')}:
				</h1>
				<div className='flex flex-wrap items-center justify-center w-full h-full gap-4 p-2'>
					<div className='flex gap-4 mt-2'>
						<div
							className={`md:w-[100px] md:h-[100px] w-[85px] h-[85px] flex items-center md:text-xl justify-center border-2 bg-neutral-50 drop-shadow-md rounded-md ${
								valueToDonate === 5 ? 'border-yellow-400' : 'border-neutral-200'
							}`}
							onClick={() => setValueToDonate(5)}>
							{language === 'pt' ? 'R$' : '$'}5,00
						</div>
						<div
							className={`md:w-[100px] md:h-[100px] w-[85px] h-[85px] flex items-center md:text-xl justify-center border-2 bg-neutral-50 drop-shadow-md rounded-md ${
								valueToDonate === 25
									? 'border-yellow-400'
									: 'border-neutral-200'
							}`}
							onClick={() => setValueToDonate(25)}>
							{language === 'pt' ? 'R$' : '$'}25,00
						</div>
						<div
							className={`md:w-[100px] md:h-[100px] w-[85px] h-[85px] flex items-center md:text-xl justify-center border-2 bg-neutral-50 drop-shadow-md rounded-md ${
								valueToDonate === 50
									? 'border-yellow-400'
									: 'border-neutral-200'
							}`}
							onClick={() => setValueToDonate(50)}>
							{language === 'pt' ? 'R$' : '$'}50,00
						</div>
					</div>
					<div className='flex gap-4'>
						<div
							className={`md:w-[100px] md:h-[100px] w-[85px] h-[85px] flex items-center md:text-xl justify-center border-2 bg-neutral-50 drop-shadow-md rounded-md ${
								valueToDonate === 100
									? 'border-yellow-400'
									: 'border-neutral-200'
							}`}
							onClick={() => setValueToDonate(100)}>
							{language === 'pt' ? 'R$' : '$'}100,00
						</div>
						<div
							className={`md:w-[100px] md:h-[100px] w-[85px] h-[85px] flex items-center md:text-xl justify-center border-2 bg-neutral-50 drop-shadow-md rounded-md ${
								valueToDonate === 500
									? 'border-yellow-400'
									: 'border-neutral-200'
							}`}
							onClick={() => setValueToDonate(500)}>
							{language === 'pt' ? 'R$' : '$'}500,00
						</div>
						<div
							className={`md:w-[100px] md:h-[100px] w-[85px] h-[85px] flex items-center md:text-xl justify-center border-2 bg-neutral-50 drop-shadow-md rounded-md ${
								valueToDonate === 1000
									? 'border-yellow-400'
									: 'border-neutral-200'
							}`}
							onClick={() => setValueToDonate(1000)}>
							{language === 'pt' ? 'R$' : '$'}1000,00
						</div>
					</div>
				</div>
				{/* PayPal Options */}
				<div className='flex items-center justify-center mt-6'>
					<PayPalPaymentButton
						key={valueToDonate}
						ngoId={paymentModalOpen?.ngoId}
						valueToDonate={valueToDonate}
						setPaymentModalOpen={setPaymentModalOpen}
					/>
				</div>
			</div>
			<Button
				onClick={() => setPaymentModalOpen(false)}
				tailwind={'shadow-md drop-shadow-md bg-neutral-50'}
				textColor='text-neutral-600'
				textSize='text-xl'>
				{i18next.t('close')}
			</Button>
		</div>
	);
}
