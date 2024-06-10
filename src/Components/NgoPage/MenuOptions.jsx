import { useContext, useMemo, useState } from 'react';

import { LuClipboardList, LuDollarSign, LuMapPin } from 'react-icons/lu';
import Donations from './Donations';
import Map from './Map';
import Reports from './Reports';
import Divider from '../Divider';
import i18next from '../../Configs/i18n';
import { LayoutContext } from '../../Contexts/LayoutContext';

function getOptions() {
	return [
		{
			id: 0,
			icon: <LuMapPin className='text-xl' />,
			label: i18next.t('location'),
		},
		{
			id: 1,
			icon: <LuDollarSign className='text-xl' />,
			label: i18next.t('donations'),
		},
		{
			id: 2,
			icon: <LuClipboardList className='text-xl' />,
			label: i18next.t('reports'),
		},
	];
}

export default function MenuOptions({ ngoDetails }) {
	const [menuOption, setMenuOption] = useState(0);
	const { location, donations, report } = ngoDetails;
	const { language } = useContext(LayoutContext);

	const MENU_OPTIONS = useMemo(() => getOptions(), []);
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
						<Map location={location} />
					</div>
				)}
				{menuOption === 1 && <Donations donations={donations} />}
				{menuOption === 2 && <Reports />}
			</div>
		</div>
	);
}
