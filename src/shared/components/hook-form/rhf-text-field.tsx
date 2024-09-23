import { Controller, useFormContext } from 'react-hook-form';
// @mui
import TextField, { TextFieldProps } from '@mui/material/TextField';
import Stack from '@mui/system/Stack';
import { TBaseFieldProps } from './types';
import { FieldTitle } from './field-title';
import { useSettingsContext } from '../settings';

type Props = TextFieldProps &
  TBaseFieldProps & {
    defaultValue?: string;
    maxLength?: number;
    allowDecimal?: boolean;
    tooltip?: React.ReactNode;
  };

export default function RHFTextField({
  InputProps,
  label,
  name,
  title,
  type,
  isRequire,
  maxLength,
  allowDecimal = true,
  ...other
}: Props) {
  const settings = useSettingsContext();
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Stack sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
          <FieldTitle title={title} required={isRequire} tooltip={other.tooltip} />
          <TextField
            {...field}
            size={settings.themeFormSize}
            fullWidth
            type={type}
            value={type === 'number' && field.value === 0 ? '' : field.value}
            label={label}
            onChange={(event) => {
              if (type === 'number') {
                field.onChange(Number(event.target.value));
              } else {
                field.onChange(event?.target?.value);
              }
            }}
            error={!!error}
            helperText={error ? error?.message : other.helperText}
            InputProps={{
              ...InputProps,
            }}
            inputProps={{ maxLength }}
            sx={{
              backgroundColor: (theme) => (other.disabled ? theme.palette.grey[200] : undefined),
            }}
            {...other}
          />
        </Stack>
      )}
    />
  );
}
