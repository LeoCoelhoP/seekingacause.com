import ReactCountryFlag from 'react-country-flag';
import PropTypes from 'prop-types';

import i18n from '../Configs/i18n';

import { COUNTRY_OPTIONS } from '../Constants/Globals';

export default function CountriesSelector({ country = 'BR', onChange }) {
	return (
		<label className='w-full h-fit' htmlFor='country'>
			<span className='relative top-[13px] left-2 bg-neutral-200 text-xl w-fit z-10 '>
				{i18n.t('country')}:
			</span>
			<select
				aria-label='country'
				id='country'
				name='country'
				onChange={onChange}
				value={country}
				className='focus:outline-blue-500 drop-shadow-md shadow-md h-[50px] w-full rounded-md  border-neutral-300 bg-neutral-200 indent-8 focus:border-b-2  focus:border-blue-500 focus:outline-0'>
				{COUNTRY_OPTIONS.map((countryOption) => (
					<option key={countryOption.value} value={countryOption.value}>
						{countryOption.label}
					</option>
				))}
			</select>
			{country && (
				<ReactCountryFlag
					countryCode={country}
					svg
					style={{
						fontSize: '1.3em',
					}}
					className='mr-auto relative bottom-[38px] left-2'
				/>
			)}
		</label>
	);
}

CountriesSelector.propTypes = {
	country: PropTypes.string,
	onChange: PropTypes.func.isRequired,
};
