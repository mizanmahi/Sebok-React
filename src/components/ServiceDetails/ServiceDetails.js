import { Button, Container, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {
   const [service, setService] = useState(null);

   const { serviceId } = useParams();

   useEffect(() => {
      fetch('/services.json')
         .then((res) => res.json())
         .then((services) => {
            const newService = services.find(
               (service) => service.id === parseInt(serviceId)
            );
            console.log(newService);
            setService(newService);
         });
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
               <Grid item md={10} mt={15}>
                  <Paper>
                     <Grid container>
                        <Grid item sm={6} md={5}>
                           <Box
                              sx={{
                                 minHeight: '400px',
                                 backgroundImage: `url(${service.imageUrl})`,
                                 backgroundSize: 'cover',
                                 display: 'flex',
                                 justifyContent: 'center',
                                 alignItems: 'center',
                              }}
                           >
                              <img
                                 src={service.imageUrl}
                                 alt=''
                                 style={{
                                    maxWidth: '100%',
                                    alignSelf: 'center',
                                 }}
                              />
                           </Box>
                        </Grid>
                        <Grid item sm={6} md={7} alignSelf='center'>
                           <Box p={5}>
                              <Typography
                                 variant='h4'
                                 color='primary'
                                 sx={{ fontWeight: '600' }}
                              >
                                 {service.name}
                              </Typography>
                              <Typography
                                 variant='body1'
                                 sx={{ fontWeight: '400', my: 3 }}
                                 color='gray'
                              >
                                 {service.description}
                              </Typography>
                              <Button variant='outlined' sx={{ py: 2, px: 5 }}>
                                 Get this Service
                              </Button>
                           </Box>
                        </Grid>
                     </Grid>
                  </Paper>
               </Grid>
            </Grid>
         )}
      </Container>
   );
};

export default ServiceDetails;
