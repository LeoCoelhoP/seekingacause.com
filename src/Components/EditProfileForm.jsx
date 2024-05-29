import { useState } from 'react';
import { MdOutlineModeEdit, MdOutlinePhone } from 'react-icons/md';
import { faker } from '@faker-js/faker';

import Button from './Button';
import CountriesSelector from './CountriesSelector';

export default function EditProfileForm() {
	const [name, setName] = useState(faker.person.fullName());
	const [phoneNumber, setPhoneNumber] = useState('4599900000');
	const [country, setCountry] = useState('BR');
	const [showButtons, setShowButtons] = useState(false);

	function onFormChange() {
		if (!showButtons) setShowButtons(true);
	}
	function resetForm() {
		setName(faker.person.fullName());
		setPhoneNumber('');
		setCountry('BR');
		setShowButtons(false);
	}

	function handleFormSubmission() {
		// Todo form submission
	}
	return (
		<form
			onSubmit={handleFormSubmission}
			className='items-center justify-center w-full px-4 border-t-2 border-neutral-300 '
			onChange={onFormChange}>
			<label className='w-full '>
				<span className='relative z-10 text-xl top-4 left-2'>Full Name:</span>
				<input
					aria-label='Full Name'
					className='drop-shadow-md shadow-md h-[50px]  w-full rounded-md bg-neutral-200 indent-8 focus:outline-blue-500'
					value={name}
					onChange={(e) => setName(() => e.target.value)}
				/>
				<MdOutlineModeEdit className='relative bottom-8 left-2' />
			</label>
			<div className='relative flex items-baseline justify-between w-full gap-4 bottom-4'>
				<label className='w-fit'>
					<span className='relative z-10 text-xl top-4 left-2'>
						Phone Number:
					</span>
					<input
						type='number'
						aria-label='Phone Number'
						className='drop-shadow-md shadow-md h-[50px] w-fit rounded-md  border-neutral-300 bg-neutral-200 indent-8 focus:outline-blue-500'
						value={phoneNumber}
						placeholder={phoneNumber}
						onChange={(e) => setPhoneNumber(() => e.target.value)}
					/>
					<MdOutlinePhone className='relative bottom-8 left-2' />
				</label>
				<CountriesSelector country={country} setCountry={setCountry} />
			</div>
			{showButtons && (
				<div className='flex gap-2'>
					<Button
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
