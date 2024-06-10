import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getAllNgos } from '../services/ngo';

export const NgoContext = createContext();

export default function NgoContextProvider({ children }) {
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

NgoContextProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
