import { useContext } from 'react';
import PropTypes from 'prop-types';

import ReactCountryFlag from 'react-country-flag';

import { LayoutContext } from '../../Contexts/LayoutContext';
import i18next from '../../Configs/i18n';

import Avatar from '../Avatar';

export default function DonationItem({ donate, profilePage }) {
  const { windowWidth } = useContext(LayoutContext);
  const { iat } = donate;
  const { fullName, level, country, avatar } = donate?.user || {
    fullName: 'Anonymous',
    avatar:
      'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541',
    country: null,
    level: null,
  };
  const date = new Date(iat);
  const formattedDate = date.toLocaleString().split(',')[0];
  const avatarSize =
    windowWidth > 1024 ? '100px' : windowWidth > 768 ? '60px' : '40px';
  return (
    <div
      className={`flex items-center justify-between w-full h-full p-2 rounded-md shadow-md ${
        !profilePage ? 'bg-neutral-50' : 'bg-neutral-100'
      }`}
    >
      {!profilePage && (
        <>
          <div
            className={`w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px]`}
          >
            <ReactCountryFlag
              className='relative z-30 w-full h-full rounded-md shadow-2xl emojiFlag right-5 top-4 lg:right-10 lg:top-8 drop-shadow-2xl'
              svg
              countryCode={country}
              style={{
                fontSize: avatarSize === '100px' ? '2.8rem' : '1.4rem',
              }}
            />
          </div>
        </>
      )}
      <div className='w-full ml-2 h-fit'>
        <div className='flex items-start justify-start gap-2 text-xl font-semibold w-fit'>
          {!profilePage && <div className='break-words w-fit'>{fullName}</div>}
        </div>
        {!profilePage && level && (
          <div className='font-medium'>
            {i18next.t('donateLevelLabel')}: {Math.floor(level)}
          </div>
        )}
        <div>{formattedDate}</div>
      </div>

      {donate.type === 'ads' ? (
        <div className='self-start font-semibold text-center'>Ads Donation</div>
      ) : (
        <div className='self-start font-semibold'>
          R${donate.amount.toFixed(2)}
        </div>
      )}
    </div>
  );
}

DonationItem.propTypes = {
  donate: PropTypes.object,
  profilePage: PropTypes.bool,
};
