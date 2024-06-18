

export default function NgoCardLarge({
	data,
	images,
	_id,
	user,
	setUser,
	showNgoDetails,
	ngoTranslatedInfos,
	cityAndCountry,
	reducedDescription,
	monthDonations,
	setAdsModalOpen,
	setPaymentModalOpen,
}) {
	return (
		<div className='flex flex-col justify-start w-full text-2xl shadow-md lg:my-2 lg:flex-row hover:cursor-pointer md:h-full flex-row-wrap '>
			<div className='z-10 flex flex-col items-center justify-center w-full lg:h-fit bg-neutral-50'>
				<div className='relative w-full'>
					<Carousel
						images={images}
						_id={_id}
						user={user}
						setUser={setUser}
						showNgoDetails={showNgoDetails}
					/>
				</div>
			</div>
			<div className='flex flex-col bg-neutral-50'>
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
					className='z-20 px-4 text-base bg-neutral-50'
					onClick={showNgoDetails}>
					<p className='flex gap-2 text-base font-medium'>
						{i18next.t('monthlyGoal')}
						<span>$1{monthDonations.length.toFixed(2)}/$100.00</span>
					</p>
					<ProgressBar progress={0.1} />
				</div>
				<div className='z-10 flex flex-col items-center justify-between w-full p-3 bg-neutral-50 h-fit '>
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
	);
}
