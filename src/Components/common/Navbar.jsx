import { RxInfoCircled } from 'react-icons/rx';
import { RxAvatar } from 'react-icons/rx';
import { LuHeart } from 'react-icons/lu';

import { RxMagnifyingGlass } from 'react-icons/rx';
import { useContext } from 'react';
import { LayoutContext } from '../../Contexts/LayoutContext';
import { useNavigate } from 'react-router-dom';
export default function Navbar() {
	const navigate = useNavigate();
	const { setInfoModalOpen } = useContext(LayoutContext);

	return (
		<div
			className={`z-10 h-[50px] bg-blue-600  w-svw shadow-t-md drop-shadow-t-md text-neutral-50 text-3xl flex flex-col items-start justify-start`}>
			<div className='flex items-center w-full h-full text-sm text-center justify-evenly'>
				<div
					className='flex flex-col items-center justify-center text-center'
					onClick={() => navigate('/')}>
					<RxMagnifyingGlass size={'1.25rem'} />
					Explore
				</div>
				<div
					className='flex flex-col items-center justify-center text-center'
					onClick={() => navigate('/favorites')}>
					<LuHeart size={'1.25rem'} />
					Favorites
				</div>
				<div
					className='flex flex-col items-center justify-center text-center'
					onClick={() => navigate('/auth')}>
					<RxAvatar size={'1.25rem'} />
					Log In
				</div>
				<div className='flex flex-col items-center justify-center text-center modal'>
					<RxInfoCircled
						onClick={() => setInfoModalOpen(true)}
						size={'1.25rem'}
					/>
					About Us
				</div>
			</div>
		</div>
	);
}
