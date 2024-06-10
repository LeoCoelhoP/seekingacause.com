import axios from 'axios';
import { BASE_URL } from '../Configs/config';

// ----------------------------------------------------------------------

const axiosInstance = axios.create({
	baseURL: BASE_URL,
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
	'Access-Control-Allow-Origin': 'http://localhost:80',
	'Access-Control-Allow-Headers': 'Authorization',
	'Access-Control-Allow-Methods': 'GET, POST, PATCH',
	'Content-Type': 'application/json;charset=UTF-8',
};

export default axiosInstance;
