import { GoSignOut } from 'react-icons/go';

import Avatar from '../Components/Avatar';
import EditProfileForm from '../Components/EditProfileForm';
import UserStats from '../Components/ProfileStats';

export default function Profile() {
	function signOutHandler() {
		// Todo handler sign out
	}
	return (
		<div className='h-full pt-2 w-svw bg-neutral-200'>
			<div className='grid items-center justify-center'>
				<Avatar width='w-[150px]' height='h-[150px]' />

				<div className='flex items-center justify-center w-full gap-2 text-xl '>
					<GoSignOut />
					<p className='my-2' onClick={signOutHandler}>
						Log Out
					</p>
				</div>
			</div>
			<UserStats donatorLevel={1} totalDonated={20} adsDonated={14} />
			<EditProfileForm />
		</div>
	);
}
