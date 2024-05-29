import { useState } from 'react';

import { LuClipboardList, LuDollarSign, LuMapPin } from 'react-icons/lu';
import Donations from './Donations';
import Map from './Map';
import Reports from './Reports';
import { MENU } from '../../Constants/NGOPage';
import Divider from '../Divider';

const MENU_OPTIONS = [
	{ id: 0, icon: <LuMapPin className='text-xl' />, label: MENU.LOCATION.label },
	{
		id: 1,
		icon: <LuDollarSign className='text-xl' />,
		label: MENU.DONATE.label,
	},
	{
		id: 2,
		icon: <LuClipboardList className='text-xl' />,
		label: MENU.REPORT.label,
	},
];

export default function MenuOptions() {
	const [menuOption, setMenuOption] = useState(0);

	return (
		<div className='items-center w-full h-full '>
			<div className='flex items-start justify-center gap-6'>
				{MENU_OPTIONS.map(({ id, icon, label }) => (
					<div
						key={id}
						className={`flex items-center flex-col text-center ${
							menuOption === id ? 'text-neutral-950' : 'text-neutral-400'
						} hover:text-neutral-950 cursor-pointer`}
						onClick={() => setMenuOption(id)}>
						{icon}
						{label}
					</div>
				))}
			</div>
			<Divider />
			<div className='content'>
				{menuOption === 0 && (
					<div className='h-[200px]'>
						<Map />
					</div>
				)}
				{menuOption === 1 && <Donations />}
				{menuOption === 2 && <Reports />}
			</div>
		</div>
	);
}
