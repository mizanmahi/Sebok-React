import {
   Card,
   CardContent,
   CardMedia,
   Container,
   Grid,
   IconButton,
   Paper,
   Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {
   const [service, setService] = useState(null);

   const { serviceId } = useParams();

   useEffect(() => {
      fetch('/services.json')
         .then((res) => res.json())
         .then((services) =>
            setService(
               services.find((service) => service.id === parseInt(serviceId))
            )
         );
   }, []);

   useEffect(() => {
      console.log(service);
   }, []);

   return (
      <Container>
         {service && (
            <Grid
               container
               justifyContent='center'
               alignItems='center'
               height='60vh'
            >
               <Grid item md={10}>
                  <Paper>
                      <Box></Box>
                      <Box></Box>
                  </Paper>
               </Grid>
            </Grid>
         )}
      </Container>
   );
};

export default ServiceDetails;
