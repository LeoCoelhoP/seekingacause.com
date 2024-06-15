import PropTypes from 'prop-types';

export default function Avatar({ width, height, src, name }) {
	return (
		<div
			className={` ${width} ${height}
    flex justify-center items-center rounded-full hover:opacity-60 hover:z-0 z-30 hover:cursor-auto
    `}>
			<img
				src={
					src ||
					'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541'
				}
				alt={`${name} Avatar profile`}
				className='rounded-full shadow-md drop-shadow-md'
			/>
		</div>
	);
}

Avatar.propTypes = {
	height: PropTypes.string.isRequired,
	name: PropTypes.string,
	width: PropTypes.string.isRequired,
	src: PropTypes.string,
};
