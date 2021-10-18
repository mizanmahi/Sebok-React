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
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

//  import './login.css';

const UnderlinedText = styled(Typography)(({ theme }) => ({
   color: theme.palette.warning.main,
   textDecoration: 'underline',
   cursor: 'pointer',
}));

const Signup = () => {
   const { handlePasswordSignup } = useFirebase();
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log(email, password);

      handlePasswordSignup(email, password);

    
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
                           id='standard-basic'
                           label='Username'
                           variant='standard'
                           sx={{ mb: 2 }}
                        />
                        <TextField
                           id='standard-basic'
                           label='Email'
                           variant='standard'
                           sx={{ mb: 2 }}
                           onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                           id='standard-basic'
                           label='Password'
                           variant='standard'
                           sx={{ mb: 1 }}
                           onChange={(e) => setPassword(e.target.value)}
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
                     >
                        Continue With Facebook
                     </Button>
                     <Button
                        variant='outlined'
                        startIcon={<FacebookIcon sx={{ color: '#4267B2' }} />}
                        sx={{
                           borderRadius: '40px',
                           mb: 1,
                           width: '250px',
                           justifyContent: 'flex-start',
                        }}
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
