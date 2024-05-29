import Divider from '../../Components/Divider';
import Button from '../../Components/Button';
import { FaGoogle } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { useState } from 'react';

export default function LoginForm() {
	const [loginInfo, setLoginInfo] = useState({ email: '', password: '' });

	return (
		<form className='flex flex-col items-center justify-center w-5/6 mt-4 h-1/2'>
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
			<label className='w-full mb-6'>
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
				<p className='text-blue-600 '>Forgot your password?</p>
			</label>
			<Button>Log In</Button>
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
