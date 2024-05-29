import NGOCard from './NGOCard';

export default function NGOCardsContainer() {
	return (
		<main className='static flex flex-col items-center w-full h-full gap-4 p-4 overflow-y-scroll shadow-md bg-neutral-200'>
			<NGOCard />
			<NGOCard />
		</main>
	);
}
