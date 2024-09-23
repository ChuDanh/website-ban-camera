import { Theme } from '@mui/material/styles';
import { listClasses } from '@mui/material/List';
//
import { paper } from '../../css';

// ----------------------------------------------------------------------

export function popover(theme: Theme) {
  return {
    MuiPopover: {
      styleOverrides: {
        paper: {
          ...paper({ dropdown: true, theme }),
          [`& .${listClasses.root}`]: {
            paddingBottom: 0,
            paddingTop: 0,
          },
        },
      },
    },
  };
}
