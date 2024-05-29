export default function Loading() {
	return (
		<div className='flex items-center flex-col justify-center w-svw h-svh bg-neutral-50'>
			<div className='border-dashed w-[50px] h-[50px] animate-spin border-t-4 border-neutral-950 rounded-full'></div>
			<p className='text-xl font-medium'>
				Loading<span className='animate-pulse'>...</span>
			</p>
		</div>
	);
}
