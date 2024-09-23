import { Theme } from '@mui/material/styles';
import { typographyClasses } from '@mui/material/Typography';
import { accordionClasses } from '@mui/material/Accordion';
import { accordionSummaryClasses } from '@mui/material/AccordionSummary';

// ----------------------------------------------------------------------

export function accordion(theme: Theme) {
  return {
    MuiAccordion: {
      styleOverrides: {
        root: {
          [`&.${accordionClasses.disabled}`]: {
            backgroundColor: 'transparent',
          },
          [`&.${accordionClasses.expanded}`]: {
            backgroundColor: theme.palette.background.paper,
            borderRadius: theme.shape.borderRadius,
            boxShadow: theme.customShadows.z8,
          },
          backgroundColor: 'transparent',
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        expandIconWrapper: {
          color: 'inherit',
        },
        root: {
          [`&.${accordionSummaryClasses.disabled}`]: {
            [`& .${typographyClasses.root}`]: {
              color: 'inherit',
            },
            color: theme.palette.action.disabled,
            opacity: 1,
          },
          paddingLeft: theme.spacing(2),
          paddingRight: theme.spacing(1),
        },
      },
    },
  };
}
