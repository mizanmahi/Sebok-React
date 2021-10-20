import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import SendIcon from '@mui/icons-material/Send';
import newsLetterImage from '../../images/newsletter.svg'

const Newsletter = () => {
   return (
      <Box sx={{ margin: '7rem 0' }}>
         <Container maxWidth='xl'>
            <Grid
               container
               spacing={2}
               sx={{ background: '#f7f7f7', p: '2rem 1rem' }}
               alignItems='center'
            >
               <Grid item md={7}>
                  <Box>
                     <Typography
                        variant='h3'
                        color='primary'
                        sx={{ fontWeight: 600 }}
                     >
                        Don't miss any update
                     </Typography>
                     <Typography variant='body1' color='grey' my={4}>
                        Subscribe to Sebok's newsletter to get exclusive health
                        care offers, latest news and updates.
                     </Typography>
                     <Box>
                        <TextField
                           variant='outlined'
                           placeholder='Email address'
                           sx={{mb: 1}}
                        />
                        <Button
                           variant='contained'
                           color='primary'
                           sx={{ p: '.9rem 1.7rem', ml: 1, }}
                        >
                           Send &nbsp;
                           <SendIcon />
                        </Button>
                     </Box>
                  </Box>
               </Grid>
               <Grid item md={5}>
                   <img src={newsLetterImage} alt="mail svg" style={{maxWidth: '100%'}} />
               </Grid>
            </Grid>
         </Container>
      </Box>
   );
};

export default Newsletter;
