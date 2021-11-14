import {
   Alert,
   Button,
   Checkbox,
   Container,
   FormControlLabel,
   Grid,
   Paper,
   Snackbar,
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

   const [emailErr, setEmailErr] = useState(null);
   const [passErr, setPassErr] = useState(null);

   const location = useLocation();
   const history = useHistory();

   const {
      handlePasswordSignin,
      handleGoogleSignin,
      setError,
      setUserLoading,
      error,
   } = useAuth();

   const submitHandler = (e) => {
      e.preventDefault();

      if (!/^\S+@\S+\.\S+$/.test(email)) {
         setEmailErr('Please insert a valid email');
         return;
      } else if (error?.includes('user-not-found')) {
         setEmailErr('No user with this mail');
      }

      if (password.length === 0) {
         setPassErr("Password cant' be empty");
         return;
      } else if (password.length < 6) {
         setPassErr('Password must contain at least 6 characters');
         return;
      }

      handlePasswordSignin(email, password)
         .then((res) => {
            setError(null);
            location.state
               ? history.push(location.state.from.pathname)
               : history.push('/');
         })
         .catch((err) => {
            if (err.message.includes('user-not-found')) {
               setEmailErr('no user found with this mail');
            } else if (err.message.includes('wrong-password')) {
               setPassErr("Password didn't match");
            }
         })
         .finally(() => {
            setUserLoading(false);
         });
   };

   const handleEmailChange = (e) => {
      setEmailErr(null);
      setEmail(e.target.value);
   };

   const handlePassChange = (e) => {
      setPassErr(null);
      setPassword(e.target.value);
   };

   const googleSigninHandler = () => {
      handleGoogleSignin()
         .then((res) => {
            setOpen(true)
            setError(null);
            location.state
               ? history.push(location.state.from.pathname)
               : history.push('/');
         })
         .catch((err) => setError(err.message))
         .finally(() => {
            setUserLoading(false);
         });
   };

   const [open, setOpen] = useState(false);

   const handleClose = () => {
      setOpen(false);
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
                        component='span'
                        mb={3}
                        sx={{ fontWeight: 600 }}
                     >
                        Login
                     </Typography>

                     {location.state && (
                        <Typography color='primary' sx={{ mb: 2 }}>
                           You Must Log In To Continue*
                        </Typography>
                     )}

                     <Box
                        component='form'
                        sx={{ display: 'flex', flexDirection: 'column', mt: 1 }}
                        onSubmit={submitHandler}
                     >
                        <TextField
                           label='Username or Email'
                           variant='standard'
                           color='warning'
                           sx={{ mb: 2 }}
                           type='email'
                           required
                           onChange={handleEmailChange}
                           error={emailErr ? true : false}
                           helperText={emailErr ? emailErr : ''}
                        />
                        <TextField
                           required
                           label='Password'
                           variant='standard'
                           type='password'
                           color='warning'
                           sx={{ mb: 1 }}
                           onChange={handlePassChange}
                           error={passErr ? true : false}
                           helperText={passErr ? passErr : ''}
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
         <Snackbar
            open={open}
            autoHideDuration={2000}
            onClose={handleClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
         >
            <Alert
               onClose={handleClose}
               severity='success'
               sx={{ width: '100%' }}
            >
               Sign in success full!
            </Alert>
         </Snackbar>
      </div>
   );
};

export default Login;
