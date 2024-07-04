import axios from '../Configs/axios';
import toast from 'react-hot-toast';

async function verifyOTP(code, email, setUser) {
	try {
		const response = await axios.post(
			'/auth/verify-otp',
			{
				otp: code,
				email,
			},
			{
				headers: {
					'Content-Type': 'application/json',
				},
			},
		);
		toast.success(response.data.message);
		setUser(() => ({ ...response.data.user }));
	} catch (error) {
		setUser(() => null);
		toast.error(error.message || 'An error occurred');
	}
}

async function register(formValues, language) {
	try {
		const response = await axios.post(
			'/auth/register',
			{
				...formValues,
				language,
			},
			{
				headers: {
					Authorization: 'Bearer',
				},
			},
		);
		toast.success(response.data.message, { duration: 5000 });
		return true;
	} catch (error) {
		toast.error(error.message || 'An error occurred');
	}
}
async function logOut(setUser) {
	setUser(() => null);
	try {
		const response = await axios.post('/auth/log-out');
		toast.success(response.data.message);
	} catch (error) {
		toast.error(error.message || 'An error occurred');
	}
}
async function login(formValues, setUser) {
	try {
		const response = await axios.post(
			'/auth/login',
			{
				...formValues,
			},
			{
				headers: {
					'Content-Type': 'application/json',
				},
			},
		);
		toast.success(response.data.message);
		setUser(() => ({ ...response.data.user }));
	} catch (error) {
		toast.error(error.message || 'An error occurred');
	}
}

async function twitterLogin() {
	try {
		await axios.post('/auth/twitter-login', {
			headers: {
				'Content-Type': 'application/json',
			},
		});
	} catch (error) {
		toast.error(error.message);
		toast.error(error.message || 'An error occurred');
	}
}

async function twitterLoginFinal({ twitterToken, setUser }) {
	try {
		const response = await axios.post(
			'/auth/twitter-login-final',
			{
				twitterToken,
			},
			{
				headers: {
					'Content-Type': 'application/json',
				},
			},
		);
		toast.success(response.data.message);
		setUser(() => ({ ...response.data.user }));
	} catch (error) {
		toast.error(error.message || 'An error occurred');
	}
}

async function verifyUser(setUser) {
	try {
		const response = await axios.post('/auth/verify-user');
		if (response.data.user) setUser(() => ({ ...response.data.user }));
		else setUser(() => null);
	} catch (error) {
		setUser(() => null);
		return;
	}
}
async function recoverPassword(email, language) {
	try {
		const response = await axios.post(
			'/auth/forgot-password',
			{
				email,
				language,
			},
			{
				headers: {
					'Content-Type': 'application/json',
				},
			},
		);
		toast.success(response.data.message);
	} catch (error) {
		toast.error(error.message || 'An error occurred');
	}
}
async function changePassword(formValues, email, code, setUser, navigate) {
	try {
		const response = await axios.post(
			'/auth/reset-password',
			{
				...formValues,
				email,
				otp: code,
			},
			{
				headers: {
					Authorization: 'Bearer',
				},
			},
		);
		toast.success(response.data.message);
		setUser(() => ({ ...response.data.user }));
		navigate('/', { replace: true });
		return true;
	} catch (error) {
		setUser(() => null);
		toast.error(error.message || 'An error occurred');
	}
}

export {
	login,
	register,
	verifyOTP,
	verifyUser,
	logOut,
	recoverPassword,
	changePassword,
	twitterLogin,
	twitterLoginFinal,
};
