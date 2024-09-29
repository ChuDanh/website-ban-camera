import { Typography, TypographyProps } from '@mui/material';

function formatNumberWithDots(value: number): string {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

interface CustomTypographyProps extends TypographyProps {
  value: number;
}

const CustomTypography = ({ value, ...props }: CustomTypographyProps) => {
  return <Typography {...props}>{formatNumberWithDots(value)} đ</Typography>;
};
export default CustomTypography;
