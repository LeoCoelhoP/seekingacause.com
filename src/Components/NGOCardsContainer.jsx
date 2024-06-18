import PropTypes from 'prop-types';

import { LuAlertCircle } from 'react-icons/lu';

import NGOCard from './NGOCard';
import { useContext } from 'react';
import { LayoutContext } from '../Contexts/LayoutContext';

export default function NGOCardsContainer({
	ngos,
	user,
	setUser,
	favoritePage = false,
}) {
	const ngosToDisplay = ngos.filter((ngo) => ngo.visible);
	const { windowWidth } = useContext(LayoutContext);
	return (
		<main className='flex w-full h-fit'>
			{windowWidth > 1024 && (
				<div
					className={`${
						windowWidth > 1300 ? 'w-[500px]' : 'w-[100px]'
					} h-full  bg-neutral-300`}></div>
			)}
			<div className='static flex flex-col items-center justify-start w-full h-full gap-4 lg:gap-0 lg:flex-wrap lg:flex-row lg:justify-center bg-neutral-300'>
				{ngosToDisplay.length > 0 &&
					ngosToDisplay.map((ngo) => (
						<NGOCard key={ngo._id} data={ngo} setUser={setUser} user={user} />
					))}
				{ngosToDisplay.length === 0 && favoritePage && (
					<div className={`flex flex-col items-center  my-20 px-5 text-center`}>
						<LuAlertCircle size={'4rem'} className='text-neutral-500' />
						Sorry... No favorites found. Start by liking any NGO to see them
						here!
					</div>
				)}
				{ngosToDisplay.length === 0 && !favoritePage && (
					<div
						className={`flex flex-col items-center my-20 px-5 text-center justify-center h-full`}>
						<LuAlertCircle size={'4rem'} className='text-neutral-500' />
						Sorry... Query not found. Please, try searching again.
					</div>
				)}
			</div>
			{windowWidth > 1024 && (
				<div className='w-[500px] h-full  bg-neutral-300'></div>
			)}
		</main>
	);
}

NGOCardsContainer.propTypes = {
	ngos: PropTypes.array,
	user: PropTypes.object,
	setUser: PropTypes.func,
	favoritePage: PropTypes.bool,
};
