import PropTypes from 'prop-types';

export default function ProgressBar({ progress }) {
	return (
		<div className='w-full h-[20px] bg-neutral-200 rounded-md shadow-md'>
			<div
				className='h-full rounded-md bg-gradient-to-r from-blue-600 to-blue-400'
				style={{ width: `${progress * 100}%` }}></div>
		</div>
	);
}
ProgressBar.propTypes = {
	progress: PropTypes.number.isRequired,
};
