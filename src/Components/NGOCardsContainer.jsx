import { like } from '../services/user';
import NGOCard from './NGOCard';
import { LuAlertCircle } from 'react-icons/lu';

export default function NGOCardsContainer({
	ngos,
	user,
	setUser,
	favoritePage = false,
}) {
	return (
		<main className='static flex flex-col items-center justify-center h-full gap-4 p-4 overflow-y-scroll lg:gap-8 lg:flex-wrap md:overflow-hidden lg:flex-row w-svw bg-neutral-200'>
			{ngos.length > 0 &&
				ngos.map((ngo) => {
					if (ngo.visible)
						return (
							<NGOCard key={ngo._id} data={ngo} setUser={setUser} user={user} />
						);
					else return null;
				})}
			{ngos.length === 0 && favoritePage && (
				<div className='flex flex-col items-center px-5 text-center'>
					<LuAlertCircle size={'4rem'} className=' text-neutral-500' />
					Sorry... No favorites found. Start by liking any NGO to see them here!
				</div>
			)}
		</main>
	);
}
