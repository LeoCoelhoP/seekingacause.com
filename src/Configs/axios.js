import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: import.meta.env.VITE_BACK_END_URL,
	withCredentials: true,
});

axiosInstance.interceptors.response.use(
	(response) => response,
	(error) =>
		Promise.reject(
			(error.response && error.response.data) || 'Something went wrong',
		),
);

axiosInstance.AxiosHeaders = {
	'Access-Control-Allow-Origin': import.meta.env.BACK_END_URL,
	'Access-Control-Allow-Headers': 'Content-Type, Authorization',
	'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE',
};

export default axiosInstance;
