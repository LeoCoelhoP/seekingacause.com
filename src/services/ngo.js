import axios from '../Configs/axios';
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
		console.error(error);
		toast.error(error.message);
	}
}

export { getAllNgos };
