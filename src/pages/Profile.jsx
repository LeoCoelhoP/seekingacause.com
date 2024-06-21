import { useContext, useEffect, useState } from 'react';
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
import FileUpload from '../Components/ProfilePage/FileUpload';
import { LayoutContext } from '../Contexts/LayoutContext';

export default function Profile() {
	const { user, setUser } = useContext(UserContext);
	const { windowWidth } = useContext(LayoutContext);
	const navigate = useNavigate();
	const [avatarSize, setAvatarSize] = useState(
		windowWidth > 1024 ? '300px' : '150px',
	);

	useEffect(() => {
		setAvatarSize(() => (windowWidth > 1024 ? '300px' : '150px'));
	}, [windowWidth]);

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
			<div className='grid items-center justify-center lg:overflow-hidden lg:flex lg:justify-start lg:items-start'>
				<div className=' items-center justify-center lg:mt-14 rounded-xl shadow-md drop-shadow-md my-3 mx-auto lg:mx-auto h-[150px] w-[150px] lg:w-[300px] lg:h-[300px] bg-neutral-700'>
					<Avatar
						width={`w-[${avatarSize}]'`}
						height={`h-[${avatarSize}]`}
						src={avatar.url}
					/>
					<FileUpload user={user} setUser={setUser} />
				</div>
				<div className='hidden lg:mt-14 lg:flex lg:flex-col lg:flex-wrap lg:w-3/4 lg:justify-start'>
					<div className='hidden: lg:flex lg:flex-col lg:flex-wrap'>
						<div className='mx-3 text-xl font-semibold text-center lg:my-3 lg:mr-auto'>
							{fullName}
						</div>
						<div
							className='flex items-center justify-center w-full gap-2 text-xl lg:justify-start lg:mx-3 '
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
				</div>
			</div>
			<div className='hidden lg:flex'>
				<Divider />
			</div>
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
