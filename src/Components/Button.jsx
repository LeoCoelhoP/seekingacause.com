import PropTypes from 'prop-types';

export default function Button({
	tailwind = '',
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
	href,
}) {
	return href ? (
		<a href={href}>
			<button
				type={type}
				onClick={onClick}
				className={`${tailwind} ${bgColor} ${height} ${width} ${textColor} ${padding} flex gap-2 items-center justify-center rounded-md`}>
				{icon && (
					<div onClick={onClick} className='w-fit'>
						{icon}
					</div>
				)}
				<div onClick={onClick} className={`${textSize} break-words`}>
					{children}
				</div>
			</button>
		</a>
	) : (
		<button
			type={type}
			onClick={onClick}
			className={`${tailwind} ${bgColor} ${height} ${width} ${textColor} ${padding} flex gap-2 items-center justify-center rounded-md`}>
			{icon && (
				<div onClick={onClick} className='w-fit'>
					{icon}
				</div>
			)}
			<div onClick={onClick} className={`${textSize} break-words`}>
				{children}
			</div>
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
	href: PropTypes.string,
};
