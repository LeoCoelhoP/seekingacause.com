import Button from '../../Components/Button';
import { register } from '../../services/auth';
import { emailValidator } from '../../utils/validators';
import CountriesSelector from '../CountriesSelector';
import { useContext, useState } from 'react';
import i18n from '../../Configs/i18n';
import toast from 'react-hot-toast';
import { LayoutContext } from '../../Contexts/LayoutContext';
import { useNavigate } from 'react-router-dom';

export default function RegisterForm(setUser) {
	const { language } = useContext(LayoutContext);
	const navigate = useNavigate();
	const [registerInfo, setRegisterInfo] = useState({
		fullName: 'Leonardo Padilha',
		email: 'leopadilhac1308@gmail.com',
		password: 'test',
		passwordConfirmation: 'test',
		country: 'BR',
	});
	function handleCountrySelector(e) {
		setRegisterInfo((state) => ({ ...state, country: e.target.value }));
	}

	function handleSubmit(e) {
		e.preventDefault();
		if (!registerInfo.email) return toast.error(i18n.t('emailValidator'));
		if (!registerInfo.fullName || registerInfo.fullName.trim().length === 0)
			return toast.error(i18n.t('fullNameValidator'));
		if (!registerInfo.password) return toast.error(i18n.t('passwordRequired'));
		if (registerInfo.password.length < 7)
			return toast.error(i18n.t('passwordValidator'));
		const currentLanguage = language === 'BR' ? 'pt' : 'en';
		register({ ...registerInfo }, currentLanguage);
	}

	return (
		<form
			className='flex flex-col items-center justify-center w-5/6 h-full '
			onSubmit={handleSubmit}>
			<label className='w-full'>
				<span className='relative z-10 top-[13px] left-2 bg-neutral-200 text-xl w-fit '>
					{i18n.t('fullName')}:
				</span>
				<input
					aria-label='Full Name'
					className='h-[50px] drop-shadow-md shadow-md w-full rounded-md border-neutral-300 bg-neutral-200 indent-4 focus:border-b-2  focus:border-blue-500 focus:outline-0'
					value={registerInfo.fullName}
					onChange={(e) =>
						setRegisterInfo((state) => ({ ...state, fullName: e.target.value }))
					}
				/>
				{!registerInfo.fullName && registerInfo.fullName.length > 0 && (
					<span className='text-sm text-pink-500'>
						*{i18n.t('fullNameValidator')}
					</span>
				)}
			</label>
			<label className='w-full'>
				<span className='relative z-10 top-[13px] left-2 bg-neutral-200 text-xl w-fit '>
					{i18n.t('emailAddress')}:
				</span>
				<input
					aria-label='Email Address'
					className='h-[50px] drop-shadow-md shadow-md w-full rounded-md border-neutral-300 bg-neutral-200 indent-4 focus:border-b-2  focus:border-blue-500 focus:outline-0'
					value={registerInfo.email}
					onChange={(e) =>
						setRegisterInfo((state) => ({ ...state, email: e.target.value }))
					}
				/>
				{registerInfo.email && !emailValidator(registerInfo.email) && (
					<span className='text-sm text-pink-500'>
						*{i18n.t('emailValidator')}
					</span>
				)}
			</label>
			<label className='w-full '>
				<span className='relative z-10 top-[13px] left-2 bg-neutral-200 text-xl w-fit '>
					{i18n.t('password')}:
				</span>
				<input
					aria-label='Password'
					type='password'
					className='h-[50px] drop-shadow-md shadow-md w-full rounded-md border-neutral-300 bg-neutral-200 indent-4 focus:border-b-2  focus:border-blue-500 focus:outline-0'
					value={registerInfo.password}
					onChange={(e) =>
						setRegisterInfo((state) => ({ ...state, password: e.target.value }))
					}
				/>
				{registerInfo.password.length > 0 &&
					registerInfo.password.length < 8 && (
						<span className='text-sm text-pink-500'>
							*{i18n.t('passwordValidator')}
						</span>
					)}
			</label>
			<label className='w-full mb-6'>
				<span className='relative z-10 top-[13px] left-2 bg-neutral-200 text-xl w-fit '>
					{i18n.t('confirmPassword')}:
				</span>
				<input
					aria-label='Confirm Password'
					type='password'
					className='h-[50px] drop-shadow-md shadow-md w-full rounded-md border-neutral-300 bg-neutral-200 indent-4 focus:border-b-2  focus:border-blue-500 focus:outline-0'
					value={registerInfo.passwordConfirmation}
					onChange={(e) =>
						setRegisterInfo((state) => ({
							...state,
							passwordConfirmation: e.target.value,
						}))
					}
				/>
				{registerInfo.passwordConfirmation.length > 0 &&
					registerInfo.passwordConfirmation !== registerInfo.password && (
						<span className='text-sm text-pink-500'>
							*{i18n.t('confirmPasswordValidator')}
						</span>
					)}
			</label>

			<label className='relative w-full bottom-5'>
				<CountriesSelector onChange={handleCountrySelector} />
			</label>
			<Button type={'submit'} onClick={handleSubmit}>
				{i18n.t('register')}
			</Button>
		</form>
	);
}
