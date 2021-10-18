import { useContext } from 'react';
import { authContext } from '../context/authContext';

export const useAuth = () => useContext(authContext);
