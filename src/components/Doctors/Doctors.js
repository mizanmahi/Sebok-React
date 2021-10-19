import {
   Button,
   Card,
   CardActions,
   CardContent,
   CardMedia,
   Container,
   Grid,
   Typography,
} from '@mui/material';
import React from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';

const Doctors = () => {
   return (
      <section>
         <Container maxWidth='xl'>
            <SectionHeader
               heading='MEET OUR DOCTORS'
               mainHeading='Professional & Enthusiastic'
            />

            <Grid container justifyContent='center' spacing={6}>
               <Grid item md={4} lg={3}>
                  <Card sx={{ mb: 2 }}>
                     <CardMedia
                        component='img'
                        height='240'
                        image='https://fs.hubspotusercontent00.net/hubfs/19899805/raw_assets/public/hope/images/team/02.jpg'
                        alt='green iguana'
                     />
                     <CardContent>
                        <Typography gutterBottom variant='h5' component='div'>
                           Dr. Robert David
                        </Typography>
                        <Typography variant='body2' color='text.secondary'>
                           MBBS (Dhaka), MRCP (UK), FCCP (USA), FCPS (BD), FRCP
                           (Glasgow), FRCP (Edin), FACC (USA), Chardiac
                           specialist from Canada.
                        </Typography>
                     </CardContent>
                     <CardActions>
                        <Button size='small'>President</Button>
                     </CardActions>
                  </Card>
               </Grid>
               <Grid item md={4} lg={3}>
                  <Card sx={{ mb: 2 }}>
                     <CardMedia
                        component='img'
                        height='240'
                        image='https://fs.hubspotusercontent00.net/hubfs/19899805/raw_assets/public/hope/images/team/01.jpg'
                        alt='green iguana'
                     />
                     <CardContent>
                        <Typography gutterBottom variant='h5' component='div'>
                           Dr. Helen Willmore
                        </Typography>
                        <Typography variant='body2' color='text.secondary'>
                           M.B.B.S: London Medical College, September 1984, 7th
                           Position in third Professional M.B.B.S. & 6th
                           Position in Final M.B.B.S.
                        </Typography>
                     </CardContent>
                     <CardActions>
                        <Button size='small'>Secretary</Button>
                     </CardActions>
                  </Card>
               </Grid>
               <Grid item md={4} lg={3}>
                  <Card sx={{ mb: 2 }}>
                     <CardMedia
                        component='img'
                        height='240'
                        image='https://fs.hubspotusercontent00.net/hubfs/19899805/raw_assets/public/hope/images/team/03.jpg'
                        alt='green iguana'
                     />
                     <CardContent>
                        <Typography gutterBottom variant='h5' component='div'>
                           Dr. Kristina Castle
                        </Typography>
                        <Typography variant='body2' color='text.secondary'>
                           MBBS (DMU), FCPS (Surgery) MD (USA), FCVS (USA),
                           Advance Fellowship in Cardiovascular Surgery
                           (Mayoclinic, USA)
                        </Typography>
                     </CardContent>
                     <CardActions>
                        <Button size='small'>Senior Consultant</Button>
                     </CardActions>
                  </Card>
               </Grid>
            </Grid>
         </Container>
      </section>
   );
};

export default Doctors;
