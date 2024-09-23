import { Theme, alpha } from '@mui/material/styles';
import { ToggleButtonProps, toggleButtonClasses } from '@mui/material/ToggleButton';

// ----------------------------------------------------------------------

const COLORS = ['primary', 'secondary', 'info', 'success', 'warning', 'error'] as const;

// ----------------------------------------------------------------------

export function toggleButton(theme: Theme) {
  const rootStyles = (ownerState: ToggleButtonProps) => {
    const defaultStyle = {
      [`&.${toggleButtonClasses.selected}`]: {
        borderColor: 'currentColor',
        boxShadow: '0 0 0 0.5px currentColor',
      },
    };

    const colorStyle = COLORS.map((color) => ({
      ...(ownerState.color === color && {
        '&:hover': {
          backgroundColor: alpha(theme.palette[color].main, theme.palette.action.hoverOpacity),
          borderColor: alpha(theme.palette[color].main, 0.48),
        },
      }),
    }));

    const disabledState = {
      [`&.${toggleButtonClasses.disabled}`]: {
        [`&.${toggleButtonClasses.selected}`]: {
          backgroundColor: theme.palette.action.selected,
          borderColor: theme.palette.action.disabledBackground,
          color: theme.palette.action.disabled,
        },
      },
    };

    return [defaultStyle, ...colorStyle, disabledState];
  };

  return {
    MuiToggleButton: {
      styleOverrides: {
        root: ({ ownerState }: { ownerState: ToggleButtonProps }) => rootStyles(ownerState),
      },
    },
    MuiToggleButtonGroup: {
      styleOverrides: {
        grouped: {
          '&:not(:first-of-type), &:not(:last-of-type)': {
            borderColor: 'transparent',
            borderRadius: theme.shape.borderRadius,
          },
          [`&.${toggleButtonClasses.selected}`]: {
            boxShadow: 'none',
          },
          margin: 4,
        },
        root: {
          backgroundColor: theme.palette.background.paper,
          border: `solid 1px ${alpha(theme.palette.grey[500], 0.08)}`,
          borderRadius: theme.shape.borderRadius,
        },
      },
    },
  };
}
