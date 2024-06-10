import { GoSignOut } from 'react-icons/go';

import { UserContext } from '../Contexts/UserContext';

import Avatar from '../Components/Avatar';
import EditProfileForm from '../Components/ProfilePage/EditProfileForm';
import ProfileStats from '../Components/ProfilePage/ProfileStats';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { logOut } from '../services/auth';

export default function Profile() {
	const { user, setUser } = useContext(UserContext);
	const navigate = useNavigate();

	useEffect(() => {
		if (!user) {
			navigate('/auth', { replace: true });
		}
	}, [user, navigate, setUser]);
	console.log(user);

	if (!user) return;

	const { donations, totalDonated, level, fullName, phoneNumber, country } =
		user;
	function handleLogOut() {
		logOut(setUser);
	}
	return (
		<div className='h-full pt-2 w-svw bg-neutral-200'>
			<div className='grid items-center justify-center'>
				<Avatar width='w-[150px]' height='h-[150px]' src={user.avatar} />
				<div className='text-xl font-semibold text-center'>{fullName}</div>
				<div
					className='flex items-center justify-center w-full gap-2 text-xl '
					onClick={handleLogOut}>
					<GoSignOut />
					<p className='my-2'>Log Out</p>
				</div>
			</div>
			<ProfileStats
				level={level}
				totalDonated={totalDonated}
				donations={donations}
			/>
			<EditProfileForm
				phoneNumber={phoneNumber}
				country={country}
				fullName={fullName}
			/>
		</div>
	);
}
