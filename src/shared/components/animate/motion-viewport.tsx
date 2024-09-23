// @mui
import Box, { BoxProps } from '@mui/material/Box';
import { m, MotionProps } from 'framer-motion';
import { useResponsive } from '../../hooks/use-responsive';
// hooks
//
import { varContainer } from './variants';
// ----------------------------------------------------------------------

type IProps = BoxProps & MotionProps;

interface Props extends IProps {
  children: React.ReactNode;
  disableAnimatedMobile?: boolean;
}

export default function MotionViewport({
  children,
  disableAnimatedMobile = true,
  ...other
}: Props) {
  const smDown = useResponsive('down', 'sm');

  if (smDown && disableAnimatedMobile) {
    return <Box {...other}>{children}</Box>;
  }

  return (
    <Box
      component={m.div}
      initial="initial"
      whileInView="animate"
      viewport={{ amount: 0.3, once: true }}
      variants={varContainer()}
      {...other}
    >
      {children}
    </Box>
  );
}
