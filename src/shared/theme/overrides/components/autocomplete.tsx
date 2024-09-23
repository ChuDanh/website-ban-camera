import { alpha, Theme } from '@mui/material/styles';
import { autocompleteClasses } from '@mui/material/Autocomplete';
import { svgIconClasses } from '@mui/material/SvgIcon';
import { menuItem, paper } from '../../css';
//

// ----------------------------------------------------------------------

export function autocomplete(theme: Theme) {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        endAdornment: {
          [`& .${svgIconClasses.root}`]: {
            height: 18,
            width: 18,
          },
        },
        listbox: {
          [`& .${autocompleteClasses.option}`]: {
            ...menuItem(theme),
          },
          padding: 0,
        },
        paper: {
          ...paper({ dropdown: true, theme }),
        },
        root: {
          [`& span.${autocompleteClasses.tag}`]: {
            ...theme.typography.subtitle2,
            backgroundColor: alpha(theme.palette.grey[500], 0.16),
            borderRadius: theme.shape.borderRadius,
            color: theme.palette.text.secondary,
            height: 24,
            lineHeight: '24px',
            minWidth: 24,
            padding: theme.spacing(0, 0.75),
            textAlign: 'center',
          },
        },
      },
    },
  };
}
