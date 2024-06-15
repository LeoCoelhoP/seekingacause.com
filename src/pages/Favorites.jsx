import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { NgoContext } from '../Contexts/NgoContext';
import { UserContext } from '../Contexts/UserContext';

import NGOCardsContainer from '../Components/NGOCardsContainer';

export default function Favorites() {
	const { user, setUser } = useContext(UserContext);
	const { ngo } = useContext(NgoContext);
	const navigate = useNavigate();

	useEffect(() => {
		if (!user) navigate(-1, { replace: true });
	}, [user, navigate]);

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
