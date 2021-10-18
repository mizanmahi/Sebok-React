import { Divider, Typography } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';

const SectionHead = styled('div')(({ theme }) => ({
   textAlign: 'center',
   margin: '5rem 0',
}));

const SectionHeader = ({ heading, mainHeading }) => {
   return (
      <SectionHead>
         <Typography variant='body1' sx={{ fontWeight: 300 }}>
            {heading}
         </Typography>
         <Typography variant='h3' color='primary' sx={{ fontWeight: 600 }}>
            {mainHeading}
         </Typography>
         <Divider
            sx={{
               width: '50px',
               mx: 'auto',
               borderWidth: '3px',
               borderColor: 'rgba(23, 93, 254)',
            }}
         ></Divider>
      </SectionHead>
   );
};

export default SectionHeader;
