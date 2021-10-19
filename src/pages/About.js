import { useTheme } from '@emotion/react';
import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import SectionHeader from '../components/SectionHeader/SectionHeader';

import doctorsImage from '../images/doctors.jpg';

const About = () => {
   const theme = useTheme();
   return (
      <section>
         <Container maxWidth='xl'>
            <SectionHeader heading='Who wre we?' mainHeading='Get to know us' />
            <Grid container>
               <Grid item md={6}>
                  <Box sx={{ background: theme.palette.primary.main, p: 10 }}>
                     <Typography
                        variant='h4'
                        component='span'
                        color='secondary'
                     >
                        About Us
                     </Typography>
                     <Typography
                        variant='body1'
                        color='secondary'
                        sx={{ my: 3 }}
                     >
                        Donating Blood Makes a Big Difference in the Lives of
                        Others.You may still donate blood, platelets or plasma
                        after receiving a COVID-19 vaccine. Knowing the name of
                        the manufacturer of the vaccine is important in
                        determining your blood donation eligibility. To learn
                        more about the COVID-19 vaccine and blood donation, Your
                        blood is precious, and your donations are truly
                        life-saving. From how donating works to who needs it,
                        there's so much to know about blood.
                     </Typography>
                     <Button
                        variant='outlined'
                        color='secondary'
                        sx={{ p: '.6rem 2rem' }}
                     >
                        Donate
                     </Button>
                  </Box>
               </Grid>
               <Grid
                  item
                  md={6}
                  sx={{
                     backgroundImage: `url(${doctorsImage})`,
                     backgroundSize: 'cover',
                     minWidth: 300,
                  }}
               >
                  {/* <img src={bloodImage} alt="blood" style={{maxWidth: '100%', height: 'auto', maxHeight: 320 }}/> */}
               </Grid>
            </Grid>
         </Container>
      </section>
   );
};

export default About;
