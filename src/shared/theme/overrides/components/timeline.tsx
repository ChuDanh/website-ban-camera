import { Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------

export function timeline(theme: Theme) {
  return {
    MuiTimelineConnector: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.divider,
        },
      },
    },
    MuiTimelineDot: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },
      },
    },
  };
}
