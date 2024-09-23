import { alpha, Theme } from '@mui/material/styles';
import { ChipProps, chipClasses } from '@mui/material/Chip';

// ----------------------------------------------------------------------

const COLORS = ['primary', 'secondary', 'info', 'success', 'warning', 'error'] as const;

// NEW VARIANT
declare module '@mui/material/Chip' {
  interface ChipPropsVariantOverrides {
    soft: true;
  }
}

// ----------------------------------------------------------------------

export function chip(theme: Theme) {
  const lightMode = theme.palette.mode === 'light';

  const rootStyles = (ownerState: ChipProps) => {
    const defaultColor = ownerState.color === 'default';

    const filledVariant = ownerState.variant === 'filled';

    const outlinedVariant = ownerState.variant === 'outlined';

    const softVariant = ownerState.variant === 'soft';

    const defaultStyle = {
      [`& .${chipClasses.deleteIcon}`]: {
        '&:hover': {
          color: 'currentColor',
          opacity: 1,
        },
        color: 'currentColor',
        opacity: 0.48,
      },

      ...(defaultColor && {
        [`& .${chipClasses.avatar}`]: {
          color: theme.palette.text.primary,
        },
        // FILLED
        ...(filledVariant && {
          '&:hover': {
            backgroundColor: lightMode ? theme.palette.grey[700] : theme.palette.grey[100],
          },
          [`& .${chipClasses.icon}`]: {
            color: lightMode ? theme.palette.common.white : theme.palette.grey[800],
          },
          backgroundColor: theme.palette.text.primary,
          color: lightMode ? theme.palette.common.white : theme.palette.grey[800],
        }),
        // OUTLINED
        ...(outlinedVariant && {
          border: `solid 1px ${alpha(theme.palette.grey[500], 0.32)}`,
        }),
        // SOFT
        ...(softVariant && {
          '&:hover': {
            backgroundColor: alpha(theme.palette.grey[500], 0.32),
          },
          backgroundColor: alpha(theme.palette.grey[500], 0.16),
          color: theme.palette.text.primary,
        }),
      }),
    };

    const colorStyle = COLORS.map((color) => ({
      ...(ownerState.color === color && {
        [`& .${chipClasses.avatar}`]: {
          backgroundColor: theme.palette[color].dark,
          color: theme.palette[color].lighter,
        },
        // SOFT
        ...(softVariant && {
          '&:hover': {
            backgroundColor: alpha(theme.palette[color].main, 0.32),
          },
          backgroundColor: alpha(theme.palette[color].main, 0.16),
          color: theme.palette[color][lightMode ? 'dark' : 'light'],
        }),
      }),
    }));

    const disabledState = {
      [`&.${chipClasses.disabled}`]: {
        [`& .${chipClasses.avatar}`]: {
          backgroundColor: theme.palette.action.disabledBackground,
          color: theme.palette.action.disabled,
        },
        [`& .${chipClasses.icon}`]: {
          color: theme.palette.action.disabled,
        },
        color: theme.palette.action.disabled,
        opacity: 1,
        // FILLED
        ...(filledVariant && {
          backgroundColor: theme.palette.action.disabledBackground,
        }),
        // OUTLINED
        ...(outlinedVariant && {
          borderColor: theme.palette.action.disabledBackground,
        }),
        // SOFT
        ...(softVariant && {
          backgroundColor: theme.palette.action.disabledBackground,
        }),
      },
    };

    return [
      defaultStyle,
      ...colorStyle,
      disabledState,
      {
        borderRadius: theme.shape.borderRadius,
        fontWeight: 500,
      },
    ];
  };

  return {
    MuiChip: {
      styleOverrides: {
        root: ({ ownerState }: { ownerState: ChipProps }) => rootStyles(ownerState),
      },
    },
  };
}
