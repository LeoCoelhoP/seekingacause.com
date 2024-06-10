import { useContext, useEffect } from 'react';
import NGOCardsContainer from '../Components/NGOCardsContainer';
import { NgoContext } from '../Contexts/NgoContext';
import { UserContext } from '../Contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import i18n from '../Configs/i18n';

export default function Favorites() {
	const { ngo } = useContext(NgoContext);
	const { user, setUser } = useContext(UserContext);
	const navigate = useNavigate();
	useEffect(() => {
		toast.error(i18n.t('noLoggedInFavorites'));
		if (!user) navigate('/auth');
	}, [user, navigate]);
	const likedNgoArray = ngo.filter((ngo) => {
		if (user?.likes.includes(ngo._id)) return ngo;
		else return null;
	});

	if (!ngo) return;

	return (
		<NGOCardsContainer
			ngos={likedNgoArray}
			user={user}
			setUser={setUser}
			favoritePage={true}
		/>
	);
}
