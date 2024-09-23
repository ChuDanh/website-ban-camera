import { Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------

export function cssBaseline(theme: Theme) {
  return {
    MuiCssBaseline: {
      styleOverrides: {
        '#root, #__next': {
          height: '100%',
          width: '100%',
        },
        '*': {
          boxSizing: 'border-box',
        },
        body: {
          height: '100%',
          margin: 0,
          padding: 0,
          width: '100%',
        },
        html: {
          WebkitOverflowScrolling: 'touch',
          height: '100%',
          margin: 0,
          padding: 0,
          width: '100%',
        },
        img: {
          display: 'inline-block',
          maxWidth: '100%',
          verticalAlign: 'bottom',
        },
        input: {
          '&[type=number]': {
            '&::-webkit-inner-spin-button': {
              WebkitAppearance: 'none',
              margin: 0,
            },
            '&::-webkit-outer-spin-button': {
              WebkitAppearance: 'none',
              margin: 0,
            },
            MozAppearance: 'textfield',
          },
        },
      },
    },
  };
}
