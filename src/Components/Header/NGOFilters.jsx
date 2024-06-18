import { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';

import { PiDog } from 'react-icons/pi';
import { GiThreeLeaves } from 'react-icons/gi';
import { LuCross } from 'react-icons/lu';
import { RxChevronDown, RxMagnifyingGlass } from 'react-icons/rx';

import i18next from '../../Configs/i18n';

export default function NGOFilters({ ngo, setNgo, option, setOption }) {
	const changeOption = useCallback(() => {
		if (!ngo) return;

		const newNgoArray = ngo?.map((el) => {
			if (option === 'All') {
				return { ...el, visible: true };
			}
			const isVisible = el.type === option;
			return { ...el, visible: isVisible };
		});

		setNgo(newNgoArray);
	}, [option]);

	useEffect(() => {
		changeOption();
	}, [option, changeOption]);

	return (
		<div className='shadow-md text-neutral-500  drop-shadow-md z-10 flex items-center md:w-full  p-2 h-[60px] bg-neutral-100  text-3xl gap-4 justify-evenly lg:gap-24 lg:justify-center'>
			<div
				onClick={() => setOption('All')}
				className={`hover:text-neutral-950 flex flex-col  items-center justify-center text-sm ${
					option === 'All' ? 'text-neutral-950 font-semibold' : ''
				}`}>
				<RxMagnifyingGlass size={'1.25rem'} />
				{i18next.t('default')}
			</div>
			<div
				onClick={() => setOption('Animals')}
				className={`hover:text-neutral-950 flex flex-col items-center justify-center text-sm ${
					option === 'Animals' ? 'text-neutral-950 font-semibold' : ''
				}`}>
				<PiDog size={'1.25rem'} />
				{i18next.t('animals')}
			</div>
			<div
				onClick={() => setOption('Nature')}
				className={`hover:text-neutral-950 flex flex-col items-center justify-center text-sm ${
					option === 'Nature' ? 'text-neutral-950 font-semibold' : ''
				}`}>
				<GiThreeLeaves size={'1.25rem'} />
				{i18next.t('nature')}
			</div>
			<div
				onClick={() => setOption('Health')}
				className={`hover:text-neutral-950  flex flex-col items-center justify-center text-sm ${
					option === 'Health' ? 'text-neutral-950 font-semibold' : ''
				}`}>
				<LuCross size={'1.25rem'} />
				{i18next.t('health')}
			</div>

			<div
				onClick={() => setOption('Others')}
				className={`hover:text-neutral-950 flex flex-col items-center justify-center text-sm ${
					option === 'Others' ? 'text-neutral-950 font-semibold' : ''
				}`}>
				<RxChevronDown size={'1.25rem'} />
				{i18next.t('others')}
			</div>
		</div>
	);
}

NGOFilters.propTypes = {
	ngo: PropTypes.array,
	setNgo: PropTypes.func,
	option: PropTypes.string,
	setOption: PropTypes.func,
};
