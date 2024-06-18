import PropTypes from 'prop-types';

import DonationItem from './DonationItem';

export default function Donations({ donations, profilePage = false }) {
	if (!donations) return;

	return (
		<div className='flex flex-col w-full h-full gap-4 '>
			{donations.map((donate, i) => (
				<DonationItem profilePage={profilePage} donate={donate} key={i} />
			))}
		</div>
	);
}

Donations.propTypes = {
	donations: PropTypes.array,
	profilePage: PropTypes.bool,
};
