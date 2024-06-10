import Button from '../Button';

import { useContext, useState } from 'react';

import i18next from '../../Configs/i18n';
import i18n from '../../Configs/i18n';
import { changePassword } from '../../services/auth';

export default function ResetPasswordForm({ email, code, setUser }) {
	const [recoverInfo, setRecoverInfo] = useState({
		password: '',
		passwordConfirmation: '',
	});

	function handleSubmit(e) {
		e.preventDefault();
		changePassword(recoverInfo, email, code, setUser);
	}
	return (
		<form className='flex flex-col items-center justify-center w-5/6 mt-4 h-1/2'>
			<label className='w-full'>
				<span className='relative top-[13px] left-2 bg-neutral-200 text-xl w-fit z-20'>
					{i18next.t('password')}:
				</span>
				<input
					aria-label='Password'
					type='password'
					className='h-[50px] drop-shadow-md shadow-md w-full rounded-md border-neutral-300 bg-neutral-200 indent-4 focus:border-b-2  focus:border-blue-500 focus:outline-0'
					value={recoverInfo.password}
					onChange={(e) =>
						setRecoverInfo((state) => ({ ...state, password: e.target.value }))
					}
				/>
				{recoverInfo.password.length > 0 && recoverInfo.password.length < 8 && (
					<span className='text-sm text-pink-500'>
						*{i18n.t('passwordValidator')}
					</span>
				)}
			</label>
			<label className='w-full mb-6'>
				<span className='relative top-[13px] left-2 bg-neutral-200 text-xl w-fit z-20 '>
					{i18next.t('confirmPassword')}:
				</span>
				<input
					aria-label='Confirm Password'
					type='password'
					className='h-[50px] drop-shadow-md shadow-md w-full rounded-md border-neutral-300 bg-neutral-200 indent-4 focus:border-b-2  focus:border-blue-500 focus:outline-0'
					value={recoverInfo.confirmPssword}
					onChange={(e) =>
						setRecoverInfo((state) => ({
							...state,
							passwordConfirmation: e.target.value,
						}))
					}
				/>
				{recoverInfo.passwordConfirmation.length > 0 &&
					recoverInfo.passwordConfirmation !== recoverInfo.password && (
						<span className='text-sm text-pink-500'>
							*{i18n.t('confirmPasswordValidator')}
						</span>
					)}
			</label>
			<Button type={'submit'} onClick={handleSubmit} width='w-fit'>
				{i18next.t('changePassword')}
			</Button>
		</form>
	);
}