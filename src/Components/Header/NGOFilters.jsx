import { PiDog } from 'react-icons/pi';
import { GiThreeLeaves } from 'react-icons/gi';
import { LuBed, LuCross } from 'react-icons/lu';
import { RxMagnifyingGlass } from 'react-icons/rx';
import { RxChevronDown } from 'react-icons/rx';
import { useEffect, useState } from 'react';
import i18next from '../../Configs/i18n';
import { NgoContext } from '../../Contexts/NgoContext';

export default function NGOFilters({ ngo, setNgo, option, setOption }) {
	useEffect(() => {
		console.log('mudou');
		changeOption();
	}, [option]);

	function changeOption() {
		let newNgoArray = [];
		console.log(option);
		if (ngo) {
			newNgoArray = ngo.map((el) => {
				if (option === 'All') {
					el.visible = true;
					return el;
				}
				if (el.type !== option) el.visible = false;
				else el.visible = true;

				return el;
			});
		}

		setNgo(() => newNgoArray);
	}

	return (
		<div className='shadow-md text-neutral-500  drop-shadow-md z-10 flex items-center  p-2 h-[60px] bg-neutral-50  text-3xl gap-4 justify-evenly'>
			<div
				onClick={() => setOption('All')}
				className={`hover:text-neutral-950 flex flex-col items-center justify-center text-sm ${
					option === 'All' ? 'text-neutral-950' : ''
				}`}>
				<RxMagnifyingGlass size={'1.25rem'} />
				{i18next.t('default')}
			</div>
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
