import { useContext, useState } from 'react';
import PropTypes from 'prop-types';

import toast from 'react-hot-toast';
import { FaXTwitter } from 'react-icons/fa6';

import { login, recoverPassword } from '../../services/auth';
import { LayoutContext } from '../../Contexts/LayoutContext';
import { UserContext } from '../../Contexts/UserContext';
import i18next from '../../Configs/i18n';
import { emailValidator } from '../../utils/validators';

import Button from '../../Components/Button';
import Divider from '../../Components/Divider';

const TWITTER_CLIENT_ID = import.meta.env.VITE_TWITTER_CLIENT_ID;
const TWITTER_CODE_CHALLANGE = import.meta.env.VITE_TWITTER_CODE_CHALLANGE;

function getTwitterOauthUrl() {
	const rootUrl = 'https://twitter.com/i/oauth2/authorize';
	const options = {
		redirect_uri: `http://www.localhost/auth/twitter-login`,
		client_id: TWITTER_CLIENT_ID,
		state: 'state',
		response_type: 'code',
		code_challenge: TWITTER_CODE_CHALLANGE,
		code_challenge_method: 'plain',
		scope: ['users.read', 'tweet.read', 'follows.read'].join(' '),
	};
	const qs = new URLSearchParams(options).toString();
	return `${rootUrl}?${qs}`;
}

export default function LoginForm() {
	const { language } = useContext(LayoutContext);
	const { setUser } = useContext(UserContext);
	const [loginInfo, setLoginInfo] = useState({
		email: '',
		password: '',
	});

	function handlePasswordRecovery() {
		if (!loginInfo.email)
			return toast.error(i18next.t('forgotPasswordNoEmailValidator'));

		if (!emailValidator(loginInfo.email))
			return toast.error(i18next.t('forgotPasswordEmailValidator'));
		const currentLanguage = language === 'BR' ? undefined : 'en';
		recoverPassword(loginInfo.email, currentLanguage);
	}
	function handleSubmit(e) {
		e.preventDefault();
		login(loginInfo, setUser);
	}

	return (
		<form className='relative flex flex-col items-center justify-center w-5/6 mt-4 h-1/2 bottom-10'>
			<label className='w-full mt-8'>
				<span className='relative top-[13px] left-2 bg-neutral-200 text-xl w-fit z-20 '>
					{i18next.t('emailAddress')}:
				</span>
				<input
					aria-label='Email Address'
					className='h-[50px] drop-shadow-md shadow-md w-full rounded-md border-neutral-300 bg-neutral-200 indent-4 focus:border-b-2  focus:border-blue-500 focus:outline-0'
					value={loginInfo.email}
					onChange={(e) =>
						setLoginInfo((state) => ({ ...state, email: e.target.value }))
					}
				/>
			</label>
			<label className='w-full mb-12'>
				<span className='relative top-[13px] left-2 bg-neutral-200 text-xl w-fit z-20 '>
					{i18next.t('password')}:
				</span>
				<input
					aria-label='Password'
					type='password'
					autoComplete='current-password'
					className='h-[50px] drop-shadow-md shadow-md w-full rounded-md border-neutral-300 bg-neutral-200 indent-4 focus:border-b-2  focus:border-blue-500 focus:outline-0'
					value={loginInfo.password}
					onChange={(e) =>
						setLoginInfo((state) => ({ ...state, password: e.target.value }))
					}
				/>

				{/* at least one letter and one number, */}
				<p className='mt-2 text-blue-600' onClick={handlePasswordRecovery}>
					{i18next.t('forgotPassword')}
				</p>
			</label>
			<Button
				type={'submit'}
				onClick={handleSubmit}
				tailwind='w-[151.5px] h-[64px]'>
				{i18next.t('logIn')}
			</Button>
			<Divider>
				<p className='font-medium'>OR</p>
			</Divider>

			<Button
				href={getTwitterOauthUrl()}
				width='w-[fit]'
				height='h-fit'
				bgColor=''
				textColor='text-neutral-950'
				tailwind={
					'border-2 border-neutral-300 text-start bg-neutral-200 p-5 drop-shadow-md shadow-md'
				}>
				<a href={getTwitterOauthUrl()}>
					<span className='flex gap-4 text-sm'>
						Log In Using
						<FaXTwitter className='my-auto' />
					</span>
				</a>
			</Button>
		</form>
	);
}

LoginForm.propTypes = {
	setUser: PropTypes.func,
};
