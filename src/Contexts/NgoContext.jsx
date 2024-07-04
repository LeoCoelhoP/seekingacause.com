import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { getAllNgos } from '../services/ngo';

export const NgoContext = createContext();

export default function NgoProvider({ children }) {
	const [ngo, setNgo] = useState(null);
	useEffect(() => {
		getAllNgos(setNgo);
	}, []);
	return (
		<NgoContext.Provider value={{ ngo, setNgo }}>
			{children}
		</NgoContext.Provider>
	);
}

NgoProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
