import ReactCountryFlag from 'react-country-flag';
import PropTypes from 'prop-types';

import Avatar from '../Avatar';
import { DONATE } from '../../Constants/NGOPage';

const user = {
	id: 32323,
	avatar:
		'https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133351928-stock-illustration-default-placeholder-man-and-woman.jpg',
	name: 'Leonardo P',
	level: 9,
	countryCode: 'BR',
	countryName: 'Brazil',
};
const donations = [
	{
		id: 1234324,
		user: user,
		date: '23/10/2022',
		donated: { money: 100 },
	},
];

function DonationItem({ donate }) {
	const { date, user } = donate;
	const { name, level, countryCode, avatar } = user;
	return (
		<div className='flex items-center justify-between w-full h-full p-2 rounded-md shadow-md bg-neutral-50'>
			<Avatar height='h-[40px]' width='w-[40px]' src={avatar} />
			<ReactCountryFlag
				className='relative z-30 w-full h-full rounded-md shadow-2xl emojiFlag right-5 top-4 drop-shadow-2xl'
				svg
				countryCode={countryCode}
				style={{
					fontSize: '1.4rem',
				}}
			/>
			<div className='w-full ml-2 h-fit'>
				<div className='flex items-start justify-start gap-2 text-xl font-semibold w-fit'>
					<div className='break-words w-fit'>{name}</div>
				</div>
				<div className='font-medium'>
					{DONATE.LEVEL_LABEL} {level}
				</div>

				<div>{date}</div>
			</div>

			<div className='self-start font-semibold'>
				$ {donate?.clicks || donate?.money}
			</div>
		</div>
	);
}

DonationItem.propTypes = {
	donate: PropTypes.object,
};

export default function Donations() {
	return (
		<div className='flex flex-col w-full h-full gap-4 '>
			{donations.map((donate) => (
				<DonationItem donate={donate} key={donate.id} />
			))}
		</div>
	);
}
