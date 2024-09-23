import { alpha, Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------

export function backdrop(theme: Theme) {
  return {
    MuiBackdrop: {
      styleOverrides: {
        invisible: {
          background: 'transparent',
        },
        root: {
          backgroundColor: alpha(theme.palette.grey[900], 0.8),
        },
      },
    },
  };
}
