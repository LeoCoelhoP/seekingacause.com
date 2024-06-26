import { useContext, useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import { verifyOTP } from '../services/auth';
import i18next from '../Configs/i18n';

import { UserContext } from '../Contexts/UserContext';

import LoginForm from '../Components/AuthPage/LoginForm';
import RegisterForm from '../Components/AuthPage/RegisterForm';
import ResetPasswordForm from '../Components/AuthPage/ResetPasswordForm';

export default function Auth({ resetPassword }) {
	const navigate = useNavigate();
	const [loginOpen, setLoginOpen] = useState(true);
	const { user, setUser } = useContext(UserContext);

	const [searchParams] = useSearchParams();
	const code = searchParams.get('code');
	const email = searchParams.get('email');

	useEffect(() => {
		async function validateOTP() {
			await verifyOTP(code, email, setUser);
		}

		if (code && email && !resetPassword) validateOTP();

		if (resetPassword && (!email || !code)) {
			navigate('/auth');
		}
	}, [searchParams, setUser, navigate, code, email, resetPassword]);

	useEffect(() => {
		if (user && !resetPassword) navigate('/profile', { replace: true });
	}, [user, resetPassword, navigate]);

	if (resetPassword)
		return (
			<div className='flex flex-col items-center justify-center w-full h-full bg-neutral-200 text-neutral-950'>
				<div className='text-2xl text-center '>
					{i18next.t('resetPassword')}
				</div>
				<div className='flex flex-col items-center justify-center w-5/6 '>
					<ResetPasswordForm email={email} code={code} setUser={setUser} />
				</div>
			</div>
		);

	return (
		<div className='flex flex-col items-center justify-center w-full p-4 mt-10 h-fit bg-neutral-200 text-neutral-950'>
			<div className='flex gap-4 text-2xl text-center '>
				<span
					onClick={() => setLoginOpen(() => true)}
					className={`border-b-2 p-2 w-[100px] cursor-pointer ${
						loginOpen ? 'border-blue-600 font-medium' : ''
					}`}>
					{i18next.t('logIn')}
				</span>
				<span
					onClick={() => setLoginOpen(() => false)}
					className={`border-b-2 p-2 w-[100px] cursor-pointer ${
						loginOpen ? '' : 'border-blue-600 font-semibold'
					}`}>
					{i18next.t('register')}
				</span>
			</div>
			<div className='flex flex-col items-center justify-center w-5/6 mt-10 h-1/2'>
				{loginOpen ? (
					<LoginForm setUser={setUser} />
				) : (
					<RegisterForm setUser={setUser} />
				)}
			</div>
		</div>
	);
}

Auth.propTypes = {
	resetPassword: PropTypes.bool,
};
