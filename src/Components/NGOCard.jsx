import { useCallback, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LuDollarSign, LuEye } from 'react-icons/lu';
import i18next from '../Configs/i18n';
import PropTypes from 'prop-types';

import { LayoutContext } from '../Contexts/LayoutContext';
import Button from './Button';
import ProgressBar from './ProgressBar';
import ReactCountryFlag from 'react-country-flag';
import Carousel from './Carousel';

export default function NGOCard({ modalOpen, data, user, setUser }) {
	const {
		name,
		namePT,
		description,
		descriptionPT,
		images,
		_id,
		monthDonations,
		cityAndCountry,
	} = data;
	const { language, setAdsModalOpen, setPaymentModalOpen } =
		useContext(LayoutContext);
	const [ngoTranslatedInfos, setNgoTranslatedInfos] = useState();
	useEffect(() => {
		setNgoTranslatedInfos(() =>
			language === 'BR'
				? { name: namePT, description: descriptionPT }
				: { name, description },
		);
	}, [language, description, name, namePT, descriptionPT]);

	const navigate = useNavigate();
	const showNgoDetails = useCallback(() => {
		if (!modalOpen) navigate(`/ngo/${_id}`);
	}, [modalOpen, navigate, _id]);

	if (!ngoTranslatedInfos) return;

	const reducedDescription = ngoTranslatedInfos.description
		.split(' ')
		.slice(0, 30)
		.join(' ');

	return (
		<div className='flex flex-col justify-center text-2xl md:w-[700px] md:h-full shrink-0 lg:w-[900px] '>
			<div className='flex flex-col items-center justify-center w-full rounded-md bg-neutral-50'>
				<div className='relative w-full'>
					<Carousel
						images={images}
						_id={_id}
						user={user}
						setUser={setUser}
						showNgoDetails={showNgoDetails}
					/>
				</div>
				<div
					onClick={showNgoDetails}
					className='flex items-center w-full bg-neutral-50 h-fit rounded-t-xl '>
					<div className='flex flex-col items-center mt-2 text-start justify-start w-full font-semibold px-2.5 text-xl'>
						<p className='mr-auto'>{ngoTranslatedInfos.name}</p>
						<p className='mr-auto text-base font-medium'>{cityAndCountry}</p>
					</div>
				</div>
				<div className='px-3 py-2 text-sm ' onClick={showNgoDetails}>
					{reducedDescription}&nbsp;
					<span className='text-sky-500'>{i18next.t('showMore')}</span>
				</div>
			</div>
			<div className='px-4 text-base bg-neutral-50' onClick={showNgoDetails}>
				<p className='flex gap-2'>
					{i18next.t('monthlyGoal')}
					<span>$1{monthDonations.length.toFixed(2)}/$100.00</span>
				</p>

				<ProgressBar progress={0.1} />
			</div>
			<div className='flex flex-col items-center justify-between w-full p-3 bg-neutral-50 h-fit rounded-b-md'>
				<div className='flex flex-col items-center justify-between w-full gap-2 pb-1'>
					<div className='flex items-center justify-center w-full gap-2 modal '>
						<Button
							onClick={() => setAdsModalOpen({ status: true, ngoId: data._id })}
							tailwind={'text-start bg-neutral-50 shadow-md drop-shadow-md'}
							textColor='text-neutral-600'
							textSize='text-sm'
							icon={<LuEye className='w-1/2 text-xl ' size={'1.25rem'} />}>
							{i18next.t('donateByWatchingAds')}
						</Button>

						<Button
							onClick={() =>
								setPaymentModalOpen({ status: true, ngoId: data._id })
							}
							icon={<LuDollarSign className='text-2xl' size={'1.25rem'} />}
							tailwind={`gap-2 shadow-md drop-shadow-md`}>
							{i18next.t('donate')}
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

NGOCard.propTypes = {
	modalOpen: PropTypes.bool,
};
