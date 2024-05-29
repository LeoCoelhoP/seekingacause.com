import ReactCountryFlag from 'react-country-flag';
import PropTypes from 'prop-types';
import { COUNTRY_OPTIONS } from '../Constants/Globals';

export default function CountriesSelector({ country, setCountry }) {
	return (
		<label className='w-full' htmlFor='country'>
			<p className='relative top-[13px] left-2 bg-neutral-200 text-xl w-fit z-10 '>
				Country:
			</p>
			<select
				aria-label='County'
				id='country'
				name='country'
				onChange={(e) => setCountry(e.target.value)}
				defaultValue={country}
				className='focus:outline-blue-500 drop-shadow-md shadow-md h-[50px] w-full rounded-md  border-neutral-300 bg-neutral-200 indent-8'>
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
	country: PropTypes.string.isRequired,
	setCountry: PropTypes.func.isRequired,
};
