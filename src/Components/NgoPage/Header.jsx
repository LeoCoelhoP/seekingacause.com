import { useContext } from 'react';
import PropTypes from 'prop-types';

import { LuDollarSign, LuEye, LuPhone } from 'react-icons/lu';

import i18next from '../../Configs/i18n';
import { LayoutContext } from '../../Contexts/LayoutContext';

import Button from '../Button';
import ProgressBar from '../ProgressBar';

export default function Header({
	cityAndCountry,
	name,
	website,
	monthDonations,
	monthlyGoal,
	id,
}) {
	const { setAdsModalOpen, setPaymentModalOpen } = useContext(LayoutContext);
	return (
		<header className=' bg-neutral-50'>
			<h1 className='text-3xl font-semibold break-before-avoid '>{name}</h1>
			{website && (
				<a
					href={website}
					target='_blank'
					className='flex items-center gap-2 font-normal text-blue-600'>
					{website}
				</a>
			)}
			<p className='flex items-center gap-2 font-normal'>
				<LuPhone />
				(+55) 45-99874776
			</p>
			<p className='font-normal'>{cityAndCountry}</p>
			<p className='flex gap-2 mt-8 font-medium'>
				{i18next.t('monthlyGoal')}:{' '}
				<span>
					R${monthDonations.toFixed(2)}/R${monthlyGoal.toFixed(2)}
				</span>
			</p>
			<ProgressBar progress={monthDonations / monthlyGoal} />
			<div className='flex gap-2 mt-4 text-xl'>
				<Button
					onClick={() => setAdsModalOpen({ status: true, ngoId: id })}
					tailwind={'text-start bg-neutral-50 shadow-md drop-shadow-md'}
					textColor='text-neutral-600'
					textSize='text-sm'
					icon={<LuEye className='text-xl' size={'1.25rem'} />}>
					{i18next.t('donateByWatchingAds')}
				</Button>
				<Button
					onClick={() => setPaymentModalOpen({ status: true, ngoId: id })}
					icon={<LuDollarSign className='text-2xl' size={'1.25rem'} />}
					tailwind={`gap-2 shadow-md drop-shadow-md modal`}>
					{i18next.t('donate')}
				</Button>
			</div>
		</header>
	);
}

Header.propTypes = {
	cityAndCountry: PropTypes.string,
	name: PropTypes.string,
	monthDonations: PropTypes.number,
	website: PropTypes.string,
	monthlyGoal: PropTypes.number,
	id: PropTypes.string,
};
