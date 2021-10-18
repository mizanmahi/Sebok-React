import { Button, Container, Typography } from '@mui/material';
import { Box, styled } from '@mui/system';
import React from 'react';

import IntroImage from '../../images/intro.jpg';

const Intro = () => {
   const Intro = styled('section')({
      backgroundImage: `linear-gradient(to right, rgba(0, 0, 50, 0.5), rgba(23, 93, 254, 0.4)) , url(${IntroImage})`,
      height: '90vh',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
   });

   const IntroDetails = styled('div')({
      height: '800px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
   });

   return (
      <Intro>
         <Container maxWidth='xl'>
            <IntroDetails>
               <Box>
                  <Typography variant='h6' color='secondary'>
                     The Best Medical Service
                  </Typography>
                  <Typography
                     variant='h2'
                     color='secondary'
                     sx={{ fontWeight: 800, mt: 2, mb: 1 }}
                  >
                     Bringing Health
                  </Typography>
                  <Typography
                     variant='h2'
                     color='secondary'
                     sx={{ fontWeight: 300, mb: 2 }}
                  >
                     To life for the whole family
                  </Typography>
                  <Button
                     variant='outlined'
                     color='secondary'
                     sx={{
                        py: 2,
                        px: 5,
                        border: '1px solid #fff',
                        '&:hover': {
                           color: 'rgba(23, 93, 254)',
                           background: '#fff',
                        },
                     }}
                  >
                     Learn More
                  </Button>
               </Box>
            </IntroDetails>
         </Container>
      </Intro>
   );
};

export default Intro;

