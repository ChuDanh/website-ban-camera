import type { Metadata } from 'next';
import { MotionLazy } from 'src/shared/components/animate/motion-lazy';
import SnackbarProvider from 'src/shared/components/snackbar/snackbar-provider';
import ThemeProvider from 'src/shared/theme';

export const metadata: Metadata = {
  title: 'Website bán Camera',
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <MotionLazy>
            <SnackbarProvider>{children}</SnackbarProvider>
          </MotionLazy>
        </ThemeProvider>
      </body>
    </html>
  );
}
