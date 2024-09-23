import { MaterialDesignContent } from 'notistack';
// @mui
import { styled, alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

export const StyledNotistack = styled(MaterialDesignContent)(({ theme }) => {
  const isLight = theme.palette.mode === 'light';

  return {
    '& #notistack-snackbar': {
      ...theme.typography.subtitle2,
      flexGrow: 1,
      padding: 0,
    },
    '&.notistack-MuiContent': {
      backgroundColor: theme.palette.background.paper,
      borderRadius: theme.shape.borderRadius,
      boxShadow: theme.customShadows.z8,
      color: theme.palette.text.primary,
      padding: theme.spacing(0.5),
      paddingRight: theme.spacing(2),
    },
    '&.notistack-MuiContent-default': {
      backgroundColor: isLight ? theme.palette.grey[800] : theme.palette.common.white,
      color: isLight ? theme.palette.common.white : theme.palette.grey[800],
      padding: theme.spacing(1),
    },
    // '&.notistack-MuiContent-info': {},
    // '&.notistack-MuiContent-success': {},
    // '&.notistack-MuiContent-warning': {},
    // '&.notistack-MuiContent-error': {},
  };
});

// ----------------------------------------------------------------------

type StyledIconProps = {
  color: 'info' | 'success' | 'warning' | 'error';
};

export const StyledIcon = styled('span')<StyledIconProps>(({ color, theme }) => ({
  alignItems: 'center',
  backgroundColor: alpha(theme.palette[color].main, 0.16),
  borderRadius: theme.shape.borderRadius,
  color: theme.palette[color].main,
  display: 'flex',
  height: 44,
  justifyContent: 'center',
  marginRight: theme.spacing(1.5),
  width: 44,
}));
