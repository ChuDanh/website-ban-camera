import { Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------

export function treeView(theme: Theme) {
  return {
    MuiTreeItem: {
      styleOverrides: {
        iconContainer: {
          width: 'auto',
        },
        label: {
          ...theme.typography.body2,
        },
      },
    },
  };
}
