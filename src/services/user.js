import axios from '../utils/axios';
import toast from 'react-hot-toast';

async function like(user, setUser, likedNgoId) {
	const isLiked = user?.likes.some((ngoId) => ngoId === likedNgoId);
	let newLikesArray = null;

	console.log(isLiked);
	if (isLiked)
		newLikesArray = user?.likes.filter((ngoId) => ngoId !== likedNgoId);
	else newLikesArray = [...user.likes, likedNgoId];

	try {
		const response = await axios.patch('/user/like', {
			ngoArray: newLikesArray,
			user,
		});
		setUser(() => ({ ...response.data.user }));
	} catch (error) {
		toast.error(error);
	}
}

export { like };
