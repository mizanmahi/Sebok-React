import React, { useEffect, useState } from 'react';
import { Container, Divider, Grid, Typography } from '@mui/material';
import { Box, styled } from '@mui/system';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const FooterSection = styled('footer')(({ theme }) => ({
   marginTop: '4rem',
   padding: '2rem 0',
   background: theme.palette.primary.main,
   color: '#fff',
}));

const Footer = () => {
   const [services, setServices] = useState([]);

   useEffect(() => {
      fetch('/services.json')
         .then((res) => res.json())
         .then((services) => setServices(services));
   }, []);

   return (
      <FooterSection>
         <Container maxWidth='xl'>
            <Grid container justifyContent='space-between' spacing={2}>
               <Grid item md={4}>
                  <Typography
                     variant='h3'
                     component={Link}
                     to='/'
                     sx={{ textDecoration: 'none', color: '#ffffff' }}
                  >
                     <LocalHospitalIcon fontSize='large' />
                     Sebok
                  </Typography>
                  <Typography variant='body1'>
                     Our medical specialists care about you & your family’s
                     health. We strive to improve the health of the nation. Hope
                     we gain this with you on our side
                  </Typography>
                  <Box
                     sx={{
                        mt: 2,
                        display: 'flex',
                        justifyContent: 'flex-start',
                     }}
                  >
                     <FacebookIcon sx={{ mr: 3 }} />
                     <InstagramIcon sx={{ mr: 3 }} />
                     <TwitterIcon sx={{ mr: 3 }} />
                  </Box>
               </Grid>
               <Grid item md={2} sx={{ textAlign: 'center' }}>
                  <Typography variant='h6' sx={{ mb: 3 }}>
                     Information
                  </Typography>
                  <Typography variant='body2' sx={{ fontWeight: 300 }}>
                     About us
                  </Typography>
                  <Typography variant='body2' sx={{ fontWeight: 300 }}>
                     How it works
                  </Typography>
                  <Typography variant='body2' sx={{ fontWeight: 300 }}>
                     Get a quote
                  </Typography>
                  <Typography variant='body2' sx={{ fontWeight: 300 }}>
                     How to donate
                  </Typography>
               </Grid>
               <Grid item md={2} sx={{ textAlign: 'center' }}>
                  <Typography variant='h6' sx={{ mb: 3 }}>
                     Services
                  </Typography>
                  {services.map((service) => (
                     <Typography key={service.id} variant='body2' sx={{ fontWeight: 300 }}>
                        {service.name}
                     </Typography>
                  ))}
               </Grid>
               <Grid item md={4} sx={{ textAlign: 'center' }}>
                  <Typography variant='h6' sx={{ mb: 3 }}>
                     Working Days
                  </Typography>
                  <Typography variant='body2' sx={{ fontWeight: 300 }}>
                     Sunday
                  </Typography>
                  <Typography variant='body2' sx={{ fontWeight: 300 }}>
                     Monday
                  </Typography>
                  <Typography variant='body2' sx={{ fontWeight: 300 }}>
                     Tuesday
                  </Typography>
                  <Typography variant='body2' sx={{ fontWeight: 300 }}>
                     Wednesday
                  </Typography>
                  <Typography variant='body2' sx={{ fontWeight: 300 }}>
                     Thursday
                  </Typography>
                  <Typography variant='body2' sx={{ fontWeight: 300 }}>
                     Friday
                  </Typography>
                  <Typography variant='body2' sx={{ fontWeight: 300 }}>
                     Saturday
                  </Typography>
               </Grid>
            </Grid>
            <Divider sx={{ my: 3 }}></Divider>
            <Typography align='center'>
               &copy; Copyright 2021, Mizan Mahi
            </Typography>
         </Container>
      </FooterSection>
   );
};

export default Footer;
