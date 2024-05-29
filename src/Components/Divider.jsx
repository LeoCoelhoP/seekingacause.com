import PropTypes from 'prop-types';

export default function Divider({ children }) {
	if (children)
		return (
			<div className='flex items-center justify-center w-full gap-4'>
				<div className='w-full h-0.5 rounded-md bg-neutral-300 my-4 '></div>
				{children}
				<div className='w-full h-0.5 rounded-md bg-neutral-300 my-4'></div>
			</div>
		);
	return (
		<div className='w-full h-0.5 rounded-md bg-neutral-200 my-4'>
			{children}
		</div>
	);
}

Divider.propTypes = {
	children: PropTypes.node,
};
