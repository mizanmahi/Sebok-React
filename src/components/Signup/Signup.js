import {
   Button,
   Container,
   Grid,
   Paper,
   TextField,
   Typography,
} from '@mui/material';
import { Box, styled } from '@mui/system';
import React, { useState } from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import { useAuth } from '../../hooks/useAuth';

const UnderlinedText = styled(Typography)(({ theme }) => ({
   color: theme.palette.warning.main,
   textDecoration: 'underline',
   cursor: 'pointer',
}));

const Signup = () => {
   const { handlePasswordSignup } = useFirebase();
   const [userName, setUserName] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const { handleGoogleSignin, setError, setUserLoading } = useAuth();

   const location = useLocation();
   const history = useHistory();

   const [emailErr, setEmailErr] = useState(null);
   const [passErr, setPassErr] = useState(null);

   const handleSubmit = (e) => {
      e.preventDefault();

      if (!/^\S+@\S+\.\S+$/.test(email)) {
         setEmailErr('Please insert a valid email');
         return;
      }

      if (password.length === 0) {
         setPassErr("Password cant' be empty");
         return;
      } else if (password.length < 6) {
         setPassErr('Password must contain at least 6 characters');
         return;
      }

      handlePasswordSignup(email, password, userName);
   };

   const googleSigninHandler = () => {
      handleGoogleSignin()
         .then((res) => {
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

   const handleEmailChange = (e) => {
      setEmailErr(null);
      setEmail(e.target.value);
   };

   const handlePassChange = (e) => {
      setPassErr(null);
      setPassword(e.target.value);
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
                        Create an account
                     </Typography>

                     <Box
                        component='form'
                        sx={{ display: 'flex', flexDirection: 'column' }}
                        onSubmit={handleSubmit}
                     >
                        <TextField
                           label='Username'
                           variant='standard'
                           sx={{ mb: 2 }}
                           onChange={(e) => setUserName(e.target.value)}
                           type='text'
                           required
                        />
                        <TextField
                           label='Email'
                           variant='standard'
                           type='email'
                           required
                           sx={{ mb: 2 }}
                           onChange={handleEmailChange}
                           error={emailErr ? true : false}
                           helperText={emailErr ? emailErr : ''}
                        />
                        <TextField
                           label='Password'
                           type='password'
                           variant='standard'
                           sx={{ mb: 1 }}
                           onChange={handlePassChange}
                           error={passErr ? true : false}
                           helperText={passErr ? passErr : ''}
                        />
                        {/* <Box
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
                         </Box> */}
                        <Button
                           variant='contained'
                           sx={{ mt: 3, mb: 1 }}
                           type='submit'
                        >
                           Signup
                        </Button>
                        <Typography align='center'>
                           Already have an account?{' '}
                           <UnderlinedText component={Link} to='/login'>
                              Login
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

export default Signup;
