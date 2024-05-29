import { useContext } from 'react';
import { LuDollarSign, LuEye } from 'react-icons/lu';
import PropTypes from 'prop-types';

import { LayoutContext } from '../../Contexts/LayoutContext';
import Button from '../Button';

export default function Header({
	address = 'Belo Horizonte, Brazil',
	name = 'NGO Name Example',
}) {
	const { setAdsModalOpen } = useContext(LayoutContext);
	return (
		<header className=' bg-neutral-50'>
			<h1 className='text-3xl font-semibold break-before-avoid '>{name}</h1>
			<p className='font-normal'>{address}</p>
			<div className='flex gap-2 mt-4 text-xl'>
				<Button
					onClick={() => setAdsModalOpen(true)}
					tailwind={'border-2 text-start bg-neutral-50'}
					textColor='text-neutral-600'
					textSize='text-sm'
					icon={<LuEye className='h-[20px] w-[20px] text-xl shrink-0 mr-2' />}>
					Donate by Watching Ads
				</Button>

				<Button icon={<LuDollarSign className=' w-fit' />} tailwind={`gap-2`}>
					Donate
				</Button>
			</div>
		</header>
	);
}

Header.propTypes = {
	address: PropTypes.string,
	name: PropTypes.string,
};
