import { Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------

export function svgIcon(theme: Theme) {
  return {
    MuiSvgIcon: {
      styleOverrides: {
        fontSizeLarge: {
          fontSize: 'inherit',
          height: 32,
          width: 32,
        },
      },
    },
  };
}
