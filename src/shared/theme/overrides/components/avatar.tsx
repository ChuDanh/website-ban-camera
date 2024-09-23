import { alpha, Theme } from '@mui/material/styles';
import { AvatarProps } from '@mui/material/Avatar';
import { avatarGroupClasses, AvatarGroupProps } from '@mui/material/AvatarGroup';

// ----------------------------------------------------------------------

const COLORS = ['default', 'primary', 'secondary', 'info', 'success', 'warning', 'error'] as const;

const colorByName = (name: string) => {
  const charAt = name.charAt(0);

  if (['A', 'C', 'F'].includes(charAt)) return 'primary';
  if (['E', 'D', 'H'].includes(charAt)) return 'secondary';
  if (['I', 'K', 'L'].includes(charAt)) return 'info';
  if (['M', 'N', 'P'].includes(charAt)) return 'success';
  if (['Q', 'S', 'T'].includes(charAt)) return 'warning';
  if (['V', 'X', 'Y'].includes(charAt)) return 'error';
  return 'default';
};

// NEW VARIANT
declare module '@mui/material/AvatarGroup' {
  interface AvatarGroupPropsVariantOverrides {
    compact: true;
  }
}

// ----------------------------------------------------------------------

export function avatar(theme: Theme) {
  return {
    MuiAvatar: {
      styleOverrides: {
        colorDefault: ({ ownerState }: { ownerState: AvatarProps }) => {
          const color = colorByName(`${ownerState.alt}`);

          return {
            ...(!!ownerState.alt && {
              ...(color !== 'default'
                ? {
                    backgroundColor: theme.palette[color].main,
                    color: theme.palette[color].contrastText,
                  }
                : {
                    backgroundColor: alpha(theme.palette.grey[500], 0.24),
                    color: theme.palette.text.secondary,
                  }),
            }),
          };
        },
        rounded: {
          borderRadius: theme.shape.borderRadius * 1.5,
        },
      },

      variants: COLORS.map((color) =>
        color === 'default'
          ? {
              props: { color: 'default' },
              style: {
                backgroundColor: alpha(theme.palette.grey[500], 0.24),
                color: theme.palette.text.secondary,
              },
            }
          : {
              props: { color },
              style: {
                backgroundColor: theme.palette[color].main,
                color: theme.palette[color].contrastText,
              },
            }
      ),
    },
    MuiAvatarGroup: {
      styleOverrides: {
        avatar: {
          '&:first-of-type': {
            backgroundColor: theme.palette.primary.lighter,
            color: theme.palette.primary.dark,
            fontSize: 12,
          },
          fontSize: 16,
          fontWeight: theme.typography.fontWeightSemiBold,
        },
        root: ({ ownerState }: { ownerState: AvatarGroupProps }) => ({
          justifyContent: 'flex-end',
          ...(ownerState.variant === 'compact' && {
            [`& .${avatarGroupClasses.avatar}`]: {
              '&:first-of-type': {
                bottom: 0,
                left: 0,
                zIndex: 9,
              },
              '&:last-of-type': {
                right: 0,
                top: 0,
              },
              height: 28,
              margin: 0,
              position: 'absolute',
              width: 28,
            },
            height: 40,
            position: 'relative',
            width: 40,
          }),
        }),
      },
    },
  };
}
