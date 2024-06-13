import { useContext, useState } from 'react';
import Button from './Button';
import { LayoutContext } from '../Contexts/LayoutContext';

import i18next from '../Configs/i18n';
import PayPalPaymentButton from './PayPalPaymentButton';

export default function PaymentModal() {
	const { paymentModalOpen, setPaymentModalOpen } = useContext(LayoutContext);
	const ngoId = paymentModalOpen.ngoId;
	const [valueToDonate, setValueToDonate] = useState(10);
	console.log(valueToDonate);
	const language = localStorage.getItem('i18nextLng') || 'en';

	return (
		<div className='absolute z-20 flex flex-col items-center justify-center w-5/6 gap-2 p-4 mx-auto my-auto overflow-y-scroll font-semibold rounded-md shadow-2xl modal h-fitblur-none text-neutral-950 drop-shadow-2xl bg-neutral-50'>
			<div className='w-full overflow-y-scroll font-normal'>
				<h1 className='text-2xl font-bold'>{i18next.t('paymentMethods')}</h1>
				<br />
				<form className='relative flex flex-col items-center justify-center w-full mb-4 text-xl h-fit'>
					<label className='grid items-center grid-flow-col'>
						<div className='z-20 mr-4 text-xl w-max grow '>
							{i18next.t('donationValue')}:{' '}
						</div>
						<label className='flex'>
							{language === 'en' ? 'USD' : 'R$'}

							<input
								type='number'
								value={valueToDonate}
								className='w-full bg-neutral-50 focus:border-b-2 focus:border-blue-500 focus:outline-0'
								onChange={(e) => setValueToDonate((state) => e.target.value)}
							/>
						</label>
					</label>
					<label className='w-full'>
						<input
							type='range'
							step='10'
							min='0'
							aria-label='Email Address'
							value={valueToDonate}
							className='h-[50px] w-full rounded-md border-neutral-300 bg-neutral-200 indent-4 focus:border-b-2  focus:border-blue-500 focus:outline-0'
							onChange={(e) => setValueToDonate((state) => e.target.value)}
						/>
					</label>
				</form>

				<PayPalPaymentButton
					key={valueToDonate}
					ngoId={ngoId}
					valueToDonate={valueToDonate}
					setPaymentModalOpen={setPaymentModalOpen}
				/>
			</div>
			<Button
				onClick={() => setPaymentModalOpen(false)}
				tailwind={'border-2 text-start bg-neutral-50'}
				textColor='text-neutral-600'
				textSize='text-sm'>
				{i18next.t('close')}
			</Button>
		</div>
	);
}
