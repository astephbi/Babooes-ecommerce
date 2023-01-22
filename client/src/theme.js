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
    50: '#fef5fe',
    100: '#fcebfb',
    200: '#f8d6f6',
    300: '#f2b5ea',
    400: '#e989dc',
    500: '#da5bc8',
    600: '#bd3ca8',
    700: '#9c2f87',
    800: '#80286f',
    900: '#69265a',
  },
  neutral: {
    50: '#fef5fe',
    100: '#fcebfb',
    200: '#f8d6f6',
    300: '#f2b5ea',
    400: '#e989dc',
    500: '#da5bc8',
    600: '#bd3ca8',
    700: '#9c2f87',
    800: '#80286f',
    900: '#69265a',
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
    fontFamily: ['BasikW05-Book', 'sans-serif'].join(','),
    fontSize: 11,
  },
  h1: {
    fontFamily: ['BasikW05-Book', 'sans-serif'].join(','),
    fontSize: 48,
  },
  h2: {
    fontFamily: ['BasikW05-Book', 'sans-serif'].join(','),
    fontSize: 36,
  },
  h3: {
    fontFamily: ['BasikW05-Book', 'sans-serif'].join(','),
    fontSize: 20,
  },
  h4: {
    fontFamily: ['BasikW05-Book', 'sans-serif'].join(','),
    fontSize: 14,
  },
});
