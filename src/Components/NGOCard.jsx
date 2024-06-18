import { useCallback, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import { LayoutContext } from '../Contexts/LayoutContext';

import Loading from './Loading';

import ProgressBar from './ProgressBar';
import Button from './Button';
import Carousel from './Carousel';

import { LuDollarSign, LuEye } from 'react-icons/lu';

import i18next from '../Configs/i18n';

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
	const { language, setAdsModalOpen, setPaymentModalOpen, windowWidth } =
		useContext(LayoutContext);
	const [ngoTranslatedInfos, setNgoTranslatedInfos] = useState(null);

	useEffect(() => {
		setNgoTranslatedInfos(
			language === 'BR'
				? { name: namePT, description: descriptionPT }
				: { name, description },
		);
	}, [language, description, name, namePT, descriptionPT]);

	const navigate = useNavigate();

	const showNgoDetails = useCallback(() => {
		if (!modalOpen) navigate(`/ngo/${_id}`);
	}, [modalOpen, navigate, _id]);

	const [smallDisplay] = useState(windowWidth < 1024 ? true : false);

	if (!ngoTranslatedInfos) return <Loading />;

	console.log(windowWidth);
	const descriptionSize = windowWidth > 1024 ? 70 : windowWidth > 768 ? 50 : 30;
	const reducedDescription = ngoTranslatedInfos.description
		.split(' ')
		.slice(0, descriptionSize)
		.join(' ');

	return (
		<div>
			<div className='flex flex-col justify-start w-full text-2xl shadow-md bg-neutral-50 lg:my-2 lg:flex-row hover:cursor-pointer md:h-full lg:w-full flex-row-wrap '>
				<div className='z-10 flex flex-col items-center justify-center w-full lg:w-fit lg:h-full bg-neutral-50'>
					<div className='relative w-full lg:w-[400px] lg:flex-shrink-0'>
						<Carousel
							images={images}
							_id={_id}
							user={user}
							setUser={setUser}
							showNgoDetails={showNgoDetails}
						/>
					</div>
				</div>
				<div className='flex flex-col bg-neutral-50 lg:h-fit'>
					<div
						onClick={showNgoDetails}
						className='flex items-center w-full h-full bg-neutral-50'>
						<div className='flex flex-col items-center mt-2 text-start justify-start w-full font-semibold px-2.5 text-xl'>
							<p className='mr-auto'>{ngoTranslatedInfos.name}</p>
							<p className='mr-auto text-base font-medium'>{cityAndCountry}</p>
						</div>
					</div>
					<div className='px-3 py-2 text-sm' onClick={showNgoDetails}>
						{reducedDescription}&nbsp;
					</div>
					<span
						className='self-start px-3 pb-3 text-sm md:text-base text-sky-500 '
						onClick={showNgoDetails}>
						{i18next.t('showMore')}
					</span>
					<div
						className='z-20 px-4 text-base lg:mt-8 lg:mb-2 bg-neutral-50 lg:flex lg:flex-col lg:justify-end lg:w-full '
						onClick={showNgoDetails}>
						<p className='flex gap-2 text-base font-medium'>
							{i18next.t('monthlyGoal')}
							<span>$1{monthDonations.length.toFixed(2)}/$100.00</span>
						</p>
						<ProgressBar progress={0.1} />
					</div>
					<div className='z-10 flex flex-col items-center justify-between w-full p-3 lg:w-3/4 bg-neutral-50 h-fit lg:mx-auto '>
						<div className='flex flex-col items-center justify-between w-full gap-2 pb-1'>
							<div className='flex items-center justify-center w-full gap-2 modal '>
								<Button
									onClick={() =>
										setAdsModalOpen({ status: true, ngoId: data._id })
									}
									tailwind={'text-start bg-neutral-50 shadow-md drop-shadow-md'}
									textColor='text-neutral-600'
									textSize='text-sm'
									icon={<LuEye className='w-1/2 text-xl' size={'1.25rem'} />}>
									{i18next.t('donateByWatchingAds')}
								</Button>
								<Button
									onClick={() =>
										setPaymentModalOpen({ status: true, ngoId: data._id })
									}
									icon={<LuDollarSign className='text-2xl' size={'1.25rem'} />}
									tailwind={`gap-2 shadow-md drop-shadow-md modal`}>
									{i18next.t('donate')}
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

NGOCard.propTypes = {
	modalOpen: PropTypes.bool,
	data: PropTypes.object,
	user: PropTypes.object,
	setUser: PropTypes.func,
};
