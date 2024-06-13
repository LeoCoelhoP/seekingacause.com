import PropTypes from 'prop-types';

export default function Avatar({ width, height, src }) {
	return (
		<div
			className={` ${width} ${height}
    flex justify-center items-center rounded-full hover:opacity-60 hover:z-0 z-30 hover:cursor-auto
    `}>
			<img
				src={src}
				alt={`${name} Avatar profile`}
				className='rounded-full shadow-md drop-shadow-md'
			/>
		</div>
	);
}

Avatar.propTypes = {
	width: PropTypes.string.isRequired,
	height: PropTypes.string.isRequired,
};
