import PropTypes from 'prop-types';

export default function ProgressBar({ progress, profilePage = false }) {
	const percentage = progress * 100 > 100 ? 100 : progress * 100;

	return (
		<div
			className={`w-full h-[20px] ${
				profilePage ? 'bg-neutral-300' : 'bg-neutral-200'
			} rounded-md shadow-md`}>
			<div
				className='h-full rounded-md bg-gradient-to-r from-blue-600 to-blue-400'
				style={{ width: `${percentage}%` }}></div>
		</div>
	);
}
ProgressBar.propTypes = {
	progress: PropTypes.number.isRequired,
	profilePage: PropTypes.bool,
};
