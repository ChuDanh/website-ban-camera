import { Controller, useFormContext } from 'react-hook-form';
// @mui
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { useBoolean } from 'src/shared/hooks/use-boolean';
import Iconify from '../iconify';
import { useSettingsContext } from '../settings';

// ----------------------------------------------------------------------

type Props = TextFieldProps & {
  name: string;
};

export default function RHFPassword({ name, helperText, ...other }: Props) {
  const settings = useSettingsContext();
  const { control } = useFormContext();
  const password = useBoolean();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          size={settings.themeFormSize}
          fullWidth
          type={password.value ? 'text' : 'password'}
          value={field.value}
          onChange={(event) => {
            field.onChange(event.target.value);
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={password.onToggle} edge="end">
                  <Iconify icon={password.value ? 'solar:eye-bold' : 'solar:eye-closed-bold'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
          error={!!error}
          helperText={error ? error?.message : helperText}
          {...other}
        />
      )}
    />
  );
}
