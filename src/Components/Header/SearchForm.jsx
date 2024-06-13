import { useContext, useEffect, useState } from 'react';
import ReactCountryFlag from 'react-country-flag';
import { RxMagnifyingGlass } from 'react-icons/rx';
import { LayoutContext } from '../../Contexts/LayoutContext';
import { NgoContext } from '../../Contexts/NgoContext';
import i18next from '../../Configs/i18n';

export default function SearchForm({ option, setOption }) {
	const { language, setLanguage } = useContext(LayoutContext);
	const { ngo, setNgo } = useContext(NgoContext);
	const [query, setQuery] = useState('');
	useEffect(() => {
		if (option !== 'all') setOption('All');
	}, [query, setOption]);
	function handleLanguageChange() {
		if (language === 'BR') {
			i18next.changeLanguage('en');
			setLanguage('US');
		} else {
			i18next.changeLanguage('pt');
			setLanguage('BR');
		}
	}

	useEffect(() => {
		if (!ngo && !query) return;

		if (query.length > 2) {
			const searchedNgo = ngo.map((el) => {
				console.log(el.name.includes(query));
				if (el.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())) {
					el.visible = true;
				} else if (
					el.namePT.toLocaleLowerCase().includes(query.toLocaleLowerCase())
				) {
					el.visible = true;
				} else {
					el.visible = false;
				}
				return el;
			});
			setNgo(searchedNgo);
		} else {
			if (query === '')
				setNgo((state) =>
					state.map((ngo) => {
						ngo.visible = true;
						return ngo;
					}),
				);
		}
	}, [query]);

	function handleQuery(e) {
		setQuery(() => e.target.value);
	}
	return (
		<div className='flex items-center'>
			<form className='w-5/6 h-[70px] py-2 pt-4 pl-4 flex '>
				<label htmlFor='searchInput' className='flex w-full h-full '>
					<RxMagnifyingGlass className='absolute z-10 text-xl top-8 left-8' />
					<input
						id='searchInput'
						className='w-full h-full text-xl shadow rounded-xl indent-12 drop-shadow'
						placeholder={i18next.t('typeToSearch')}
						onChange={(e) => handleQuery(e)}
					/>
				</label>
			</form>
			<div
				className='flex flex-col items-center w-1/6 h-full pt-4'
				onClick={handleLanguageChange}>
				<ReactCountryFlag
					svg
					countryCode={language}
					style={{
						fontSize: '1.4rem',
					}}
				/>
				<p className='text-sm'>{language}</p>
			</div>
		</div>
	);
}
