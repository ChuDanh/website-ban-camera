import { Theme } from '@mui/material/styles';
import { DialogProps } from '@mui/material/Dialog';

// ----------------------------------------------------------------------

export function dialog(theme: Theme) {
  return {
    MuiDialog: {
      styleOverrides: {
        paper: ({ ownerState }: { ownerState: DialogProps }) => ({
          borderRadius: theme.shape.borderRadius * 2,
          boxShadow: theme.customShadows.dialog,
          ...(!ownerState.fullScreen && {
            margin: theme.spacing(2),
          }),
        }),
        paperFullScreen: {
          borderRadius: 0,
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          '& > :not(:first-of-type)': {
            marginLeft: theme.spacing(1.5),
          },
          padding: theme.spacing(3),
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        dividers: {
          borderBottomStyle: 'dashed',
          borderTop: 0,
          paddingBottom: theme.spacing(3),
        },
        root: {
          padding: theme.spacing(0, 3),
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          padding: theme.spacing(3),
        },
      },
    },
  };
}
