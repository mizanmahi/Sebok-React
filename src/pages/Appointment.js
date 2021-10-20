import {
   Button,
   Container,
   Grid,
   Paper,
   TextField,
   Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

import appointImage from '../images/appoint.jpg';

const Appointment = () => {
   return (
      <section>
         <Container maxWidth='xl'>
            <Paper
               sx={{
                  backgroundImage: `linear-gradient(to right, rgba(255,255,255,.7), rgba(255,255,255,.7)),url(${appointImage})`,
                  backgroundSize: 'cover',
                  p: 5,
                  mt: 5,
               }}
            >
               <Grid container spacing={2}>
                  <Grid
                     item
                     md={6}
                     sx={{ display: 'flex', alignItems: 'center' }}
                  >
                     <Box>
                        <Typography
                           variant='h4'
                           color='primary'
                           sx={{ mb: 3, fontWeight: 800 }}
                        >
                           We made your medical treatment easy!
                        </Typography>
                        <Typography
                           variant='body1'
                           component='span'
                           color='grey'
                        >
                           Get health care from the world's best medical
                           expertise who are from the all over the world. Who
                           consistently giving best health service.
                        </Typography>
                     </Box>
                  </Grid>
                  <Grid item md={6}>
                     <Paper sx={{ p: 5, borderRadius: '20px' }}>
                        <Typography
                           variant='h6'
                           component='h2'
                           mb={3}
                           sx={{ fontWeight: 600 }}
                           align='center'
                        >
                           Dhaka's #1 Medical Treatment Service Center.
                        </Typography>
                        <Box
                           component='form'
                           sx={{ display: 'flex', flexDirection: 'column' }}
                        >
                           <TextField
                              label='Patients name'
                              variant='outlined'
                              sx={{ mb: 2 }}
                              required
                           />
                           <TextField
                              label='Email'
                              variant='outlined'
                              sx={{ mb: 2 }}
                              required
                           />
                           <TextField
                              label='Phone number'
                              variant='outlined'
                              sx={{ mb: 1 }}
                              required
                           />
                           <TextField
                              label='Age'
                              variant='outlined'
                              sx={{ mb: 1 }}
                              required
                              type='number'
                           />
                           <Button
                              variant='contained'
                              color='primary'
                              sx={{ p: '.8rem' }}
                           >
                              Make an appointment
                           </Button>
                        </Box>
                     </Paper>
                  </Grid>
               </Grid>
            </Paper>
         </Container>
      </section>
   );
};

export default Appointment;
