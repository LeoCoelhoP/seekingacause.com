import PropTypes from 'prop-types';

import ProgressBar from './ProgressBar';

export default function ProfileStats({
	donatorLevel,
	totalDonated,
	adsDonated,
}) {
	return (
		<div className='flex flex-col items-start justify-center w-full px-4 pt-1 pb-2 text-xl border-t-2 border-b-1 border-neutral-300'>
			<div className='font-semibold text-start'>Donator Level:</div>
			<div className='flex items-center justify-center w-full gap-2'>
				<p className='w-[70px] font-normal'>LV {donatorLevel}</p>
				<ProgressBar progress={0.66} />
				<p className='w-[57px] font-normal'>LV {donatorLevel + 1}</p>
			</div>
			<div className='mt-2 text-start'>
				<span className='font-medium'>Total donated:</span>{' '}
				<span className='font-normal'>${totalDonated.toFixed(2)}</span>
			</div>
			<div className='text-start'>
				<span className='font-medium'>Ads donated:</span>{' '}
				<span className='font-normal'>{adsDonated}</span>
			</div>
		</div>
	);
}

ProfileStats.propTypes = {
	donatorLevel: PropTypes.number.isRequired,
	totalDonated: PropTypes.number.isRequired,
	adsDonated: PropTypes.number.isRequired,
};
