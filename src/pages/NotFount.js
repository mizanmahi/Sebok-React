import { Button, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import MoodBadIcon from '@mui/icons-material/MoodBad';
import { useHistory } from 'react-router';

const NotFount = () => {
   const history = useHistory();
   const backtoHomeHandler = () => {
      history.push('/');
   };

   const backHandler = () => {
      history.goBack();
   };
   return (
      <section>
         <Container>
            <div
               style={{
                  height: '50vh',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
               }}
            >
               <Typography variant='h4' color='error' align='center'>
                  404 | Page not found <MoodBadIcon />
               </Typography>
               <Box sx={{ mt: 5 }}>
                  <Button
                     variant='outlined'
                     sx={{ mr: 2 }}
                     onClick={backtoHomeHandler}
                  >
                     Back To Home
                  </Button>
                  <Button variant='outlined' onClick={backHandler}>
                     Go Back
                  </Button>
               </Box>
            </div>
         </Container>
      </section>
   );
};

export default NotFount;
