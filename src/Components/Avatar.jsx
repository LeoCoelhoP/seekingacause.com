import PropTypes from 'prop-types';

export default function Avatar({ src, name }) {
	return (
		<div
			className={`h-full w-full
    flex justify-center  items-center lg:rounded-md rounded-xl  z-30 hover:cursor-auto
    `}>
			<img
				src={
					src ||
					'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541'
				}
				alt={`${name} Avatar profile`}
				className={`w-full h-full rounded-xl `}
			/>
		</div>
	);
}

Avatar.propTypes = {
	name: PropTypes.string,
	src: PropTypes.string,
};
