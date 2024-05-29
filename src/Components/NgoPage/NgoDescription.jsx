import PropTypes from 'prop-types';

export default function NgoDescription({
	description = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate omnis itaque voluptatem nam temporibus eius quis officia, recusandae, nemo veniam sint hic! Voluptates qui officiis unde saepe eligendi, aspernatur error?
`,
}) {
	return <p>{description}</p>;
}

NgoDescription.propTypes = {
	description: PropTypes.string.isRequired,
};
