import { Theme, alpha } from '@mui/material/styles';
import { AlertProps, alertClasses } from '@mui/material/Alert';

// ----------------------------------------------------------------------

const COLORS = ['info', 'success', 'warning', 'error'] as const;

// ----------------------------------------------------------------------

export function alert(theme: Theme) {
  const lightMode = theme.palette.mode === 'light';

  const rootStyles = (ownerState: AlertProps) => {
    const standardVariant = ownerState.variant === 'standard';

    const filledVariant = ownerState.variant === 'filled';

    const outlinedVariant = ownerState.variant === 'outlined';

    const colorStyle = COLORS.map((color) => ({
      ...(ownerState.severity === color && {
        // STANDARD
        ...(standardVariant && {
          [`& .${alertClasses.icon}`]: {
            color: theme.palette[color][lightMode ? 'main' : 'light'],
          },
          backgroundColor: theme.palette[color][lightMode ? 'lighter' : 'darker'],
          color: theme.palette[color][lightMode ? 'darker' : 'lighter'],
        }),
        // FILLED
        ...(filledVariant && {
          backgroundColor: theme.palette[color].main,
          color: theme.palette[color].contrastText,
        }),
        // OUTLINED
        ...(outlinedVariant && {
          [`& .${alertClasses.icon}`]: {
            color: theme.palette[color].main,
          },
          backgroundColor: alpha(theme.palette[color].main, 0.08),
          border: `solid 1px ${alpha(theme.palette[color].main, 0.16)}`,
          color: theme.palette[color][lightMode ? 'dark' : 'light'],
        }),
      }),
    }));

    return [...colorStyle];
  };

  return {
    MuiAlert: {
      styleOverrides: {
        icon: {
          opacity: 1,
        },
        root: ({ ownerState }: { ownerState: AlertProps }) => rootStyles(ownerState),
      },
    },
    MuiAlertTitle: {
      styleOverrides: {
        root: {
          fontWeight: theme.typography.fontWeightSemiBold,
          marginBottom: theme.spacing(0.5),
        },
      },
    },
  };
}
