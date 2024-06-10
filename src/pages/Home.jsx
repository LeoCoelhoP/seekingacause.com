import { useContext, useEffect, useState } from 'react';
import NGOCardsContainer from '../Components/NGOCardsContainer';
import { NgoContext } from '../Contexts/NgoContext';
import { UserContext } from '../Contexts/UserContext';

export default function Home() {
	const { ngo } = useContext(NgoContext);
	const { user, setUser } = useContext(UserContext);
	if (!ngo) return;
	return (
		<div className='flex flex-col w-full bg-neutral-50'>
			<NGOCardsContainer ngos={ngo} user={user} setUser={setUser} />
		</div>
	);
}
