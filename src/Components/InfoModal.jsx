import { useContext } from 'react';

import { LayoutContext } from '../Contexts/LayoutContext';

import i18next from '../Configs/i18n';

import Button from './Button';

export default function InfoModal() {
	const { setInfoModalOpen } = useContext(LayoutContext);

	return (
		<div className='absolute z-20 flex flex-col items-center justify-center w-5/6 gap-2 p-4 mx-auto my-auto overflow-y-scroll font-semibold rounded-md shadow-2xl lg:h-fit md:overflow-hidden modal h-5/6 blur-none text-neutral-950 drop-shadow-2xl bg-neutral-50'>
			<div className='overflow-y-scroll font-normal md:w-full'>
				<h1 className='font-bold'>{i18next.t('infoModalAboutTitle')}</h1>
				<br />
				{i18next.t('infoModalAboutText')}
				<br />
				<br /> <h2 className='font-bold'>{i18next.t('infoModalRoleTitle')}</h2>
				<br />{' '}
				<h3 className='font-bold'>
					{i18next.t('infoModalConnectingDonorsTitle')}
				</h3>
				{i18next.t('infoModalConnectingDonorsText')}
				<br />
				<h3 className='font-bold'>
					{i18next.t('infoModalTransparencyTrustTitle')}
				</h3>
				{i18next.t('infoModalTransparencyTrustText')}
				<br />
				<h3 className='font-bold'>
					{i18next.t('infoModalMaximizingImpactTitle')}
				</h3>
				{i18next.t('infoModalMaximizingImpactText')}
				<br />
				<h3 className='font-bold'>{i18next.t('infoModalHowItWorksTitle')}:</h3>
				{i18next.t('infoModalHowItWorksText')}
				<br />
				<h3 className='font-bold'>{i18next.t('infoModalContactUsTitle')}</h3>
				{i18next.t('infoModalContactUsText')}
			</div>

			<Button
				onClick={() => setInfoModalOpen(false)}
				tailwind={'border-2 text-start bg-neutral-50'}
				textColor='text-neutral-600'
				textSize='text-sm'>
				{i18next.t('close')}
			</Button>
		</div>
	);
}
