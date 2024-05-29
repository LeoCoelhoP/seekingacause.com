import { useCallback, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { faker } from '@faker-js/faker';
import { LuDollarSign, LuEye, LuHeart } from 'react-icons/lu';
import { RxShare2 } from 'react-icons/rx';
import PropTypes from 'prop-types';

import { LayoutContext } from '../Contexts/LayoutContext';
import Button from './Button';
import ProgressBar from './ProgressBar';

export default function NGOCard({ modalOpen }) {
	const navigate = useNavigate();
	const { setAdsModalOpen } = useContext(LayoutContext);
	const liked = true;

	const showNgoDetails = useCallback(() => {
		if (!modalOpen) navigate('/ngo/213234e21');
	}, [modalOpen, navigate]);

	return (
		<div className='flex flex-col justify-center text-2xl'>
			<div className='flex flex-col items-center justify-center w-full rounded-md bg-neutral-50'>
				<div className='relative w-full'>
					<img
						src={faker.image.urlLoremFlickr()}
						className='h-[180px] w-full rounded-t-md shadow-md drop-shadow-sm'
					/>
					<div className='absolute flex items-center justify-center gap-2 top-3 end-3'>
						<div className='bg-neutral-50  w-[50px] h-[35px] shadow-md z-10 drop-shadow-md rounded-2xl flex justify-center items-center'>
							<RxShare2 size={'1.25rem'} />
						</div>
						<div className='bg-neutral-50 text-xl  w-[50px] h-[35px] shadow-md z-10 drop-shadow-md rounded-2xl flex justify-center items-center'>
							<LuHeart
								className={`${liked ? 'text-red-600' : ''}`}
								size={'1.25rem'}
							/>
						</div>
					</div>
				</div>
				<div
					onClick={showNgoDetails}
					className='flex items-center w-full bg-neutral-50 h-fit rounded-t-xl '>
					<div className='flex items-center justify-center w-full gap-4 text-xl'>
						{faker.company.name()}
					</div>
				</div>

				<div className='px-3 py-2 text-sm ' onClick={showNgoDetails}>
					{faker.lorem.words(20, 30)}
					<span className='text-sky-500'> Show more...</span>
				</div>
			</div>
			<div className='px-4 bg-neutral-50' onClick={showNgoDetails}>
				<ProgressBar progress={0.2} />
			</div>
			<div className='flex flex-col items-center justify-between w-full p-3 bg-neutral-50 h-fit rounded-b-md'>
				<div className='flex flex-col items-center justify-between w-full gap-2 pb-1'>
					<div className='flex items-center justify-center w-full gap-2 modal '>
						<Button
							onClick={() => setAdsModalOpen(true)}
							tailwind={'text-start bg-neutral-50 shadow-md drop-shadow-md'}
							textColor='text-neutral-600'
							textSize='text-sm'
							icon={<LuEye className='w-1/2 text-xl ' size={'1.25rem'} />}>
							Donate by Watching Ads
						</Button>

						<Button
							icon={<LuDollarSign className='text-2xl' size={'1.25rem'} />}
							tailwind={`gap-2 shadow-md drop-shadow-md`}>
							Donate
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
