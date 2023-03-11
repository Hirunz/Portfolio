/* 
Theme generated using https://zenoo.github.io/mui-theme-creator/#Badge
*/
import React from 'react';
import { ThemeOptions, createTheme } from '@mui/material/styles';
import ThemeColors from './Colours';

export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: ThemeColors.primary,
    },
    secondary: {
      main: ThemeColors.secondary,
    },
    background: {
      default: ThemeColors.background,
      paper: ThemeColors.background,
    },
    error: {
      main: ThemeColors.error,
    },
    warning: {
      main: ThemeColors.warning,
    },
    info: {
      main: ThemeColors.info,
    },
    success: {
      main: ThemeColors.success,
    },
  },
  spacing: 8,
  shape: {
    borderRadius: 8,
  },
  typography: {
    h1: {
      fontFamily: "'Baloo 2'",
      fontSize: '6.1rem',
    },
    h2: {
      fontFamily: "'Baloo 2'",
    },
    h3: {
      fontFamily: "'Baloo 2'",
    },
    h4: {
      fontFamily: "'Baloo 2'",
      fontSize: '2.3rem',
    },
    h5: {
      fontFamily: "'Baloo 2'",
    },
    h6: {
      fontFamily: "'Baloo 2'",
    },
    body1: {
      fontFamily: "'Baloo 2'",
      fontSize: '1.2rem',
    },
    body2: {
      fontFamily: 'Inconsolata',
    },
    button: {
      fontFamily: "'Baloo 2'",
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
      fontFamily: "'Baloo 2'",
    },
  },
};

export const Theme = createTheme(themeOptions);
