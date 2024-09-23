import { customShadows } from '../custom-shadows';
import { palette } from '../palette';
import { shadows } from '../shadows';

// ----------------------------------------------------------------------

export function darkMode(mode: 'light' | 'dark') {
  const theme = {
    customShadows: customShadows(mode),
    palette: palette(mode),
    shadows: shadows(mode),
  };

  return theme;
}
