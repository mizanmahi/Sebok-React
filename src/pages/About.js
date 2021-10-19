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
                       Sebok Medicare has consistently led game-changing developments in healthcare by bringing to the people, the latest innovations in key medical specialities and superspecialities on par with the West. We highlight in this section some of the latest procedures, services and therapies that Sebok provides, in keeping with the tradition of providing outstanding healthcare of international standards.
                     </Typography>
                     <Button
                        variant='outlined'
                        color='secondary'
                        sx={{ p: '.6rem 2rem' }}
                     >
                        Know more
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
