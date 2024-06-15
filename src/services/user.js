import axios from '../Configs/axios';
import toast from 'react-hot-toast';

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
		const response = await axios.patch('/user/like', {
			ngoArray: newLikesArray,
			user,
		});
		if (response.data?.user) {
			setUser(response.data.user);
		} else {
			throw new Error('Failed to update user data');
		}
	} catch (error) {
		toast.error(error.message || 'An error occurred');
	}
}

export { like };
