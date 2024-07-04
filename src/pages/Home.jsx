import { useContext, useEffect } from 'react';

import { LayoutContext } from '../Contexts/LayoutContext';
import { NgoContext } from '../Contexts/NgoContext';
import { UserContext } from '../Contexts/UserContext';

import Loading from '../Components/Loading';
import NGOCardsContainer from '../Components/NGOCardsContainer';

export default function Home() {
	const { setPage } = useContext(LayoutContext);
	const { ngo } = useContext(NgoContext);
	const { user, setUser } = useContext(UserContext);

	useEffect(() => {
		setPage('home');
	}, []);

	if (!ngo) return <Loading />;

	return (
		<div className='flex flex-col w-full md:h-fit lg:h-full bg-neutral-300'>
			<NGOCardsContainer ngos={ngo} user={user} setUser={setUser} />
		</div>
	);
}
