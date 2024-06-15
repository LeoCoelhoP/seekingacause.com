import { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import { FaGoogle } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

import i18next from '../../Configs/i18n';
import { login, recoverPassword } from '../../services/auth';
import { LayoutContext } from '../../Contexts/LayoutContext';
import { emailValidator } from '../../utils/validators';

import Button from '../../Components/Button';
import Divider from '../../Components/Divider';

export default function LoginForm({ setUser }) {
	const { language } = useContext(LayoutContext);
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
		login({ ...loginInfo }, setUser);
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
			<Button type={'submit'} onClick={handleSubmit}>
				{i18next.t('logIn')}
			</Button>
			<Divider>
				<p className='font-medium'>OR</p>
			</Divider>
			<div className='flex gap-4 text-xl'>
				<Button
					width='w-[25px]'
					height='h-[25px]'
					bgColor=''
					textColor='text-red-600'
					tailwind={
						'border-2 border-neutral-300 text-start bg-neutral-200 p-5'
					}>
					<FaGoogle />
				</Button>
				<Button
					width='w-[25px]'
					height='h-[25px]'
					bgColor=''
					textColor='text-neutral-950'
					tailwind={
						'border-2 border-neutral-300 text-start bg-neutral-200 p-5'
					}>
					<FaXTwitter />
				</Button>
			</div>
		</form>
	);
}

LoginForm.propTypes = {
	setUser: PropTypes.func,
};
