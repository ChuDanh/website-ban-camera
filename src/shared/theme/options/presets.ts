// @mui
import { alpha } from '@mui/material/styles';
// theme
import { palette as themePalette } from 'src/shared/theme/palette';

// ----------------------------------------------------------------------

export function presets(presetsColor: string) {
  const primary = primaryPresets.find((i) => i.name === presetsColor);

  const theme = {
    customShadows: {
      primary: `0 8px 16px 0 ${alpha(`${primary?.main}`, 0.24)}`,
    },
    palette: {
      primary,
    },
  };

  return theme;
}

// ----------------------------------------------------------------------

const palette = themePalette('light');

export const primaryPresets = [
  // DEFAULT
  {
    name: 'default',
    ...palette.primary,
  },
  // CYAN
  {
    contrastText: '#FFFFFF',
    dark: '#0351AB',
    darker: '#012972',
    light: '#68CDF9',
    lighter: '#CCF4FE',
    main: '#078DEE',
    name: 'cyan',
  },
  // PURPLE
  {
    contrastText: '#FFFFFF',
    dark: '#431A9E',
    darker: '#200A69',
    light: '#B985F4',
    lighter: '#EBD6FD',
    main: '#7635dc',
    name: 'purple',
  },
  // BLUE
  {
    contrastText: '#FFFFFF',
    dark: '#103996',
    darker: '#061B64',
    light: '#76B0F1',
    lighter: '#D1E9FC',
    main: '#2065D1',
    name: 'blue',
  },
  // ORANGE
  {
    contrastText: palette.grey[800],
    dark: '#B66816',
    darker: '#793908',
    light: '#FED680',
    lighter: '#FEF4D4',
    main: '#fda92d',
    name: 'orange',
  },
  // RED
  {
    contrastText: '#FFFFFF',
    dark: '#B71833',
    darker: '#7A0930',
    light: '#FFC1AC',
    lighter: '#FFE3D5',
    main: '#FF3030',
    name: 'red',
  },
];
