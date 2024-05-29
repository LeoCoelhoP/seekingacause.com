import { faker } from '@faker-js/faker';
import { FaRegHeart } from 'react-icons/fa';
import { TbShare2 } from 'react-icons/tb';
import { HiOutlineChevronLeft } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';
import { CgChevronLeft, CgChevronRight } from 'react-icons/cg';

export default function Carousel() {
	const navigate = useNavigate();
	const images = [1, 2, 3, 4, 5];
	return (
		<div className='relative z-10 w-full overflow-scroll snap-x snap-mandatory text-neutral-950'>
			<div className='flex'>
				{images.map((img, i) => (
					<img
						key={i}
						src={faker.image.urlLoremFlickr()}
						className=' bg-neutral-200 snap-center'
					/>
				))}
			</div>
		</div>
	);
}
