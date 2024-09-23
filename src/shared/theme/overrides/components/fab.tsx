import { alpha, Theme } from '@mui/material/styles';
import { FabProps, fabClasses } from '@mui/material/Fab';

// ----------------------------------------------------------------------

const COLORS = ['primary', 'secondary', 'info', 'success', 'warning', 'error'] as const;

// NEW VARIANT
declare module '@mui/material/Fab' {
  interface FabPropsVariantOverrides {
    outlined: true;
    outlinedExtended: true;
    soft: true;
    softExtended: true;
  }
}

// ----------------------------------------------------------------------

export function fab(theme: Theme) {
  const lightMode = theme.palette.mode === 'light';

  const rootStyles = (ownerState: FabProps) => {
    const defaultColor = ownerState.color === 'default';

    const inheritColor = ownerState.color === 'inherit';

    const circularVariant = ownerState.variant === 'circular';

    const extendedVariant = ownerState.variant === 'extended';

    const outlinedVariant = ownerState.variant === 'outlined';

    const outlinedExtendedVariant = ownerState.variant === 'outlinedExtended';

    const softVariant = ownerState.variant === 'soft';

    const softExtendedVariant = ownerState.variant === 'softExtended';

    const defaultStyle = {
      '&:hover, &:active': {
        boxShadow: 'none',
      },
      // FILLED
      ...((circularVariant || extendedVariant) && {
        ...((defaultColor || inheritColor) && {
          boxShadow: theme.customShadows.z8,
        }),
        ...(inheritColor && {
          '&:hover': {
            backgroundColor: lightMode ? theme.palette.grey[700] : theme.palette.grey[400],
          },
          backgroundColor: theme.palette.text.primary,
          color: lightMode ? theme.palette.common.white : theme.palette.grey[800],
        }),
      }),
      // OUTLINED
      ...((outlinedVariant || outlinedExtendedVariant) && {
        backgroundColor: 'transparent',
        boxShadow: 'none',
        ...((defaultColor || inheritColor) && {
          border: `solid 1px ${alpha(theme.palette.grey[500], 0.32)}`,
        }),
        ...(defaultColor && {
          ...(!lightMode && {
            color: theme.palette.text.secondary,
          }),
        }),

        '&:hover': {
          backgroundColor: theme.palette.action.hover,
          borderColor: 'currentColor',
          boxShadow: '0 0 0 0.5px currentColor',
        },
      }),
      // SOFT
      ...((softVariant || softExtendedVariant) && {
        boxShadow: 'none',
        ...(defaultColor && {
          '&:hover': {
            backgroundColor: theme.palette.grey[400],
          },
          backgroundColor: theme.palette.grey[300],
          color: theme.palette.grey[800],
        }),
        ...(inheritColor && {
          '&:hover': {
            backgroundColor: alpha(theme.palette.grey[500], 0.24),
          },
          backgroundColor: alpha(theme.palette.grey[500], 0.08),
        }),
      }),
    };

    const colorStyle = COLORS.map((color) => ({
      ...(ownerState.color === color && {
        // FILLED
        ...((circularVariant || extendedVariant) && {
          '&:hover': {
            backgroundColor: theme.palette[color].dark,
          },
          boxShadow: theme.customShadows[color],
        }),
        // OUTLINED
        ...((outlinedVariant || outlinedExtendedVariant) && {
          '&:hover': {
            backgroundColor: alpha(theme.palette[color].main, 0.08),
          },
          border: `solid 1px ${alpha(theme.palette[color].main, 0.48)}`,
          color: theme.palette[color].main,
        }),
        // SOFT
        ...((softVariant || softExtendedVariant) && {
          '&:hover': {
            backgroundColor: alpha(theme.palette[color].main, 0.32),
          },
          backgroundColor: alpha(theme.palette[color].main, 0.16),
          color: theme.palette[color][lightMode ? 'dark' : 'light'],
        }),
      }),
    }));

    const disabledState = {
      [`&.${fabClasses.disabled}`]: {
        ...((outlinedVariant || outlinedExtendedVariant) && {
          backgroundColor: 'transparent',
          border: `solid 1px ${theme.palette.action.disabledBackground}`,
        }),
      },
    };

    const size = {
      ...((extendedVariant || outlinedExtendedVariant || softExtendedVariant) && {
        '& svg': {
          marginRight: theme.spacing(1),
        },
        width: 'auto',
        ...(ownerState.size === 'small' && {
          borderRadius: 17,
          height: 34,
          minHeight: 34,
          padding: theme.spacing(0, 1),
        }),
        ...(ownerState.size === 'medium' && {
          borderRadius: 20,
          height: 40,
          minHeight: 40,
          padding: theme.spacing(0, 2),
        }),
        ...(ownerState.size === 'large' && {
          borderRadius: 24,
          height: 48,
          minHeight: 48,
          padding: theme.spacing(0, 2),
        }),
      }),
    };

    return [defaultStyle, ...colorStyle, disabledState, size];
  };

  return {
    MuiFab: {
      styleOverrides: {
        root: ({ ownerState }: { ownerState: FabProps }) => rootStyles(ownerState),
      },
    },
  };
}
