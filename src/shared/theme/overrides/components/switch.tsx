import { Theme, alpha } from '@mui/material/styles';
import { SwitchProps, switchClasses } from '@mui/material/Switch';

// ----------------------------------------------------------------------

export function switches(theme: Theme) {
  const lightMode = theme.palette.mode === 'light';

  const rootStyles = (ownerState: SwitchProps) => ({
    height: 38,
    padding: '9px 13px 9px 12px',
    width: 58,
    ...(ownerState.size === 'small' && {
      height: 24,
      padding: '4px 8px 4px 7px',
      width: 40,
    }),
    [`& .${switchClasses.switchBase}`]: {
      left: 3,
      padding: 12,
      ...(ownerState.size === 'small' && {
        padding: 7,
      }),
      [`&.${switchClasses.checked}`]: {
        [`&+.${switchClasses.track}`]: {
          opacity: 1,
        },
        transform: 'translateX(13px)',
        ...(ownerState.size === 'small' && {
          transform: 'translateX(9px)',
        }),
      },
      [`&.${switchClasses.disabled}`]: {
        [`& .${switchClasses.thumb}`]: {
          opacity: lightMode ? 1 : 0.48,
        },
        [`&+.${switchClasses.track}`]: {
          opacity: 0.48,
        },
      },
    },
    [`& .${switchClasses.thumb}`]: {
      boxShadow: 'none',
      color: theme.palette.common.white,
      height: 14,
      width: 14,
      ...(ownerState.size === 'small' && {
        height: 10,
        width: 10,
      }),
    },
    [`& .${switchClasses.track}`]: {
      backgroundColor: alpha(theme.palette.grey[500], 0.48),
      borderRadius: 14,
      opacity: 1,
    },
  });

  return {
    MuiSwitch: {
      styleOverrides: {
        root: ({ ownerState }: { ownerState: SwitchProps }) => rootStyles(ownerState),
      },
    },
  };
}
