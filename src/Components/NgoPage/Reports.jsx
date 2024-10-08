import i18next from '../../Configs/i18n';

import { LuAlertCircle } from 'react-icons/lu';

export default function Reports() {
	// Todo
	const reports = null;
	return (
		<div className='flex flex-col w-full h-full gap-4 px-4 '>
			{reports &&
				reports.map((_, i) => (
					<div
						key={i}
						className='flex items-center justify-between w-full h-full p-2 rounded-md shadow-md drop-shadow-md bg-neutral-50'>
						<div className='flex flex-col items-center self-center ml-auto mr-auto font-semibold w-fit'>
							<div className='text-xl font-semibold'>{`${10 - i}/2023`}</div>
							<div className='text-blue-500'>
								{i18next.t('reportDownloadLink')}
							</div>
						</div>
						<div className='bg-neutral-200 h-[50px] w-[1px]'></div>
						<div className='flex flex-col items-center self-center ml-auto mr-auto font-semibold w-fit'>
							<div>{i18next.t('reportTotalDonated')}:</div>
							<div>${(Math.random() * 100).toFixed(2)}</div>
						</div>
					</div>
				))}

			{!reports && (
				<div className='flex flex-col items-center w-full h-full text-center bg-neutral-50 text-neutral-500'>
					<LuAlertCircle size={'4rem'} />
				{	i18next.t('noReport')}
				</div>
			)}
		</div>
	);
}
