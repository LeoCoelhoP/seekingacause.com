import axios from '../Configs/axios';
import toast from 'react-hot-toast';

async function changeProfileAvatar(user, setUser, avatar) {
	if (!user || !setUser || !avatar) {
		toast.error('You need to be logged in to perfom this action');
		return;
	}

	try {
		const response = await axios.patch(
			'/user/update-avatar',
			{
				avatar,
			},
			{ headers: 'multipart/form-data' },
		);

		if (response.data?.user) {
			setUser(response.data.user);
			toast.success(response.data.message);
		} else {
			throw new Error('Failed to update user data');
		}
	} catch (error) {
		toast.error(error.message || 'An error occurred');
	}
}

async function like(user, setUser, likedNgoId) {
	if (!user || !setUser || !likedNgoId) {
		toast.error('You need to be logged in to perfom this action');
		return;
	}

	const isLiked = user?.likes?.includes(likedNgoId);
	const newLikesArray = isLiked
		? user.likes.filter((ngoId) => ngoId !== likedNgoId)
		: [...user.likes, likedNgoId];

	try {
		const response = await axios.patch(
			'/user/like',
			{
				ngoArray: newLikesArray,
			},
			{ headers: { 'Content-Type': 'application/json' } },
		);

		if (response.data?.user) {
			setUser(response.data.user);
		} else {
			throw new Error('Failed to update user data');
		}
	} catch (error) {
		toast.error(error.message || 'An error occurred');
	}
}

async function updateMe({ setUser, fullName, country }) {
	console.log(fullName);
	try {
		const response = await axios.patch(
			'/user/update-me',
			{
				fullName,
				country,
			},
			{ headers: { 'Content-Type': 'application/json' } },
		);

		setUser(response.data.user);
		toast.success(response.data.message);
	} catch (error) {
		toast.error(error.message || 'An error occurred');
	}
}

export { changeProfileAvatar, like, updateMe };
