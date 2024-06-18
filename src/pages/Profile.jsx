import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { GoSignOut } from 'react-icons/go';
import { LuAlertCircle } from 'react-icons/lu';

import { UserContext } from '../Contexts/UserContext';

import { logOut } from '../services/auth';

import Avatar from '../Components/Avatar';
import Divider from '../Components/Divider';
import Donations from '../Components/NgoPage/Donations';
import EditProfileForm from '../Components/ProfilePage/EditProfileForm';
import Loading from '../Components/Loading';
import ProfileStats from '../Components/ProfilePage/ProfileStats';

export default function Profile() {
	const { user, setUser } = useContext(UserContext);
	const navigate = useNavigate();

	useEffect(() => {
		if (!user) {
			navigate('/auth', { replace: true });
		}
	}, [user, navigate, setUser]);

	if (!user) return <Loading />;
	const {
		avatar,
		country,
		donations,
		fullName,
		level,
		phoneNumber,
		totalDonated,
	} = user;

	function handleLogOut() {
		logOut(setUser);
	}
	return (
		<div className='w-full h-full pt-2 bg-neutral-200'>
			<div className='grid items-center justify-center'>
				<div className='flex items-center justify-center mx-auto rounded-full w-fit h-fit bg-neutral-700'>
					<Avatar width='w-[150px]' height='h-[150px]' src={avatar} />
				</div>
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
			<Divider />
			<div className='flex flex-col items-center justify-center w-full p-2 h-fit '>
				<h1 className='p-2 mr-auto text-xl font-medium'>Last Donations:</h1>
				{donations?.length === 0 ? (
					<div className='flex flex-col items-center text-xl text-center justify-normal text-neutral-600'>
						<LuAlertCircle size={'2rem'} />
						No donations yet... Start making a difference!
					</div>
				) : (
					<Donations donations={donations} profilePage={true} />
				)}
			</div>
		</div>
	);
}
