import ReactCountryFlag from 'react-country-flag';
import PropTypes from 'prop-types';

import Avatar from '../Avatar';
import i18next from '../../Configs/i18n';

function DonationItem({ donate }) {
	console.log(donate);
	const { iat, type } = donate;
	const { fullName, level, country, avatar } = donate.user;
	const date = new Date(iat);
	const formattedDate = date.toLocaleString().split(',')[0];

	return (
		<div className='flex items-center justify-between w-full h-full p-2 rounded-md shadow-md bg-neutral-50'>
			<Avatar height='h-[40px]' width='w-[40px]' src={avatar} />
			<ReactCountryFlag
				className='relative z-30 w-full h-full rounded-md shadow-2xl emojiFlag right-5 top-4 drop-shadow-2xl'
				svg
				countryCode={country}
				style={{
					fontSize: '1.4rem',
				}}
			/>
			<div className='w-full ml-2 h-fit'>
				<div className='flex items-start justify-start gap-2 text-xl font-semibold w-fit'>
					<div className='break-words w-fit'>{fullName}</div>
				</div>
				<div className='font-medium'>
					{i18next.t('donateLevelLabel')}: {Math.floor(level)}
				</div>

				<div>{formattedDate}</div>
			</div>

			{donate.type === 'ads' ? (
				<div className='self-start font-semibold text-center'>Ads Donation</div>
			) : (
				<div className='self-start font-semibold'>
					$ {donate?.clicks || donate?.money}
				</div>
			)}
		</div>
	);
}

DonationItem.propTypes = {
	donate: PropTypes.object,
};

export default function Donations({ donations }) {
	return (
		<div className='flex flex-col w-full h-full gap-4 '>
			{donations.map((donate, i) => (
				<DonationItem donate={donate} key={i} />
			))}
		</div>
	);
}
