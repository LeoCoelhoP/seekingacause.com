import { PiDog } from 'react-icons/pi';
import { GiThreeLeaves } from 'react-icons/gi';
import { LuBed, LuCross } from 'react-icons/lu';
import { BsPeople } from 'react-icons/bs';
import { RxChevronDown } from 'react-icons/rx';
import { useState } from 'react';
import i18next from '../../Configs/i18n';

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
				{i18next.t('animals')}
			</div>
			<div
				onClick={() => setOption('Nature')}
				className={`hover:text-neutral-950 flex flex-col items-center justify-center text-sm ${
					option === 'Nature' ? 'text-neutral-950' : ''
				}`}>
				<GiThreeLeaves size={'1.25rem'} />
				{i18next.t('nature')}
			</div>
			<div
				onClick={() => setOption('Health')}
				className={`hover:text-neutral-950 flex flex-col items-center justify-center text-sm ${
					option === 'Health' ? 'text-neutral-950' : ''
				}`}>
				<LuCross size={'1.25rem'} />
				{i18next.t('health')}
			</div>
			<div
				onClick={() => setOption('Shelter')}
				className={`hover:text-neutral-950 flex flex-col items-center justify-center text-sm ${
					option === 'Shelter' ? 'text-neutral-950' : ''
				}`}>
				<LuBed size={'1.25rem'} />
				{i18next.t('shelter')}
			</div>
			<div
				onClick={() => setOption('People')}
				className={`hover:text-neutral-950 flex flex-col items-center justify-center text-sm ${
					option === 'People' ? 'text-neutral-950' : ''
				}`}>
				<BsPeople size={'1.25rem'} />
				{i18next.t('people')}
			</div>
			<div
				onClick={() => setOption('Others')}
				className={`hover:text-neutral-950 flex flex-col items-center justify-center text-sm ${
					option === 'Others' ? 'text-neutral-950' : ''
				}`}>
				<RxChevronDown size={'1.25rem'} />
				{i18next.t('others')}
			</div>
		</div>
	);
}
