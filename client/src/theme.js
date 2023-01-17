import { createTheme } from '@mui/material/styles';

export const shades = {
  primary: {
    50: '#f7f7f7',
    100: '#e3e3e3',
    200: '#c8c8c8',
    300: '#a4a4a4',
    400: '#818181',
    500: '#666666',
    600: '#515151',
    700: '#434343',
    800: '#383838',
    900: '#000000',
  },
  secondary: {
    50: '#fef1f8',
    100: '#fee5f2',
    200: '#ffcbe8',
    300: '#ffa1d2',
    400: '#ff67b3',
    500: '#fa3a94',
    600: '#eb176f',
    700: '#db0a5b',
    800: '#a90b47',
    900: '#8c0f3d',
  },
  neutral: {
    50: '#f8f8f8',
    100: '#f0f0f0',
    200: '#e5e3e3',
    300: '#cfcdcd',
    400: '#b6b3b3',
    500: '#9b9898',
    600: '#837f7f',
    700: '#6c6969',
    800: '#5b5959',
    900: '#4f4d4d',
  },
};

export const theme = createTheme({
  palette: {
    primary: {
      main: shades.primary[500],
    },
    secondary: {
      main: shades.secondary[500],
    },
    neutral: {
      main: shades.neutral[500],
      dark: shades.neutral[700],
      light: shades.neutral[100],
    },
  },
  typography: {
    fontFamily: ['Fauna One', 'sans-serif'].join(','),
    fontSize: 11,
  },
  h1: {
    fontFamily: ['Cinzel', 'sans-serif'].join(','),
    fontSize: 48,
  },
  h2: {
    fontFamily: ['Cinzel', 'sans-serif'].join(','),
    fontSize: 36,
  },
  h3: {
    fontFamily: ['Cinzel', 'sans-serif'].join(','),
    fontSize: 20,
  },
  h4: {
    fontFamily: ['Cinzel', 'sans-serif'].join(','),
    fontSize: 14,
  },
});
