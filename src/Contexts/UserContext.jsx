import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { verifyUser } from '../services/auth';

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
	const [user, setUser] = useState(null);
	useEffect(() => {
		verifyUser(setUser);
	}, []);
	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	);
}

UserContextProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
