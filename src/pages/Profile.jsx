import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { GoSignOut } from 'react-icons/go';
import { LuAlertCircle } from 'react-icons/lu';

import { logOut } from '../services/auth';
import { UserContext } from '../Contexts/UserContext';

import Avatar from '../Components/Avatar';
import Divider from '../Components/Divider';
import Donations from '../Components/NgoPage/Donations';
import EditProfileForm from '../Components/ProfilePage/EditProfileForm';
import Loading from '../Components/Loading';
import ProfileStats from '../Components/ProfilePage/ProfileStats';
import FileUpload from '../Components/ProfilePage/FileUpload';
import { LayoutContext } from '../Contexts/LayoutContext';

export default function Profile() {
	const { windowWidth } = useContext(LayoutContext);
	const { user, setUser } = useContext(UserContext);
	const [avatarSize, setAvatarSize] = useState(
		windowWidth > 1024 ? '300px' : '150px',
	);

	const navigate = useNavigate();

	useEffect(() => {
		if (!user) {
			navigate('/auth', { replace: true });
		}
	}, [user, navigate, setUser]);
  
	useEffect(() => {
		setAvatarSize(() => (windowWidth > 1024 ? '300px' : '150px'));
	}, [windowWidth]);

	if (!user) return <Loading />;
	const { avatar, country, donations, fullName, level, totalDonated } = user;

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
						src={
							avatar?.url ||
							'data:image/png;base64,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'
						}
					/>
					<FileUpload user={user} setUser={setUser} />
				</div>
				<div className=' lg:mt-14 lg:flex lg:flex-col lg:flex-wrap lg:w-3/4 lg:justify-start'>
					<div className=' lg:flex lg:flex-col lg:flex-wrap'>
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
			<EditProfileForm country={country} fullName={fullName} />
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
