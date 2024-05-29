import { PiDog } from 'react-icons/pi';
import { GiThreeLeaves } from 'react-icons/gi';
import { IoFastFoodOutline } from 'react-icons/io5';
import { LuBed } from 'react-icons/lu';
import { BsPeople } from 'react-icons/bs';
import { RxChevronDown } from 'react-icons/rx';
import { useState } from 'react';

export default function NGOFilters() {
	const [option, setOption] = useState('Animals');
	return (
		<div className='shadow-md text-neutral-500  drop-shadow-md z-10 flex items-center justify-center p-2 h-[60px] bg-neutral-50  text-3xl gap-4 '>
			<div
				onClick={() => setOption('Animals')}
				className={`hover:text-neutral-950 flex flex-col items-center justify-center text-sm ${
					option === 'Animals' ? 'text-neutral-950' : ''
				}`}>
				<PiDog size={'1.25rem'} />
				Animals
			</div>
			<div
				onClick={() => setOption('Nature')}
				className={`hover:text-neutral-950 flex flex-col items-center justify-center text-sm ${
					option === 'Nature' ? 'text-neutral-950' : ''
				}`}>
				<GiThreeLeaves size={'1.25rem'} />
				Nature
			</div>
			<div
				onClick={() => setOption('Food')}
				className={`hover:text-neutral-950 flex flex-col items-center justify-center text-sm ${
					option === 'Food' ? 'text-neutral-950' : ''
				}`}>
				<IoFastFoodOutline size={'1.25rem'} />
				Food
			</div>
			<div
				onClick={() => setOption('Shelter')}
				className={`hover:text-neutral-950 flex flex-col items-center justify-center text-sm ${
					option === 'Shelter' ? 'text-neutral-950' : ''
				}`}>
				<LuBed size={'1.25rem'} />
				Shelter
			</div>
			<div
				onClick={() => setOption('People')}
				className={`hover:text-neutral-950 flex flex-col items-center justify-center text-sm ${
					option === 'People' ? 'text-neutral-950' : ''
				}`}>
				<BsPeople size={'1.25rem'} />
				People
			</div>
			<div
				onClick={() => setOption('Others')}
				className={`hover:text-neutral-950 flex flex-col items-center justify-center text-sm ${
					option === 'Others' ? 'text-neutral-950' : ''
				}`}>
				<RxChevronDown size={'1.25rem'} />
				Others
			</div>
		</div>
	);
}
