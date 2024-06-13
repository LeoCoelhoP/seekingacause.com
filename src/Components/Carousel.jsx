import { useEffect, useLayoutEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LuHeart } from 'react-icons/lu';
import { RxShare2 } from 'react-icons/rx';
import { like } from '../services/user';
import { LuArrowLeft } from 'react-icons/lu';

export default function Carousel({
	user,
	setUser,
	images,
	_id,
	showNavigateBack = false,
	showNgoDetails,
}) {
	const navigate = useNavigate();
	function handleShare() {
		navigator.share({
			title: 'Seeking a cause',
			text: 'Join us and make a difference! ',
			url: `${import.meta.env.BASE_URL}/ngo/${_id}`,
		});
	}
	const [currentImage, setCurrentImage] = useState(1);
	const liked = user?.likes.includes(_id);

	function handleNavigateBack() {
		navigate(-1);
	}
	function handleLike(likedNgoId) {
		like(user, setUser, likedNgoId);
	}

	function handleScroll(e) {
		const containerWidth = e.target.offsetWidth;
		const imageWidth = containerWidth / images.length;
		const imageIndex = Math.floor(e.target.scrollLeft / imageWidth) + 1;

		// If the carousel loops around, adjust the index accordingly
		// For example: imageIndex = (imageIndex - 1) % images.length + 1;

		if (Number.isInteger(imageIndex) && imageIndex < images.length + 1) {
			setCurrentImage(imageIndex);
		}
	}
	const [windowWidth, setWindowWidth] = useState(0);
	useLayoutEffect(() => {
		console.log(windowWidth);
		function updateWidth() {
			setWindowWidth(window.innerWidth);
		}
		const event = window.addEventListener('resize', updateWidth);
		updateWidth();

		return () => window.removeEventListener('resize', event);
	}, [windowWidth]);
	return (
		<div className='relative flex flex-row-reverse items-end justify-center w-full h-full'>
			{showNavigateBack && (
				<div
					onClick={handleNavigateBack}
					className='absolute bg-neutral-50  w-[50px] h-[35px] shadow-md z-10 drop-shadow-md rounded-2xl top-3 start-3 flex items-center justify-center'>
					<LuArrowLeft size={'1.25rem'} />
				</div>
			)}

			<div
				className='absolute flex items-center justify-center w-full gap-2 mb-2'
				onClick={showNavigateBack ? undefined : showNgoDetails}>
				{images.map((_, i) => (
					<div
						key={i}
						className={`h-[15px] w-[15px] ${
							i + 1 === currentImage ? 'bg-neutral-50' : 'bg-neutral-300'
						} rounded-full border-[1px]`}></div>
				))}
			</div>
			<div
				className='flex w-full h-full overflow-y-scroll snap-x snap-mandatory no-scrollbar '
				onScroll={handleScroll}
				onClick={showNavigateBack ? undefined : showNgoDetails}>
				{images.map((img, i) => (
					<img
						style={{
							width: '100%',
							height:
								windowWidth > 1024
									? '400px'
									: windowWidth > 768
									? '300px'
									: '200px',
						}}
						src={img}
						key={i}
						className='flex-none h-full rounded-t-md snap-center w-svw'
					/>
				))}
			</div>
			<div
				className='absolute flex items-center justify-center gap-2 top-3 end-3'
				onClick={showNavigateBack ? undefined : showNgoDetails}>
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
