import { useContext } from 'react';
import ReactCountryFlag from 'react-country-flag';
import { RxMagnifyingGlass } from 'react-icons/rx';
import { LayoutContext } from '../../Contexts/LayoutContext';
import i18next from '../../Configs/i18n';

export default function SearchForm() {
	const { language, setLanguage } = useContext(LayoutContext);
	function handleLanguageChange() {
		if (language === 'BR') {
			i18next.changeLanguage('en');
			setLanguage('US');
		} else {
			i18next.changeLanguage('pt');
			setLanguage('BR');
		}
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
