import { Card, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';

type Props = {
  params: {
    id: string;
  };
};

export default function DetailPage({ params }: Props) {
  const { id } = params;
  return (
    <>
      <Card>
        <Grid container spacing={2} sx={{ pt: 2, px: 2 }}>
          <Grid size={4}>
            <Card></Card>
          </Grid>
        </Grid>
      </Card>
    </>
  );
}
