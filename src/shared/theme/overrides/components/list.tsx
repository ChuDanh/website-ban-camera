import { Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------

export function list(theme: Theme) {
  return {
    MuiListItemAvatar: {
      styleOverrides: {
        root: {
          marginRight: theme.spacing(2),
          minWidth: 'auto',
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: 'inherit',
          marginRight: theme.spacing(2),
          minWidth: 'auto',
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        multiline: {
          margin: 0,
        },
        root: {
          margin: 0,
        },
      },
    },
  };
}
