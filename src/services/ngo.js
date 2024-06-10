import axios from '../utils/axios';
import toast from 'react-hot-toast';

async function getAllNgos(setNgo) {
	try {
		const response = await axios.get('/ngo', {
			headers: {
				'Content-Type': 'application/json',
			},
		});
		setNgo(response.data.ngos);
	} catch (error) {
		toast.error(error.message);
	}
}

export { getAllNgos };
