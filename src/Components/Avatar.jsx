import PropTypes from 'prop-types';

export default function Avatar({ width, height, src }) {
	return (
		<div
			className={` ${width} ${height}
    flex justify-center items-center bg-neutral-50 rounded-full
    `}>
			<img
				src={src}
				// TODO display "[Name] profile picture."
				alt='Avatar profile'
				className='rounded-full shadow-md drop-shadow-md'
			/>
		</div>
	);
}

Avatar.propTypes = {
	width: PropTypes.string.isRequired,
	height: PropTypes.string.isRequired,
};
