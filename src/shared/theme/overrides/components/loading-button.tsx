import { loadingButtonClasses, LoadingButtonProps } from '@mui/lab/LoadingButton';
import { Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------

export function loadingButton(theme: Theme) {
  return {
    MuiLoadingButton: {
      styleOverrides: {
        root: ({ ownerState }: { ownerState: LoadingButtonProps }) => ({
          ...(ownerState.variant === 'soft' && {
            [`& .${loadingButtonClasses.loadingIndicatorEnd}`]: {
              right: 14,
            },
            [`& .${loadingButtonClasses.loadingIndicatorStart}`]: {
              left: 10,
            },
            ...(ownerState.size === 'small' && {
              [`& .${loadingButtonClasses.loadingIndicatorEnd}`]: {
                right: 10,
              },
              [`& .${loadingButtonClasses.loadingIndicatorStart}`]: {
                left: 10,
              },
            }),
          }),
        }),
      },
    },
  };
}
