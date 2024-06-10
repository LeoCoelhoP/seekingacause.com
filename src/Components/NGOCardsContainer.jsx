import { like } from '../services/user';
import NGOCard from './NGOCard';
import { LuAlertCircle } from 'react-icons/lu';

export default function NGOCardsContainer({
	ngos,
	user,
	setUser,
	favoritePage = false,
}) {
	function handleLike(likedNgoId) {
		like(user, setUser, likedNgoId);
	}
	return (
		<main className='static flex flex-col items-center h-full gap-4 p-4 overflow-y-scroll shadow-md w-svw bg-neutral-200'>
			{ngos.length > 0 &&
				ngos.map((ngo) => (
					<NGOCard
						key={ngo._id}
						data={ngo}
						handleLike={handleLike}
						liked={user?.likes.includes(ngo._id)}
					/>
				))}
			{ngos.length === 0 && favoritePage && (
				<div className='flex flex-col items-center justify-center px-5 my-auto text-center'>
					<LuAlertCircle size={'4rem'} className='text-neutral-500' />
					Sorry... No favorites found. Start by liking any NGO to see them here!
				</div>
			)}
		</main>
	);
}
