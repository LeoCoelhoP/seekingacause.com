import PropTypes from 'prop-types';

export default function Button({
	tailwind,
	icon,
	children,
	type = 'button',
	height = 'h-[50px]',
	width = 'w-1/2',
	textColor = 'text-neutral-50',
	bgColor = 'bg-blue-600',
	padding = 'p-2',
	textSize = 'text-xl',
	onClick,
}) {
	return (
		<button
			type={type}
			onClick={onClick}
			className={`${tailwind} ${bgColor} ${height} ${width} ${textColor} ${padding} modal flex items-center justify-center rounded-md`}>
			<div className='w-[50px]'>{icon}</div>
			<div className={`${textSize} modal lg:flex-none`}>{children}</div>
		</button>
	);
}

Button.propTypes = {
	tailwind: PropTypes.string,
	icon: PropTypes.element,
	children: PropTypes.node,
	height: PropTypes.string,
	width: PropTypes.string,
	textColor: PropTypes.string,
	bgColor: PropTypes.string,
	padding: PropTypes.string,
	textSize: PropTypes.string,
	onClick: PropTypes.func,
	type: PropTypes.string,
};
