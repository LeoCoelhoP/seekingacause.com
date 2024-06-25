import { useCallback, useContext, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import { RxShare2 } from 'react-icons/rx';
import { LuArrowLeft, LuHeart } from 'react-icons/lu';

import { LayoutContext } from '../Contexts/LayoutContext';

import { like } from '../services/user';

export default function Carousel({
	user,
	setUser,
	images,
	_id,
	showNavigateBack = false,
}) {
	const { windowWidth } = useContext(LayoutContext);
	const navigate = useNavigate();
	function handleShare() {
		navigator.share({
			title: 'Seeking a cause',
			text: 'Join us and make a difference! ',
			url: `${import.meta.env.VITE_BASE_URL}ngo/${_id}`,
		});
	}
	const [currentImage, setCurrentImage] = useState(1);
	const liked = user?.likes?.includes(_id) || false;
	const imagesContainer = useRef(null);

	function handleNavigateBack() {
		navigate('/');
	}
	function handleLike(likedNgoId) {
		like(user, setUser, likedNgoId);
	}

	const containerWidth =
		images.length > 2
			? imagesContainer?.current?.offsetWidth + windowWidth
			: imagesContainer?.current?.offsetWidth;
	const imageWidth = containerWidth / images.length;
	function handleClick() {
		console.log(currentImage, images.length);
		if (currentImage >= images.length) {
			imagesContainer.current.scrollTo({
				left: 0,
				behavior: 'smooth',
			});
			setCurrentImage(() => 1);
		} else {
			setCurrentImage((state) => state + 1);
			console.log();
			imagesContainer.current.scrollTo({
				left: imageWidth * (currentImage + 1),
				behavior: 'smooth',
			});
		}
	}

	const handleScroll = useCallback(
		(e) => {
			const imageIndex = Math.floor(e.target.scrollLeft / imageWidth) + 1;
			if (Number.isInteger(imageIndex) && imageIndex <= images.length) {
				setCurrentImage(imageIndex);
			}
		},
		[images.length, imageWidth],
	);

	const imageSize =
		windowWidth > 1024 ? '375px' : windowWidth > 768 ? '300px' : '200px';

	return (
		<div className='relative flex items-end justify-center w-full h-full lg:drop-shadow-md lg:shadow-md'>
			{showNavigateBack && (
				<div
					onClick={handleNavigateBack}
					className='absolute bg-neutral-50  w-[50px] h-[35px] rounded-2xl shadow-md z-10 drop-shadow-md  top-3 start-3 flex items-center justify-center'>
					<LuArrowLeft size={'1.25rem'} />
				</div>
			)}

			<div className='absolute flex items-center justify-center w-full gap-2 mb-2'>
				{images.map((_, i) => (
					<div
						key={i}
						className={`h-[15px] w-[15px] ${
							i + 1 === currentImage ? 'bg-white' : 'bg-neutral-300'
						} rounded-full border-[1px]`}></div>
				))}
			</div>
			<div
				className='flex w-full h-full overflow-y-scroll snap-x snap-mandatory no-scrollbar '
				onScroll={handleScroll}
				onClick={handleClick}
				ref={imagesContainer}>
				{images.map((img, i) => (
					<img
						style={{
							width: '100%',
							height: imageSize,
						}}
						src={img}
						key={i}
						className='flex-none h-full snap-center w-svw'
					/>
				))}
			</div>
			<div className='absolute flex items-center justify-center gap-2 top-3 end-3'>
				<div
					onClick={handleShare}
					className='bg-neutral-50  w-[50px] h-[35px] shadow-md z-10 drop-shadow-md rounded-2xl flex justify-center items-center'>
					<RxShare2 size={'1.25rem'} />
				</div>
				{user && (
					<div
						onClick={() => handleLike(_id)}
						className='bg-neutral-50 text-xl  w-[50px] h-[35px] shadow-md z-10 drop-shadow-md rounded-2xl flex justify-center items-center'>
						<LuHeart
							className={`${liked ? 'text-red-600' : ''}`}
							size={'1.25rem'}
						/>
					</div>
				)}
			</div>
		</div>
	);
}
Carousel.propTypes = {
	user: PropTypes.object,
	setUser: PropTypes.func,
	images: PropTypes.array,
	_id: PropTypes.string,
	showNavigateBack: PropTypes.bool,
	showNgoDetails: PropTypes.func,
};
