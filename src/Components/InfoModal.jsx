import { useContext } from 'react';
import Button from './Button';
import { LayoutContext } from '../Contexts/LayoutContext';
import {
	ABOUT_TEXT,
	ABOUT_TITLE,
	CLOSE_BUTTON_TEXT,
	CONNECTING_DONORS_TEXT,
	CONNECTING_DONORS_TITLE,
	CONTACT_US_TEXT,
	CONTACT_US_TITLE,
	HOW_IT_WORKS_TEXT,
	HOW_IT_WORKS_TITLE,
	MAXIMIZING_IMPACT_TEXT,
	MAXIMIZING_IMPACT_TITLE,
	ROLE_TITLE,
	TRANSPARENCY_TRUST_TEXT,
	TRANSPARENCY_TRUST_TITLE,
} from '../Constants/InfoModal';

export default function InfoModal() {
	const { setInfoModalOpen } = useContext(LayoutContext);

	return (
		<div className='absolute z-20 flex flex-col items-center justify-center w-5/6 gap-2 p-4 mx-auto my-auto overflow-y-scroll font-semibold rounded-md shadow-2xl modal h-5/6 blur-none text-neutral-950 drop-shadow-2xl bg-neutral-50'>
			<div className='overflow-y-scroll font-normal'>
				<h1 className='font-bold'>{ABOUT_TITLE}</h1>
				<br />
				{ABOUT_TEXT}
				<br />
				<br /> <h2 className='font-bold'>{ROLE_TITLE}</h2>
				<br /> <h3 className='font-bold'>{CONNECTING_DONORS_TITLE}</h3>
				{CONNECTING_DONORS_TEXT}
				<br />
				<h3 className='font-bold'>{TRANSPARENCY_TRUST_TITLE}</h3>
				{TRANSPARENCY_TRUST_TEXT}
				<br />
				<h3 className='font-bold'>{MAXIMIZING_IMPACT_TITLE}</h3>
				{MAXIMIZING_IMPACT_TEXT}
				<br />
				<h3 className='font-bold'>{HOW_IT_WORKS_TITLE}:</h3>
				{HOW_IT_WORKS_TEXT}
				<br />
				<h3 className='font-bold'>{CONTACT_US_TITLE}</h3>
				{CONTACT_US_TEXT}
			</div>

			<Button
				onClick={() => setInfoModalOpen(false)}
				tailwind={'border-2 text-start bg-neutral-50'}
				textColor='text-neutral-600'
				textSize='text-sm'>
				{CLOSE_BUTTON_TEXT}
			</Button>
		</div>
	);
}
