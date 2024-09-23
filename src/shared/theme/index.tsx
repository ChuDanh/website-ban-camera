'use client';

import { CssBaseline } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import {
  createTheme,
  Experimental_CssVarsProvider as CssVarsProvider,
  ThemeOptions,
} from '@mui/material/styles';
import { merge } from 'lodash-es';
import { useMemo } from 'react';
import { useTranslate } from 'src/app/i18n/use-locales';
import { customShadows } from './custom-shadows';
import { contrast } from './options/contrast';
import { darkMode } from './options/dark-mode';
import { componentsOverrides } from './overrides';
import { palette } from './palette';
import { shadows } from './shadows';
import { typography } from './typography';

type Props = {
  children: React.ReactNode;
};

export default function ThemeProvider({ children }: Props) {
  const { currentLang } = useTranslate();

  const darkModeOption = darkMode('light');

  const contrastOption = contrast(true, 'light');

  const baseOption = useMemo(
    () => ({
      customShadows: customShadows('light'),
      palette: palette('light'),
      shadows: shadows('light'),
      shape: { borderRadius: 8 },
      typography,
    }),
    []
  );

  const memoizedValue = useMemo(
    () =>
      merge(
        // Base
        baseOption,
        // Dark mode: remove if not in use
        darkModeOption,
        // Contrast: remove if not in use
        contrastOption.theme
      ),
    [baseOption, darkModeOption, contrastOption.theme]
  );

  const theme = createTheme(memoizedValue as ThemeOptions);

  theme.components = merge(componentsOverrides(theme), contrastOption.components);
  // const theme = createTheme(currentLang.systemValue, settings);

  const themeWithLocale = useMemo(
    () => createTheme(theme, currentLang.systemValue),
    [currentLang.systemValue, theme]
  );
  return (
    <AppRouterCacheProvider options={{ key: 'css' }}>
      <CssVarsProvider theme={themeWithLocale}>
        <CssBaseline />
        {children}
      </CssVarsProvider>
    </AppRouterCacheProvider>
  );
}
