import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

export type ColorSchema = 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error';

declare module '@mui/material/styles/createPalette' {
  interface TypeBackground {
    neutral: string;
  }

  interface SimplePaletteColorOptions {
    lighter: string;
    darker: string;
  }

  interface PaletteColor {
    lighter: string;
    darker: string;
  }
}

// SETUP COLORS

const GREY = {
  0: '#fff',
  100: '#f9fafb',
  200: '#f4f6f8',
  300: '#dfe3e8',
  400: '#c4cdd5',
  500: '#919eab',
  600: '#637381',
  700: '#454f5b',
  800: '#212b36',
  900: '#161c24',
};

const PRIMARY = {
  contrastText: '#fff',
  dark: '#885920',
  darker: '#5a310c',
  light: '#ebcf8d',
  lighter: '#fbf4da',
  main: '#bd8e40',
};

const SECONDARY = {
  contrastText: '#fff',
  dark: '#5119b7',
  darker: '#27097a',
  light: '#c684ff',
  lighter: '#efd6ff',
  main: '#8e33ff',
};

const INFO = {
  contrastText: '#fff',
  dark: '#006c9c',
  darker: '#003768',
  light: '#61f3f3',
  lighter: '#cafdf5',
  main: '#00b8d9',
};

const SUCCESS = {
  contrastText: '#fff',
  dark: '#118d57',
  darker: '#065e49',
  light: '#77ed8b',
  lighter: '#d3fcd2',
  main: '#22c55e',
};

const WARNING = {
  contrastText: GREY[800],
  dark: '#b76e00',
  darker: '#7a4100',
  light: '#ffd666',
  lighter: '#fff5cc',
  main: '#ffab00',
};

const ERROR = {
  contrastText: '#fff',
  dark: '#b71d18',
  darker: '#7a0916',
  light: '#ffac82',
  lighter: '#ffe9d5',
  main: '#ff5630',
};

const TEXT = {
  link: '#1877F2',
  brand: '#BC8C43',
};

const COMMON = {
  action: {
    disabled: alpha(GREY[500], 0.8),
    disabledBackground: alpha(GREY[500], 0.24),
    disabledOpacity: 0.48,
    focus: alpha(GREY[500], 0.24),
    hover: alpha(GREY[500], 0.08),
    hoverOpacity: 0.08,
    selected: alpha(GREY[500], 0.16),
  },
  common: {
    black: '#000',
    white: '#fff',
  },
  divider: alpha(GREY[500], 0.2),
  error: ERROR,
  grey: GREY,
  info: INFO,
  primary: PRIMARY,
  secondary: SECONDARY,
  success: SUCCESS,
  warning: WARNING,
};

function palette(mode: 'light' | 'dark') {
  const light = {
    ...COMMON,
    action: {
      ...COMMON.action,
      active: GREY[600],
    },
    background: {
      default: '#fff',
      neutral: GREY[200],
      paper: '#fff',
    },
    mode: 'light',
    text: {
      disabled: GREY[500],
      error: ERROR.main,
      primary: GREY[800],
      secondary: GREY[600],
      success: SUCCESS.light,
      info: INFO.light,
      warning: WARNING.light,
      link: TEXT.link,
    },
  };

  const dark = {
    ...COMMON,
    action: {
      ...COMMON.action,
      active: GREY[500],
    },
    background: {
      default: GREY[900],
      neutral: alpha(GREY[500], 0.12),
      paper: GREY[800],
    },
    mode: 'dark',
    text: {
      disabled: GREY[600],
      error: ERROR.main,
      primary: '#fff',
      secondary: GREY[500],
      success: SUCCESS.light,
      info: INFO.light,
      warning: WARNING.light,
      link: TEXT.link,
    },
  };

  return mode === 'light' ? light : dark;
}

export { COMMON, palette };
