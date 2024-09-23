import { Typography, TypographyProps } from '@mui/material';
import { ReactNode } from 'react';

export const FieldTitle = ({
  title,
  required,
  tooltip,
  sx,
  ...other
}: { title?: string; required?: boolean; tooltip?: ReactNode } & TypographyProps) => {
  return title ? (
    <Typography
      variant="body2"
      sx={{ fontWeight: 'bold', mb: 1, display: 'flex', alignItems: 'center', ...sx }}
      {...other}
    >
      {title}
      {required && (
        <Typography component="span" sx={{ color: 'text.error' }}>
          *
        </Typography>
      )}
      {tooltip}
    </Typography>
  ) : null;
};
