import { REPORT } from '../../Constants/NGOPage';

export default function Reports() {
	const reports = [1, 2, 3, 4, 5];
	return (
		<div className='flex flex-col w-full h-full gap-4 p-4 overflow-y-scroll'>
			{reports.map((_, i) => (
				<div
					key={i}
					className='flex items-center justify-between w-full h-full p-2 rounded-md shadow-md drop-shadow-md bg-neutral-50'>
					<div className='flex flex-col items-center self-center ml-auto mr-auto font-semibold w-fit'>
						<div className='text-xl font-semibold'>{`${10 - i}/2023`}</div>
						<div className='text-blue-500'>{REPORT.DOWNLOAD_LINK}</div>
					</div>
					<div className='bg-neutral-200 h-[50px] w-[1px]'></div>
					<div className='flex flex-col items-center self-center ml-auto mr-auto font-semibold w-fit'>
						<div>{REPORT.TOTAL_TITLE}</div>
						<div>${(Math.random() * 100).toFixed(2)}</div>
					</div>
				</div>
			))}
		</div>
	);
}
