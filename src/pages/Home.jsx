import { useContext } from 'react';

import { NgoContext } from '../Contexts/NgoContext';
import { UserContext } from '../Contexts/UserContext';

import NGOCardsContainer from '../Components/NGOCardsContainer';
import Loading from '../Components/Loading';

export default function Home() {
	const { ngo } = useContext(NgoContext);
	const { user, setUser } = useContext(UserContext);

	if (!ngo) return <Loading />;

	return (
		<div className='flex flex-col w-full bg-neutral-50'>
			<NGOCardsContainer ngos={ngo} user={user} setUser={setUser} />
		</div>
	);
}
