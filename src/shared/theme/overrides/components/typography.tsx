import { Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------

export function typography(theme: Theme) {
  return {
    MuiTypography: {
      styleOverrides: {
        gutterBottom: {
          marginBottom: theme.spacing(1),
        },
        paragraph: {
          marginBottom: theme.spacing(2),
        },
      },
    },
  };
}
