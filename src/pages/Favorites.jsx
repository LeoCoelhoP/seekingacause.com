import { useContext, useEffect } from 'react';
import NGOCardsContainer from '../Components/NGOCardsContainer';
import { NgoContext } from '../Contexts/NgoContext';
import { UserContext } from '../Contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import i18n from '../Configs/i18n';
import Loading from '../Components/Loading';

export default function Favorites() {
	const { user, setUser } = useContext(UserContext);
	const { ngo } = useContext(NgoContext);
	const navigate = useNavigate();

	if (!ngo) return <Loading />;

	const likedNgoArray = ngo.filter((ngo) => {
		if (user?.likes.includes(ngo._id)) return ngo;
		else return null;
	});

	return (
		<NGOCardsContainer
			ngos={likedNgoArray}
			user={user}
			setUser={setUser}
			favoritePage={true}
		/>
	);
}
