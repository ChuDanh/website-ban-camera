import { Theme } from '@mui/material/styles';
import { sliderClasses } from '@mui/material/Slider';

// ----------------------------------------------------------------------

export function slider(theme: Theme) {
  const lightMode = theme.palette.mode === 'light';

  return {
    MuiSlider: {
      styleOverrides: {
        markLabel: {
          color: theme.palette.text.disabled,
          fontSize: 13,
        },
        rail: {
          opacity: 0.32,
        },
        root: {
          [`&.${sliderClasses.disabled}`]: {
            color: theme.palette.action.disabled,
          },
        },
        valueLabel: {
          backgroundColor: theme.palette.grey[lightMode ? 800 : 700],
          borderRadius: 8,
        },
      },
    },
  };
}
