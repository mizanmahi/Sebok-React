import {
   Container,
   Typography,
   Button,
   Drawer,
   Chip,
   Avatar,
} from '@mui/material';
import { Box, styled } from '@mui/system';
import useMediaQuery from '@mui/material/useMediaQuery';
import React, { useState } from 'react';
// import { theme } from '../../theme/theme';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { useAuth } from '../../hooks/useAuth';
import { useTheme } from '@emotion/react';

const Header = () => {
   const theme = useTheme();
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
                  variant='h4'
                  component={Link}
                  to='/'
                  sx={{ textDecoration: 'none', color: '#ffffff', display: 'flex', alignItems: 'center' }}
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
                     <Typography variant='h5' component={Link} to='/about' sx={{textDecoration: 'none', color: '#fff', mr: 3}}>
                        About us
                     </Typography>
                     <Typography variant='h5' component={Link} to='/contact' sx={{textDecoration: 'none', color: '#fff', mr: 3}}>
                        Contact
                     </Typography>

                     <Button
                        variant='outlined'
                        color='secondary'
                        sx={{
                           mr: 2,
                           p: '.8rem 1.4rem',
                           fontWeight: '600',
                           '&:hover': {
                              background: theme.palette.secondary.main,
                              color: theme.palette.primary.main,
                           },
                        }}
                     >
                        Appointment
                     </Button>

                     {!user ? (
                        <Button
                           variant='contained'
                           color='secondary'
                           component={Link}
                           to='/login'
                           sx={{
                              p: '.8rem 1.6rem',
                              color: theme.palette.primary.main,
                              fontWeight: '600',
                           }}
                        >
                           Login
                        </Button>
                     ) : (
                        <Button
                           variant='outlined'
                           color='secondary'
                           onClick={handleSignOut}
                           sx={{ p: '.8rem 1.6rem' }}
                        >
                           Logout
                        </Button>
                     )}
                     {user && (
                        <Chip
                           variant='outlined'
                           sx={{ ml: 2, border: 0 }}
                           avatar={
                              user.photoURL ? (
                                 <Avatar alt='user' src={user.photoURL} />
                              ) : (
                                 <Avatar>user.displayName.slice(0,1)</Avatar>
                              )
                           }
                           label={user.displayName}
                           color='secondary'
                        />
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
                     background: theme.palette.primary.main,
                     color: '#fff',
                  }}
               >
                  <Typography
                     variant='h3'
                     component={Link}
                     to='/'
                     sx={{ textDecoration: 'none', color: '#ffffff', mb: 3 }}
                  >
                     <LocalHospitalIcon fontSize='large' />
                     Sebok
                  </Typography>

                  <Typography variant='body1' sx={{ mb: 2 }}>
                     About us
                  </Typography>
                  <Typography variant='body1' sx={{ mb: 2 }}>
                     Contact
                  </Typography>

                  <Button
                     variant='outlined'
                     color='secondary'
                     sx={{
                        p: '1rem 2rem',
                        fontWeight: '600',
                        mb: 1,
                        '&:hover': {
                           background: theme.palette.secondary.main,
                           color: theme.palette.primary.main,
                        },
                     }}
                  >
                     Appointment
                  </Button>
                  {!user ? (
                     <Button
                        variant='contained'
                        color='secondary'
                        component={Link}
                        to='/login'
                        sx={{
                           p: '1rem 2.5rem',
                           color: theme.palette.primary.main,
                           fontWeight: '600',
                        }}
                     >
                        Login
                     </Button>
                  ) : (
                     <Button
                        variant='contained'
                        color='error'
                        onClick={handleSignOut}
                        sx={{ p: '1rem 2.5rem' }}
                     >
                        Logout
                     </Button>
                  )}
               </Box>
            </Drawer>
         </Container>
      </Header>
   );
};

export default Header;
