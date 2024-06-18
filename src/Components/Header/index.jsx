import SearchForm from './SearchForm';
import NGOFilters from './NGOFilters';
import { useContext, useState } from 'react';
import { NgoContext } from '../../Contexts/NgoContext';

export default function Header() {
	const { ngo, setNgo } = useContext(NgoContext);
	const [option, setOption] = useState('All');

	return (
		<header
			className={`bg-neutral-100 md:flex md:flex-col w-full md:items-center md:w-full justify-center  lg:mx-auto`}>
			<SearchForm option={option} setOption={setOption} />
			<NGOFilters
				ngo={ngo}
				setNgo={setNgo}
				option={option}
				setOption={setOption}
			/>
		</header>
	);
}
