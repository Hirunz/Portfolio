/* 
Theme generated using https://zenoo.github.io/mui-theme-creator/#Badge
*/
import React from 'react';
import { ThemeOptions, createTheme } from '@mui/material/styles';

export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#0a9d90',
    },
    secondary: {
      main: '#087f90',
    },
    background: {
      default: '#100e17',
      paper: '#100e17',
    },
    error: {
      main: '#a4332b',
    },
    warning: {
      main: '#e2a03f',
    },
    info: {
      main: '#692ac1',
    },
    success: {
      main: '#26852b',
    },
  },
  spacing: 8,
  shape: {
    borderRadius: 8,
  },
  typography: {
    h1: {
      fontFamily: 'Noto Sans',
      fontSize: '6.1rem',
    },
    h2: {
      fontFamily: 'Noto Sans',
    },
    h3: {
      fontFamily: 'Noto Sans',
    },
    h4: {
      fontFamily: 'Noto Sans',
    },
    h5: {
      fontFamily: 'Noto Sans',
    },
    h6: {
      fontFamily: 'Noto Sans',
    },
    body1: {
      fontFamily: 'Noto Sans',
    },
    body2: {
      fontFamily: 'Inconsolata',
    },
    button: {
      fontFamily: 'Noto Sans',
    },
    caption: {
      fontFamily: 'Inconsolata',
    },
    overline: {
      fontFamily: 'Inconsolata',
    },
    subtitle1: {
      fontFamily: 'Inconsolata',
    },
    subtitle2: {
      fontFamily: 'Noto Sans',
    },
  },
};

export const Theme = createTheme(themeOptions);
