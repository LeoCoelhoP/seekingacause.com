import SearchForm from './SearchForm';
import NGOFilters from './NGOFilters';

export default function Header() {
	return (
		<header className={`bg-neutral-50`}>
			<SearchForm />
			<NGOFilters />
		</header>
	);
}
