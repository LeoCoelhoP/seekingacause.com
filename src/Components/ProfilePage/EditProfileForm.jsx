import { useState } from 'react';
import PropTypes from 'prop-types';
import { MdOutlineModeEdit, MdOutlinePhone } from 'react-icons/md';

import i18n from '../../Configs/i18n';

import Button from '../Button';
import CountriesSelector from '../CountriesSelector';

export default function EditProfileForm({
	phoneNumber = 'Add to help...',
	country,
	fullName,
}) {
	const [fullNameField, setFullNameField] = useState(fullName);
	const [phoneNumberField, setPhoneNumberField] = useState(phoneNumber);
	const [countryField, setCountryField] = useState(country);

	const isOriginalData =
		fullNameField === fullName &&
		phoneNumberField === phoneNumber &&
		countryField === country;

	function resetForm() {
		setFullNameField(fullName);
		setPhoneNumberField(phoneNumber);
		setCountryField(country);
	}

	function handleCountrySelector(e) {
		setCountryField(() => e.target.value);
	}

	function handleFormSubmission() {
		// Todo form submission
	}
	return (
		<form
			onSubmit={handleFormSubmission}
			className='items-center justify-center w-full px-4 border-t-10 border-neutral-300 '>
			<label className='w-full '>
				<span className='relative z-10 text-xl top-4 left-2'>
					{i18n.t('fullName')}:
				</span>
				<input
					aria-label='Full Name'
					className='drop-shadow-md shadow-md h-[50px]  w-full rounded-md bg-neutral-200 indent-8 focus:border-b-2  border-blue-500 focus:outline-0'
					value={fullNameField}
					onChange={(e) => setFullNameField(() => e.target.value)}
				/>
				<MdOutlineModeEdit className='relative bottom-8 left-2' />
			</label>
			<div className='relative flex items-baseline justify-between w-full gap-4 bottom-4'>
				<label className='z-20 '>
					<span className='relative z-10 text-xl top-4 left-2'>
						{i18n.t('phoneNumber')}:
					</span>
					<input
						type='number'
						aria-label='Phone Number'
						className='drop-shadow-md shadow-md h-[50px] w-fit rounded-md  bg-neutral-200 indent-8 focus:border-b-2  border-blue-500 focus:outline-0'
						value={phoneNumberField}
						placeholder={phoneNumber}
						onChange={(e) => setPhoneNumberField(() => e.target.value)}
					/>
					<MdOutlinePhone className='relative bottom-8 left-2' />
				</label>
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
	phoneNumber: PropTypes.string,
	country: PropTypes.string,
	fullName: PropTypes.string,
};
