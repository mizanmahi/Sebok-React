import React from 'react';
import useFirebase from '../hooks/useFirebase';
import { authContext } from './authContext';

const AuthContextProvider = ({ children }) => {
   const allAuthContext = useFirebase();
   return (
      <authContext.Provider value={allAuthContext}>
         {children}
      </authContext.Provider>
   );
};

export default AuthContextProvider;
