import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { LayoutContext } from '../Contexts/LayoutContext';
import { NgoContext } from '../Contexts/NgoContext';
import { UserContext } from '../Contexts/UserContext';

import Loading from '../Components/Loading';
import NGOCardsContainer from '../Components/NGOCardsContainer';

export default function Favorites() {
	const { setPage } = useContext(LayoutContext);
	const { ngo } = useContext(NgoContext);
	const { user, setUser } = useContext(UserContext);
	const navigate = useNavigate();

	useEffect(() => {
		if (!user) navigate(-1, { replace: true });
		setPage('favorites');
	}, [user, navigate, setPage]);

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
