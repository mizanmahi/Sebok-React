import {
   Button,
   Card,
   CardActions,
   CardContent,
   CardMedia,
   Grid,
   Typography,
} from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router';

const Service = ({ service }) => {
    const {name, imageUrl, description, id} = service;
    
    const history = useHistory()

   return (
      <Grid item lg='4'>
         <Card sx={{ maxWidth: 420, cursor: 'pointer', '&:hover': {'& img': {transform: 'scale(1.02)', transition: 'all .5s'}} }}>
            <CardMedia
               component='img'
               height='450'
               image={imageUrl}
               alt='green iguana'
            />
            <CardContent>
               <Typography gutterBottom variant='h5' component='div'>
                  {name}
               </Typography>
               <Typography variant='body2' color='text.secondary'>
                 {description.slice(0,150)}
               </Typography>
            </CardContent>
            <CardActions sx={{p: 2}}>
               {/* <Button size='small' variant='outlined' >Share</Button> */}
               <Button size='small' variant='outlined' onClick={() => history.push(`/service/${id}`)}>Learn More</Button>
            </CardActions>
         </Card>
      </Grid>
   );
};

export default Service;
