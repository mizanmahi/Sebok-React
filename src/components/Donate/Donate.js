import { useTheme } from '@emotion/react';
import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';
import OpacityIcon from '@mui/icons-material/Opacity';
import bloodImage from '../../images/blood.jpg';

const Donate = () => {
   const theme = useTheme();
   return (
      <section>
         <Container maxWidth='xl'>
            <SectionHeader
               heading='Save Lives by Giving Blood'
               mainHeading='Donate Blood'
            />
            <Grid container>
               <Grid
                  item
                  md={6}
                  sx={{
                     backgroundImage: `url(${bloodImage})`,
                     backgroundSize: 'cover',
                     minWidth: 300,
                  }}
               >
                  {/* <img src={bloodImage} alt="blood" style={{maxWidth: '100%', height: 'auto', maxHeight: 320 }}/> */}
               </Grid>
               <Grid item md={6}>
                  <Box sx={{ background: theme.palette.primary.main, p: 10,}}>
                     <Typography
                        variant='h4'
                        component='span'
                        color='secondary'
                     >
                        Donate Blood Join With Us
                     </Typography>
                     <Typography
                        variant='body1'
                        color='secondary'
                        sx={{ my: 3 }}
                     >
                       Donating Blood Makes a Big Difference in the Lives of Others.You may still donate blood, platelets or plasma after receiving a COVID-19 vaccine. Knowing the name of the manufacturer of the vaccine is important in determining your blood donation eligibility. To learn more about the COVID-19 vaccine and blood donation, Your blood is precious, and your donations are truly life-saving. From how donating works to who needs it, there's so much to know about blood. 
                     </Typography>
                     <Button
                        variant='outlined'
                        color='secondary'
                        sx={{ p: '.6rem 2rem' }}
                     >
                        Donate <OpacityIcon fontSize='large' />
                     </Button>
                  </Box>
               </Grid>
            </Grid>
         </Container>
      </section>
   );
};

export default Donate;
