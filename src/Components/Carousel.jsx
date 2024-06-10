export default function Carousel({ images }) {
	return (
		<div className='relative z-10 w-full overflow-scroll snap-x snap-mandatory text-neutral-950'>
			<div className='flex'>
				{images.map((img, i) => (
					<img key={i} src={img} className=' bg-neutral-200 snap-center' />
				))}
			</div>
		</div>
	);
}
