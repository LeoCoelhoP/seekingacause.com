import PropTypes from 'prop-types';

export default function NgoDescription({ description }) {
	return <p>{description}</p>;
}

NgoDescription.propTypes = {
	description: PropTypes.string.isRequired,
};
