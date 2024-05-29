import { RxMagnifyingGlass } from 'react-icons/rx';

export default function SearchForm() {
	return (
		<form className='w-full h-[70px] py-2 pt-4 px-4 flex '>
			<label htmlFor='searchInput' className='flex w-full h-full '>
				<RxMagnifyingGlass className='absolute z-10 text-xl top-8 left-8' />
				<input
					id='searchInput'
					className='w-full h-full text-xl shadow rounded-xl indent-12 drop-shadow'
					placeholder='Type to search... '
				/>
			</label>
		</form>
	);
}
