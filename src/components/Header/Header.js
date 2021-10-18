import { Container, Typography, Button, Drawer } from '@mui/material';
import { Box, styled } from '@mui/system';
import useMediaQuery from '@mui/material/useMediaQuery';
import React, { useState } from 'react';
import { theme } from '../../theme/theme';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { useAuth } from '../../hooks/useAuth';

const Header = () => {
   const matches = useMediaQuery(theme.breakpoints.down('sm'));

   const { user, handleSignOut } = useAuth();
   console.log(user);

   const [openDrawer, setOpenDrawer] = useState(false);

   const Header = styled('header')(({ theme }) => ({
      background: theme.palette.primary.main,
      color: theme.palette.secondary.main,
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
   }));

   const MenuContainer = styled('div')({
      display: 'flex',
      alignItems: 'center',
   });

   return (
      <Header>
         <Container maxWidth='xl'>
            <Box
               sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
               }}
            >
               <Typography
                  variant='h3'
                  component={Link}
                  to='/'
                  sx={{ textDecoration: 'none', color: '#ffffff' }}
               >
                  <LocalHospitalIcon fontSize='large' />
                  Sebok
               </Typography>
               {matches ? (
                  <MenuIcon
                     fontSize='large'
                     onClick={() => setOpenDrawer(!openDrawer)}
                  />
               ) : (
                  <MenuContainer>
                     <Typography variant='body1' sx={{ mr: 2 }}>
                        About us
                     </Typography>
                     <Typography variant='body1' sx={{ mr: 2 }}>
                        Contact
                     </Typography>

                     <Button
                        variant='contained'
                        color='secondary'
                        sx={{ mr: 2 }}
                     >
                        Appointment
                     </Button>
                     {!user ? (
                        <Button
                           variant='contained'
                           color='secondary'
                           component={Link}
                           to='/login'
                        >
                           Login
                        </Button>
                     ) : (
                        <Button
                           variant='contained'
                           color='error'
                           onClick={handleSignOut}
                        >
                           Logout
                        </Button>
                     )}
                  </MenuContainer>
               )}
            </Box>

            {/* ------------------- drawer---------------- */}

            <Drawer
               anchor='left'
               open={openDrawer}
               onClose={() => setOpenDrawer(false)}
            >
               <Box
                  sx={{
                     display: 'flex',
                     flexDirection: 'column',
                     padding: '1rem',
                     alignItems: 'center',
                  }}
               >
                  <Typography variant='body1' sx={{ mb: 2 }}>
                     About us
                  </Typography>
                  <Typography variant='body1' sx={{ mb: 2 }}>
                     Contact
                  </Typography>

                  <Button variant='contained' color='secondary' sx={{ mb: 2 }}>
                     Appointment
                  </Button>
                  <Button
                     variant='contained'
                     color='secondary'
                     component={Link}
                     to='/login'
                  >
                     Login
                  </Button>
               </Box>
            </Drawer>
         </Container>
      </Header>
   );
};

export default Header;
