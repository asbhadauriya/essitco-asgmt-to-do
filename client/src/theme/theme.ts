'use client'
import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    customProperty: string;
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    customProperty?: string;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#2196f3',
      light:'#C61C66', // Change primary color
      dark:'#9A1951',
    },
    secondary: {
      main: '#f50057',
      light:'#F3F3F3',
      A100:'blue',
      dark:'#2A2F42'
      
      // Change secondary color
      // Change secondary color
    },
    background:{
      default:'#F1F3F6',
    },
    error:{
      main:'#F01807',
      light:'#FEE2E0'
    },
    warning:{
      main:'#F3A72E',
      light:'FFF6E0'
    },
    success:{
      main: '#2Fa84F', // Example light shade for success
      light: '#DCF7E3',  // Example dark shade for success
      // primary:'#2Fa84F',
    },
    text:{
      primary: '#000000', // Example color for primary text
      secondary: '#5F5F5F',

    },
    
    
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#C61C66',
          textDecoration:'none'
          // Add other link styles here
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          border: 'none', // Remove border from all labels
        },
      },
    },
    MuiButton: {
      styleOverrides: {
          root: {
            fontFamily: 'Poppins',
            background: '#C61C66',
          },
          text:{
            background:'transparent'
          },
          contained: {
            background: 'primary',
            color: '#FFF',
            '&:hover': {
              background: '#9F0D4B',
              // Add other hover styles for contained variant here
            },
            // Add other styles for contained variant here
          },
          outlined: {
            // border: '2px solid #C61C66',
            background:'transparent',
            color: '#C61C66',
            '&:hover': {
              border: '2px solid #9F0D4B',
              // Add other hover styles for outlined variant here
            },
            // Add other styles for outlined variant here
          },
        
      },
    },
  },
  typography: {
   
    fontFamily: 'Poppins', // Change default font.
    htmlFontSize: 16,
    body1:{
      fontFamily: 'Poppins',
    },
    h1:{
      fontFamily: 'Poppins',
      fontSize: '26px',
      fontWeight: 600,
      lineHeight: '31.2px',
      letterSpacing: '0em',
      textAlign: 'center',
    },
    h2: {
      fontFamily: 'Poppins',
      fontSize: '70px',
      fontWeight: 700,
      lineHeight: '80px',
      letterSpacing: '0em',
    },
    h3: {
      fontFamily: 'Poppins',
      fontSize: '15px',
      fontWeight: 600,
      lineHeight: '14.4px',
      letterSpacing: '0em',
      textAlign: 'left',
    },
    h5: {
      fontFamily: 'Poppins',
      fontSize: '40px',
      fontWeight: 600,
      lineHeight: '60px',
      letterSpacing: '0em',
      textAlign: 'left',
    },
    h4: {
      fontFamily: 'Inter',
      fontSize: '26px',
      fontWeight: 700,
      lineHeight: '31.2px',
      letterSpacing: '0em',
      textAlign: 'left',
    },
    subtitle1:{
      fontFamily: 'Poppins',

      fontSize:'14px',
      fontWeight:500,
      textAlign: 'left',
    }
  },
  customProperty: 'value', // Add custom property
});


export default theme;
