import { alpha, Theme } from '@mui/material/styles';
import { inputBaseClasses } from '@mui/material/InputBase';
import { inputLabelClasses } from '@mui/material/InputLabel';
import { filledInputClasses } from '@mui/material/FilledInput';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';

// ----------------------------------------------------------------------

export function textField(theme: Theme) {
  const color = {
    active: theme.palette.text.secondary,
    focused: theme.palette.text.primary,
    placeholder: theme.palette.text.disabled,
  };

  const font = {
    label: theme.typography.body1,
    value: theme.typography.body2,
  };

  return {
    // FILLED
    MuiFilledInput: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: alpha(theme.palette.grey[500], 0.16),
          },
          [`&.${filledInputClasses.disabled}`]: {
            backgroundColor: theme.palette.action.disabledBackground,
          },
          [`&.${filledInputClasses.error}`]: {
            [`&.${filledInputClasses.focused}`]: {
              backgroundColor: alpha(theme.palette.error.main, 0.16),
            },
            backgroundColor: alpha(theme.palette.error.main, 0.08),
          },
          [`&.${filledInputClasses.focused}`]: {
            backgroundColor: alpha(theme.palette.grey[500], 0.16),
          },
          backgroundColor: alpha(theme.palette.grey[500], 0.08),
          borderRadius: theme.shape.borderRadius,
        },
      },
    },

    // HELPER
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginTop: theme.spacing(1),
        },
      },
    },

    // LABEL
    MuiFormLabel: {
      styleOverrides: {
        root: {
          ...font.value,
          [`&.${inputLabelClasses.shrink}`]: {
            ...font.label,
            [`&.${inputLabelClasses.disabled}`]: {
              color: theme.palette.text.disabled,
            },
            [`&.${inputLabelClasses.error}`]: {
              color: theme.palette.error.main,
            },
            [`&.${inputLabelClasses.filled}`]: {
              transform: 'translate(12px, 6px) scale(0.75)',
            },
            [`&.${inputLabelClasses.focused}`]: {
              color: color.focused,
            },
            color: color.active,
            fontWeight: 600,
          },
          color: color.placeholder,
        },
      },
    },

    // STANDARD
    MuiInput: {
      styleOverrides: {
        underline: {
          '&:after': {
            borderBottomColor: color.focused,
          },
          '&:before': {
            borderBottomColor: alpha(theme.palette.grey[500], 0.32),
          },
        },
      },
    },

    // BASE
    MuiInputBase: {
      styleOverrides: {
        input: {
          ...font.value,
          '&::placeholder': {
            color: color.placeholder,
            opacity: 1,
          },
        },
        root: {
          [`&.${inputBaseClasses.disabled}`]: {
            '& svg': {
              color: theme.palette.text.disabled,
            },
          },
        },
      },
    },

    // OUTLINED
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: alpha(theme.palette.grey[500], 0.2),
          transition: theme.transitions.create(['border-color'], {
            duration: theme.transitions.duration.shortest,
          }),
        },
        root: {
          [`&.${outlinedInputClasses.disabled}`]: {
            [`& .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: theme.palette.action.disabledBackground,
            },
          },
          [`&.${outlinedInputClasses.error}`]: {
            [`& .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: theme.palette.error.main,
            },
          },
          [`&.${outlinedInputClasses.focused}`]: {
            [`& .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: color.focused,
            },
          },
        },
      },
    },
  };
}
