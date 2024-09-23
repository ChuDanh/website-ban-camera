import { Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------

export function breadcrumbs(theme: Theme) {
  return {
    MuiBreadcrumbs: {
      styleOverrides: {
        li: {
          '& > *': {
            ...theme.typography.body2,
          },
          display: 'inline-flex',
          margin: theme.spacing(0.25, 0),
        },
        separator: {
          marginLeft: theme.spacing(2),
          marginRight: theme.spacing(2),
        },
      },
    },
  };
}
