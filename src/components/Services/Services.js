import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';

const Services = () => {
   const [services, setServices] = useState();

   useEffect(() => {
      fetch('./services.json')
         .then((res) => res.json())
         .then((services) => setServices(services));
   }, []);

   return (
      <section>
         <Container maxWidth='xl'>
            <SectionHeader
               heading='We care about patient'
               mainHeading='Our Outstanding Services'
            />
            <Grid container spacing={2}>
              
            </Grid>
         </Container>
      </section>
   );
};

export default Services;
