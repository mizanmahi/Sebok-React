import {
   Container,
   Typography,
   Button,
   Drawer,
   Chip,
   Avatar,
   List,
   ListItem,
   ListItemButton,
   ListItemText,
} from '@mui/material';
import { Box, styled } from '@mui/system';
import useMediaQuery from '@mui/material/useMediaQuery';
import React, { useState } from 'react';
// import { theme } from '../../theme/theme';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import { useAuth } from '../../hooks/useAuth';
import { useTheme } from '@emotion/react';

const Header = () => {
   const theme = useTheme();
   const matches = useMediaQuery(theme.breakpoints.down('md'));

   const { user, handleSignOut, name } = useAuth();

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
                  sx={{
                     textDecoration: 'none',
                     color: '#ffffff',
                     display: 'flex',
                     alignItems: 'center',
                  }}
               >
                  <LocalHospitalIcon fontSize='large' />
                  Sebok
               </Typography>
               {matches ? (
                  <Button onClick={() => setOpenDrawer(!openDrawer)}>
                     <MenuIcon fontSize='large' color='secondary' />
                  </Button>
               ) : (
                  <MenuContainer>
                     <Button
                        color='secondary'
                        component={Link}
                        to='/about'
                        sx={{
                           mr: 2,
                           p: '.8rem 1.4rem',
                           '&:hover': {
                              background: theme.palette.secondary.main,
                              color: theme.palette.primary.main,
                           },
                        }}
                     >
                        About us
                     </Button>

                     <Button
                        color='secondary'
                        component={Link}
                        to='/appointment'
                        sx={{
                           mr: 2,
                           p: '.8rem 1.4rem',
                           '&:hover': {
                              background: theme.palette.secondary.main,
                              color: theme.palette.primary.main,
                           },
                        }}
                     >
                        Appointment
                     </Button>
                     {user && (
                        <Chip
                           variant='outlined'
                           sx={{
                              ml: 2,
                              border: 0,
                              fontSize: '16px',
                              '& .MuiChip-avatarColorSecondary': {
                                 background: 'transparent',
                              },
                           }}
                           avatar={
                              user.photoURL ? (
                                 <Avatar alt='user' src={user.photoURL} />
                              ) : (
                                 <Avatar>
                                    <PersonIcon
                                       fontSize='large'
                                       color='secondary'
                                    />
                                 </Avatar>
                              )
                           }
                           label={user.displayName ? user.displayName : name}
                           color='secondary'
                        />
                     )}

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
                           sx={{ p: '.5rem 1.2rem', fontWeight: '600' }}
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
                     alignItems: 'flex-start',
                     background: theme.palette.primary.main,
                     color: '#fff',
                     height: '100vh',
                  }}
               >
                  <Button
                     sx={{ ml: 'auto' }}
                     onClick={() => setOpenDrawer(false)}
                  >
                     <MenuOpenIcon fontSize='large' color='secondary' />
                  </Button>
                  <Typography
                     variant='h3'
                     component={Link}
                     to='/'
                     sx={{ textDecoration: 'none', color: '#ffffff', mb: 3 }}
                  >
                     <LocalHospitalIcon fontSize='large' />
                     Sebok
                  </Typography>

                  {user && (
                     <Chip
                        variant='outlined'
                        sx={{
                           border: 0,
                           fontSize: '16px',
                           '& .MuiChip-avatarColorSecondary': {
                              background: 'transparent',
                           },
                        }}
                        avatar={
                           user.photoURL ? (
                              <Avatar alt='user' src={user.photoURL} />
                           ) : (
                              <Avatar>
                                 <PersonIcon
                                    fontSize='large'
                                    color='secondary'
                                 />
                              </Avatar>
                           )
                        }
                        label={user.displayName ? user.displayName : name}
                        color='secondary'
                     />
                  )}

                  <Box sx={{ width: '100%', maxWidth: 360 }}>
                     <List>
                        <ListItem disablePadding>
                           <ListItemButton component={Link} to='/about'>
                              <ListItemText primary='About Us' />
                           </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                           <ListItemButton component={Link} to='/appointment'>
                              <ListItemText primary='Appointment' />
                           </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                           {user ? (
                              <ListItemButton
                                 component='a'
                                 onClick={handleSignOut}
                              >
                                 <ListItemText primary='Logout' />
                                 <LogoutIcon />
                              </ListItemButton>
                           ) : (
                              <ListItemButton component={Link} to='/login'>
                                 <ListItemText primary='Login' />
                              </ListItemButton>
                           )}
                        </ListItem>
                     </List>
                  </Box>
               </Box>

               <Box sx={{ background: theme.palette.primary.main }}>
                  <Typography align='center' color='secondary' variant='body1'>
                     Sebok &copy; 2021
                  </Typography>
               </Box>
            </Drawer>
         </Container>
      </Header>
   );
};

export default Header;
