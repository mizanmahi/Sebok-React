import {
   Button,
   Checkbox,
   Container,
   FormControlLabel,
   Grid,
   Paper,
   TextField,
   Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { Box, styled } from '@mui/system';
import GoogleIcon from '@mui/icons-material/Google';
import { Link, useLocation, useHistory } from 'react-router-dom';

import './login.css';
import { useAuth } from '../../hooks/useAuth';

const UnderlinedText = styled(Typography)(({ theme }) => ({
   color: theme.palette.warning.main,
   textDecoration: 'underline',
   cursor: 'pointer',
}));

const Login = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const location = useLocation();
   const history = useHistory();

   const { handlePasswordSignin, handleGoogleSignin, setError } = useAuth();

   const submitHandler = (e) => {
      e.preventDefault();
      console.log({ email, password });
      handlePasswordSignin(email, password)
         .then((res) => {
            setError(null);
            location.state
               ? history.push(location.state.from.pathname)
               : history.push('/');
         })
         .catch((err) => {
            console.log(err.message);
            setError(err.message);
         });
   };

   const googleSigninHandler = () => {
      handleGoogleSignin()
         .then((res) => {
            setError(null);
            console.log(res.user);
            location.state
               ? history.push(location.state.from.pathname)
               : history.push('/');
         })
         .catch((err) => setError(err.message));
   };

   return (
      <div>
         <Container maxWidth='lg'>
            <Grid
               container
               justifyContent='center'
               alignItems='center'
               sx={{ height: 'calc(100vh - 165px)' }}
            >
               <Grid item md={8} lg={5}>
                  <Paper sx={{ padding: '2rem 3rem' }}>
                     <Typography
                        variant='h4'
                        component='h2'
                        mb={3}
                        sx={{ fontWeight: 600 }}
                     >
                        Login
                     </Typography>

                     <Box
                        component='form'
                        sx={{ display: 'flex', flexDirection: 'column' }}
                        onSubmit={submitHandler}
                     >
                        <TextField
                           label='Username or Email'
                           variant='standard'
                           color='warning'
                           sx={{ mb: 2 }}
                           type='email'
                           required
                           onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                           label='Password'
                           variant='standard'
                           type='password'
                           color='warning'
                           sx={{ mb: 1 }}
                           onChange={(e) => setPassword(e.target.value)}
                        />
                        <Box
                           sx={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                           }}
                        >
                           <FormControlLabel
                              control={<Checkbox color='warning' />}
                              label='Remember me'
                           />
                           <UnderlinedText>Forgot Password</UnderlinedText>
                        </Box>
                        <Button
                           variant='contained'
                           color='primary'
                           sx={{ mt: 3, mb: 1 }}
                           type='submit'
                        >
                           Login
                        </Button>
                        <Typography align='center'>
                           Don't have an account?{' '}
                           <UnderlinedText
                              component={Link}
                              to={{
                                 pathname: '/signup',
                                 state: location.state,
                              }}
                           >
                              Create one
                           </UnderlinedText>
                        </Typography>
                     </Box>
                  </Paper>
                  <Box
                     component='div'
                     sx={{ display: 'flex', alignItems: 'center', my: 3 }}
                  >
                     <div className='line'></div>
                     <div style={{ padding: '0 1rem' }}>OR</div>
                     <div className='line'></div>
                  </Box>

                  <Box
                     sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                     }}
                  >
                     <Button
                        variant='outlined'
                        startIcon={<GoogleIcon color='error' />}
                        sx={{
                           borderRadius: '40px',
                           mb: 1,
                           width: '250px',
                           justifyContent: 'flex-start',
                        }}
                        onClick={googleSigninHandler}
                     >
                        Continue With Google
                     </Button>
                  </Box>
               </Grid>
            </Grid>
         </Container>
      </div>
   );
};

export default Login;
