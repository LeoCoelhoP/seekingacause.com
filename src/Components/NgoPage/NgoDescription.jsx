import PropTypes from 'prop-types';

export default function NgoDescription({ description }) {
	return <p className='w-full h-full'>{description}</p>;
}

NgoDescription.propTypes = {
	description: PropTypes.string.isRequired,
};
