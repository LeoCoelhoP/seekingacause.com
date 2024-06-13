import { useContext } from 'react';
import { LuDollarSign, LuEye, LuPhone } from 'react-icons/lu';
import PropTypes from 'prop-types';

import i18next from '../../Configs/i18n';
import { LayoutContext } from '../../Contexts/LayoutContext';
import Button from '../Button';
import ProgressBar from '../ProgressBar';

export default function Header({
	cityAndCountry,
	name,
	monthDonations,
	website,
}) {
	const { setAdsModalOpen } = useContext(LayoutContext);
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
			<p className='flex gap-2 mt-8 '>
				{i18next.t('monthlyGoal')}:{' '}
				<span>${monthDonations.length.toFixed(2)}/$100.00</span>
			</p>
			<ProgressBar progress={monthDonations.length} />
			<div className='flex gap-2 mt-4 text-xl'>
				<Button
					onClick={() => setAdsModalOpen(true)}
					tailwind={'border-2 text-start bg-neutral-50'}
					textColor='text-neutral-600'
					textSize='text-sm'
					icon={<LuEye className='h-[20px] w-[20px] text-xl shrink-0 mr-2' />}>
					{i18next.t('donateByWatchingAds')}
				</Button>

				<Button icon={<LuDollarSign className=' w-fit' />} tailwind={`gap-2`}>
					{i18next.t('donate')}
				</Button>
			</div>
		</header>
	);
}

Header.propTypes = {
	cityAndCountry: PropTypes.string,
	name: PropTypes.string,
};
