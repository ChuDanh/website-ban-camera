import { Theme } from '@mui/material/styles';
import { BadgeProps, badgeClasses } from '@mui/material/Badge';

// ----------------------------------------------------------------------

// NEW VARIANT
declare module '@mui/material/Badge' {
  interface BadgePropsVariantOverrides {
    alway: true;
    busy: true;
    online: true;
    offline: true;
    invisible: true;
  }
}

export function badge(theme: Theme) {
  return {
    MuiBadge: {
      styleOverrides: {
        dot: {
          borderRadius: '50%',
        },
        root: ({ ownerState }: { ownerState: BadgeProps }) => {
          const alway = ownerState.variant === 'alway';

          const online = ownerState.variant === 'online';

          const busy = ownerState.variant === 'busy';

          const offline = ownerState.variant === 'offline';

          const invisible = ownerState.variant === 'invisible';

          const baseStyles = {
            '&:before, &:after': {
              backgroundColor: theme.palette.common.white,
              borderRadius: 1,
              content: "''",
            },
            [`&.${badgeClasses.invisible}`]: {
              transform: 'unset',
            },
            height: 10,
            minWidth: 'auto',
            padding: 0,
            width: 10,
            zIndex: 9,
          };

          return {
            ...(online && {
              [`& .${badgeClasses.badge}`]: {
                ...baseStyles,
                backgroundColor: theme.palette.success.main,
              },
            }),
            ...(busy && {
              [`& .${badgeClasses.badge}`]: {
                ...baseStyles,
                '&:before': { height: 2, width: 6 },
                backgroundColor: theme.palette.error.main,
              },
            }),
            ...(offline && {
              [`& .${badgeClasses.badge}`]: {
                ...baseStyles,
                '&:before': {
                  borderRadius: '50%',
                  height: 6,
                  width: 6,
                },
                backgroundColor: theme.palette.text.disabled,
              },
            }),
            ...(alway && {
              [`& .${badgeClasses.badge}`]: {
                ...baseStyles,
                '&:after': {
                  height: 4,
                  transform: 'translateY(1px) rotate(125deg)',
                  width: 2,
                },
                '&:before': {
                  height: 4,
                  transform: 'translateX(1px) translateY(-1px)',
                  width: 2,
                },
                backgroundColor: theme.palette.warning.main,
              },
            }),
            ...(invisible && {
              [`& .${badgeClasses.badge}`]: {
                display: 'none',
              },
            }),
          };
        },
      },
    },
  };
}
