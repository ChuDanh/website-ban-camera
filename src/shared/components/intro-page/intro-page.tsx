import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

type Props = {
  title: string;
  img?: string;
};
export default function IntroPage({ title, img }: Props) {
  return (
    <Box
      sx={{
        backgroundImage: img ? `url(${img})` : 'url(/img/bg-grey.jpg)',
        width: '100%',
        height: 'auto',
        px: 10,
        py: 7,
      }}
    >
      <Box>
        <Typography variant="h2">{title}</Typography>
        <Box sx={{ display: 'flex' }}>
          <Typography fontSize={14} fontWeight={500}>
            Trang chủ
          </Typography>
          <Box mx={0.5}>/</Box>
          <Typography fontSize={14} fontWeight={500} sx={{ color: 'text.secondary' }}>
            {title}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
