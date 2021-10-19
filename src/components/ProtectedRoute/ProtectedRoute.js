import { CircularProgress } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Redirect, Route } from 'react-router';
import { useAuth } from '../../hooks/useAuth';

const ProtectedRoute = ({ children, ...rest }) => {
   const { user, userLoading } = useAuth();

   if (userLoading) {
      return (
         <Box sx={{ display: 'flex', justifyContent: 'center', mt: 10 }}>
            <CircularProgress />
         </Box>
      );
   }

   return (
      <Route
         {...rest}
         render={({ location }) =>
            user ? (
               children
            ) : (
               <Redirect
                  to={{ pathname: '/login', state: { from: location } }}
               ></Redirect>
            )
         }
      ></Route>
   );
};

export default ProtectedRoute;
