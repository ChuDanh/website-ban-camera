// @mui
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Chip from '@mui/material/Chip';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select, { SelectProps } from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import { SxProps, Theme } from '@mui/material/styles';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { isNil } from 'lodash-es';
import { PropsWithChildren, ReactNode } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { useSettingsContext } from '../settings';
//
import { FieldTitle } from './field-title';
import { TBaseFieldProps } from './types';

// ----------------------------------------------------------------------

type TOptionItem = {
  label: string;
  value: string | number;
};

export type RHFSelectProps = PropsWithChildren<
  TextFieldProps &
    TBaseFieldProps & {
      native?: boolean;
      maxHeight?: boolean | number;
      PaperPropsSx?: SxProps<Theme>;
      defaultValue?: any;
      disabled?: boolean;
      isRequire?: boolean;
      options?: Array<TOptionItem>;
    }
>;

export function RHFSelect({
  PaperPropsSx,
  children,
  helperText,
  maxHeight = 220,
  disabled,
  name,
  native,
  title,
  isRequire,
  defaultValue,
  options,
  placeholder,
  SelectProps: selectProps,
  ...other
}: RHFSelectProps) {
  const { control } = useFormContext();
  const settings = useSettingsContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        return (
          <Stack sx={{ display: 'flex', flexDirection: 'column' }}>
            <FieldTitle title={title} required={isRequire} />
            <TextField
              {...field}
              disabled={disabled}
              select
              defaultValue={defaultValue}
              fullWidth
              size={settings.themeFormSize}
              sx={{
                backgroundColor: (theme) => (disabled ? theme.palette.grey[200] : undefined),
              }}
              SelectProps={{
                ...selectProps,
                native,
                MenuProps: {
                  PaperProps: {
                    sx: {
                      ...(!native && {
                        maxHeight: typeof maxHeight === 'number' ? maxHeight : 'unset',
                      }),
                      ...PaperPropsSx,
                    },
                  },
                },
                ...makePlaceholderProps({
                  placeholder,
                  options,
                }),
                sx: {
                  backgroundColor: (theme) => (disabled ? theme.palette.grey[200] : undefined),
                },
                // sx: { textTransform: 'capitalize' },
              }}
              error={!!error}
              helperText={error ? error?.message : helperText}
              {...other}
            >
              {options ? dfRenderOptions(options) : children}
            </TextField>
          </Stack>
        );
      }}
    />
  );
}

// ----------------------------------------------------------------------

type RHFMultiSelectProps = SelectProps &
  TBaseFieldProps & {
    chip?: boolean;
    checkbox?: boolean;
    helperText?: React.ReactNode;
    options: TOptionItem[];
  };

export function RHFMultiSelect({
  checkbox,
  chip,
  helperText,
  label,
  name,
  options,
  sx,
  title,
  placeholder,
  isRequire,
  ...other
}: RHFMultiSelectProps) {
  const settings = useSettingsContext();
  const { control } = useFormContext();

  const renderValues = (selectedIds: (string | number)[]) => {
    const strSelected = selectedIds.map((sl) => String(sl));
    const selectedItems = options.filter((item) => strSelected.includes(item.value.toString()));

    if (!selectedItems.length && placeholder) {
      return <Box sx={{ color: 'text.disabled' }}>{placeholder}</Box>;
    }

    if (chip) {
      return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
          {selectedItems.map((item) => (
            <Chip key={item.value} size="small" label={item.label} />
          ))}
        </Box>
      );
    }

    return selectedItems.map((item) => item.label).join(', ');
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <FormControl size={settings.themeFormSize} sx={sx}>
          {title ? (
            <FieldTitle title={title} required={isRequire} />
          ) : (
            label && <InputLabel id={name}> {label} </InputLabel>
          )}

          <Select
            {...field}
            multiple
            labelId={name}
            input={<OutlinedInput fullWidth label={label} error={!!error} />}
            {...makePlaceholderProps({ placeholder, options, customRenderValue: renderValues })}
            {...other}
          >
            {options.map((option) => {
              const selected = field.value?.includes(option.value);

              return (
                <MenuItem key={option.value} value={option.value}>
                  {checkbox && <Checkbox size="small" disableRipple checked={selected} />}

                  {option.label}
                </MenuItem>
              );
            })}
          </Select>

          {(!!error || helperText) && (
            <FormHelperText error={!!error}>{error ? error?.message : helperText}</FormHelperText>
          )}
        </FormControl>
      )}
    />
  );
}

const dfRenderOptions = (options: Array<TOptionItem>) =>
  options.map(({ label, value }) => (
    <MenuItem key={value} value={value}>
      {label}
    </MenuItem>
  ));

const makePlaceholderProps = ({
  placeholder,
  options,
  customRenderValue,
}: {
  placeholder?: string;
  options?: Array<TOptionItem>;
  customRenderValue?: (value: any) => ReactNode;
}): Pick<SelectProps, 'renderValue' | 'displayEmpty'> => ({
  displayEmpty: !!placeholder,
  renderValue: (selectedValue) => {
    if (isNil(selectedValue) && placeholder) {
      return <Box sx={{ color: 'text.disabled' }}>{placeholder}</Box>;
    }

    if (customRenderValue) {
      return customRenderValue(selectedValue);
    }

    const displayingText =
      options?.find((item) => item.value === selectedValue)?.label ?? selectedValue;

    return <>{displayingText}</>;
  },
});
