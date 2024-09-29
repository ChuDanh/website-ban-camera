import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

// @mui
import { alpha, styled } from '@mui/material/styles';

// ----------------------------------------------------------------------

export const StyledRootScrollbar = styled('div')(() => ({
  flexGrow: 1,
  height: '100%',
  overflow: 'hidden',
}));

export const StyledScrollbar = styled(SimpleBar)(({ theme }) => ({
  '& .simplebar-mask': {
    zIndex: 'inherit',
  },

  '& .simplebar-vertical': {
    display: 'none',
  },

  '& .simplebar-scrollbar': {
    // '&.simplebar-visible:before': {
    //   opacity: 1,
    // },
    '&:before': {
      opacity: 1,
      backgroundColor: alpha(theme.palette.grey[600], 0.48),
    },
  },
  maxHeight: '100%',
}));
