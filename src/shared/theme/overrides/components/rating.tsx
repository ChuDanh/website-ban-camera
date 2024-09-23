import { alpha, Theme } from '@mui/material/styles';
import { ratingClasses } from '@mui/material/Rating';
import { svgIconClasses } from '@mui/material/SvgIcon';

// ----------------------------------------------------------------------

export function rating(theme: Theme) {
  return {
    MuiRating: {
      styleOverrides: {
        iconEmpty: {
          color: alpha(theme.palette.grey[500], 0.48),
        },
        root: {
          [`&.${ratingClasses.disabled}`]: {
            opacity: 0.48,
          },
        },
        sizeLarge: {
          [`& .${svgIconClasses.root}`]: {
            height: 28,
            width: 28,
          },
        },
        sizeMedium: {
          [`& .${svgIconClasses.root}`]: {
            height: 24,
            width: 24,
          },
        },
        sizeSmall: {
          [`& .${svgIconClasses.root}`]: {
            height: 20,
            width: 20,
          },
        },
      },
    },
  };
}
