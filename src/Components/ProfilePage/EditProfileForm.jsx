import { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { MdOutlineModeEdit, MdOutlinePhone } from 'react-icons/md';

import { UserContext } from '../../Contexts/UserContext';
import i18next from '../../Configs/i18n';

import Button from '../Button';
import CountriesSelector from '../CountriesSelector';
import { updateMe } from '../../services/user';
import toast from 'react-hot-toast';

export default function EditProfileForm({ country, fullName }) {
	const [fullNameField, setFullNameField] = useState(fullName);
	const [countryField, setCountryField] = useState(country);
	const { setUser } = useContext(UserContext);

	const isOriginalData = fullNameField === fullName && countryField === country;

	function resetForm() {
		setFullNameField(fullName);
		setCountryField(country);
	}

	function handleCountrySelector(e) {
		setCountryField(() => e.target.value);
	}

	function handleFormSubmission(e) {
		e.preventDefault();

		if (
			(fullNameField !== fullName && fullNameField.length < 20) ||
			country !== countryField
		) {
			updateMe({ setUser, fullName: fullNameField, country: countryField });
		} else {
			toast.error(i18next.t('maxNameLength'));
		}
	}
	return (
		<form
			onSubmit={handleFormSubmission}
			className='items-center justify-center w-full px-4 border-t-10 border-neutral-300 lg:flex lg:gap-4'>
			<label className='w-full '>
				<span className='relative z-10 text-xl top-4 left-2'>
					{i18next.t('fullName')}:
				</span>
				<input
					aria-label='Full Name'
					className='drop-shadow-md shadow-md h-[50px]  w-full rounded-md bg-neutral-200 indent-8 focus:border-b-2  border-blue-500 focus:outline-0'
					value={fullNameField}
					onChange={(e) => setFullNameField(() => e.target.value)}
				/>
				<MdOutlineModeEdit className='relative bottom-8 left-2' />
			</label>
			<div className='relative flex items-baseline justify-between w-full gap-4 bottom-4 lg:bottom-0'>
				{country && (
					<CountriesSelector
						country={countryField}
						onChange={handleCountrySelector}
					/>
				)}
			</div>
			{!isOriginalData && (
				<div className='flex gap-2'>
					<Button
						type='reset'
						onClick={resetForm}
						tailwind={
							'relative  bottom-4 bg-neutral-200  border-neutral-300  shadow-md drop-shadow-md'
						}
						textColor='text-neutral-600'>
						Reset
					</Button>
					<Button
						onClick={handleFormSubmission}
						tailwind={
							'relative  bottom-4  bg-blue-600 shadow-md drop-shadow-md'
						}
						textColor='text-neutral-50'>
						Save
					</Button>
				</div>
			)}
		</form>
	);
}

EditProfileForm.propTypes = {
	phoneNumber: PropTypes.number,
	country: PropTypes.string,
	fullName: PropTypes.string,
};
