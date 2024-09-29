import type { Metadata } from 'next';
import { MotionLazy } from 'src/shared/components/animate/motion-lazy';
import SnackbarProvider from 'src/shared/components/snackbar/snackbar-provider';
import ThemeProvider from 'src/shared/theme';
import { Header } from '../shared/components/header';
import NavBar from '../shared/components/nav-bar';

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
            <SnackbarProvider>
              <Header />
              <NavBar />
              {children}
            </SnackbarProvider>
          </MotionLazy>
        </ThemeProvider>
      </body>
    </html>
  );
}
