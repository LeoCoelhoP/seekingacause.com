import Button from '../../Components/Button';
import { useState } from 'react';

export default function RegisterForm() {
	const [loginInfo, setLoginInfo] = useState({
		email: '',
		password: '',
		confirmPassword: '',
	});

	return (
		<form className='flex flex-col items-center justify-center w-5/6 h-full '>
			<label className='w-full'>
				<p className='relative top-[13px] left-2 bg-neutral-200 text-xl w-fit '>
					Email Address:
				</p>
				<input
					aria-label='Email Address'
					className='h-[50px] border-2 w-full rounded-md border-neutral-300 bg-neutral-200 indent-4'
					value={loginInfo.email}
					onChange={(e) =>
						setLoginInfo((state) => ({ ...state, email: e.target.value }))
					}
				/>
			</label>
			<label className='w-full '>
				<p className='relative top-[13px] left-2 bg-neutral-200 text-xl w-fit '>
					Password:
				</p>
				<input
					aria-label='Password'
					type='password'
					className='h-[50px] border-2 w-full rounded-md border-neutral-300 bg-neutral-200 indent-4'
					value={loginInfo.password}
					onChange={(e) =>
						setLoginInfo((state) => ({ ...state, password: e.target.value }))
					}
				/>
			</label>
			<label className='w-full mb-6'>
				<p className='relative top-[13px] left-2 bg-neutral-200 text-xl w-fit '>
					Confirm Password:
				</p>
				<input
					aria-label='Confirm Password'
					type='password'
					className='h-[50px] border-2 w-full rounded-md border-neutral-300 bg-neutral-200 indent-4'
					value={loginInfo.password}
					onChange={(e) =>
						setLoginInfo((state) => ({ ...state, password: e.target.value }))
					}
				/>
			</label>

			<Button>Register</Button>
		</form>
	);
}
