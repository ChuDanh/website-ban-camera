'use client';

import { Card, CardContent, CardMedia, Container, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid2';
import CustomBreadcrumbs from 'src/shared/components/custom-breadcrumbs';
import CustomTypography from '../../../shared/components/numberic-text/numberic-typography';

export default function FlashSalePage() {
  return (
    <Container>
      <Card sx={{ border: '1px solid black', mt: 2 }}>
        <CustomBreadcrumbs heading="Group 1" />
        <Grid container spacing={3} sx={{ pt: 2, pb: 3, pr: 2 }}>
          <Grid size={3}>
            <Card>
              <Box display="flex" justifyContent="center" alignItems="center">
                <CardMedia sx={{ height: 200, width: '50%' }} image="" />
              </Box>
              <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                  abc
                </Typography>
                <Box display="flex" justifyContent="flex-start" alignItems="center">
                  <CustomTypography
                    value={1}
                    sx={{
                      textDecoration: 'line-through',
                      color: 'text.secondary',
                      mr: 1,
                    }}
                  />
                  <Chip label={`-1%`} color="error" variant="outlined" />
                </Box>
                <CustomTypography variant="subtitle2" value={1} />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
}
