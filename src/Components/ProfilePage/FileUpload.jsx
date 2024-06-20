import { useEffect, useState } from 'react';
import { CiCirclePlus } from 'react-icons/ci';
import { changeProfileAvatar } from '../../services/user';

export default function FileUpload({ user, setUser }) {
	const [avatar, setAvatar] = useState(null);

	useEffect(() => {
		if (!avatar || !user) return;
		const formData = new FormData();
		formData.append('avatar', avatar);
		changeProfileAvatar(user, setUser, avatar);
		setAvatar(null);
	}, [avatar, user, setUser]);
	function handleChange(e) {
		e.preventDefault();
		setAvatar(e.target.files[0]);
	}
	return (
		<form
			className='fixed end-0 z-30 w-[150px] bottom-0 h-[150px] bg-transparent  lg:w-full lg:h-full rounded-xl'
			encType='multipart/form-data'>
			<label
				htmlFor='avatar'
				className='z-40 flex items-center justify-center w-full h-full text-5xl opacity-0 rounded-xl bg-neutral-800 hover:opacity-70 text-neutral-50'>
				<CiCirclePlus className='w-[75px] h-[75px] lg:w-[150px] lg:h-[150px] opacity-100' />
			</label>
			<input
				onChange={handleChange}
				accept='images/*, .jpg, .png'
				type='file'
				id='avatar'
				name='avatar'
				className='rounded-full lg:rounded-md w-[150px] h-[150px] opacity-0'
			/>
		</form>
	);
}
