import { Theme, alpha } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
import { tableRowClasses } from '@mui/material/TableRow';

// ----------------------------------------------------------------------

export function table(theme: Theme) {
  return {
    MuiTableCell: {
      styleOverrides: {
        head: {
          backgroundColor: theme.palette.background.neutral,
          color: theme.palette.text.secondary,
          fontSize: 14,
          fontWeight: theme.typography.fontWeightSemiBold,
        },
        paddingCheckbox: {
          paddingLeft: theme.spacing(1),
        },
        root: {
          borderBottomStyle: 'dashed',
        },
        stickyHeader: {
          backgroundColor: theme.palette.background.paper,
          backgroundImage: `linear-gradient(to bottom, ${theme.palette.background.neutral} 0%, ${theme.palette.background.neutral} 100%)`,
        },
      },
    },
    MuiTableContainer: {
      styleOverrides: {
        root: {
          position: 'relative',
        },
      },
    },
    MuiTablePagination: {
      styleOverrides: {
        actions: {
          marginRight: 8,
        },
        root: {
          width: '100%',
        },
        select: {
          '&:focus': {
            borderRadius: theme.shape.borderRadius,
          },
          paddingLeft: 8,
        },
        selectIcon: {
          height: 16,
          right: 4,
          top: 'calc(50% - 8px)',
          width: 16,
        },
        toolbar: {
          height: 64,
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          '&:last-of-type': {
            [`& .${tableCellClasses.root}`]: {
              borderColor: 'transparent',
            },
          },
          [`&.${tableRowClasses.selected}`]: {
            '&:hover': {
              backgroundColor: alpha(theme.palette.primary.dark, 0.08),
            },
            backgroundColor: alpha(theme.palette.primary.dark, 0.04),
          },
        },
      },
    },
  };
}
