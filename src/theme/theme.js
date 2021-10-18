import { createTheme } from '@mui/material';

export const theme = createTheme({
    palette: {
       primary: {
          main: 'rgba(23, 93, 254, 0.85)',
       },
       secondary: {
           main: '#ffffff'
       },
       warning: {
           main: '#AB0520'
       }
    },
    typography: {
       fontFamily: 'Poppins, sans-serif',
    },
    breakpoints: {
       values: {
          xs: 0,
          sm: 600,
          md: 900,
          lg: 1200,
          xl: 1440,
       },
    },
 });