import { Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------

export function select(theme: Theme) {
  return {
    MuiNativeSelect: {
      styleOverrides: {
        icon: {
          height: 18,
          right: 10,
          top: 'calc(50% - 9px)',
          width: 18,
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        icon: {
          height: 18,
          right: 10,
          top: 'calc(50% - 9px)',
          width: 18,
        },
      },
    },
  };
}
