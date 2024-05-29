import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import LoginForm from '../Components/AuthPage/LoginForm';
import RegisterForm from '../Components/AuthPage/RegisterForm';

export default function Auth() {
	const navigate = useNavigate();
	const [loginOpen, setLoginOpen] = useState(true);

	useEffect(() => {
		// Todo User Auth Context
		const loggedIn = true;
		if (loggedIn) navigate('/profile', { replace: true });
	}, [navigate]);

	return (
		<div className='flex flex-col items-center justify-center w-full h-full p-4 bg-neutral-200 text-neutral-950 w-svw'>
			<div className='flex gap-4 text-2xl text-center'>
				<span
					onClick={() => setLoginOpen(() => true)}
					className={`border-b-2 p-2 w-[100px] cursor-pointer ${
						loginOpen ? 'border-blue-600 font-medium' : ''
					}`}>
					Log In
				</span>
				<span
					onClick={() => setLoginOpen(() => false)}
					className={`border-b-2 p-2 w-[100px] cursor-pointer ${
						loginOpen ? '' : 'border-blue-600 font-semibold'
					}`}>
					Register
				</span>
			</div>
			<div className='flex flex-col items-center justify-center w-5/6 mt-4 h-1/2'>
				{loginOpen ? <LoginForm /> : <RegisterForm />}
			</div>
		</div>
	);
}
