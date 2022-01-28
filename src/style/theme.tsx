import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#F4F9FC',
    },
    secondary: {
      main: '#000000',
    },
    text: {
      primary: '#0F1B61',
      secondary: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: 'Montserrat',
    fontWeightBold: '500',
    h1: {
      fontWeight: 400,
    },
  },
});

export const logoPrimaryColor = '#A8BAFA';
export const logoSecondaryColor = '#DE9433';
