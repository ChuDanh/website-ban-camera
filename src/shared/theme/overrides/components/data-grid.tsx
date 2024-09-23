import { Theme, alpha } from '@mui/material/styles';
import { listClasses } from '@mui/material/List';
import { paperClasses } from '@mui/material/Paper';
import { buttonClasses } from '@mui/material/Button';
import { listItemIconClasses } from '@mui/material/ListItemIcon';
import { tablePaginationClasses } from '@mui/material/TablePagination';
//
import { paper } from '../../css';

// ----------------------------------------------------------------------

export function dataGrid(theme: Theme) {
  const paperStyles = paper({ dropdown: true, theme });

  return {
    MuiDataGrid: {
      styleOverrides: {
        cell: {
          borderBottom: `1px dashed ${theme.palette.divider}`,
        },
        columnHeaders: {
          backgroundColor: theme.palette.background.neutral,
          borderRadius: 0,
        },
        columnSeparator: {
          color: theme.palette.divider,
        },
        filterForm: {
          padding: theme.spacing(2),
        },
        filterFormColumnInput: {
          marginLeft: theme.spacing(2),
        },
        filterFormOperatorInput: {
          marginLeft: theme.spacing(2),
        },
        filterFormValueInput: {
          marginLeft: theme.spacing(2),
        },
        menu: {
          [`& .${listClasses.root}`]: {
            [`& .${listItemIconClasses.root}`]: {
              marginRight: theme.spacing(2),
              minWidth: 0,
            },
            padding: 0,
          },
          [`& .${paperClasses.root}`]: {
            ...paperStyles,
          },
        },
        panelFooter: {
          [`& .${buttonClasses.root}`]: {
            '&:first-of-type': {
              border: `solid 1px ${alpha(theme.palette.grey[500], 0.24)}`,
            },
            '&:last-of-type': {
              backgroundColor: theme.palette.text.primary,
              color: theme.palette.background.paper,
              marginLeft: theme.spacing(1.5),
            },
          },
          borderTop: `dashed 1px ${theme.palette.divider}`,
          justifyContent: 'flex-end',
          padding: theme.spacing(2),
        },
        panelHeader: {
          padding: theme.spacing(2),
        },
        paper: {
          ...paperStyles,
          padding: 0,
        },
        root: {
          [`& .${tablePaginationClasses.root}`]: {
            borderTop: 0,
          },
          [`& .${tablePaginationClasses.toolbar}`]: {
            height: 'auto',
          },
          borderRadius: 0,
          borderWidth: 0,
        },
        selectedRowCount: {
          whiteSpace: 'nowrap',
        },
        toolbarContainer: {
          backgroundColor: theme.palette.background.neutral,
          borderBottom: `1px dashed ${theme.palette.divider}`,
          padding: theme.spacing(2),
        },
      },
    },
  };
}
