'use client';

import { Card, CardContent, CardMedia, Pagination, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid2';
import CustomTypography from 'src/shared/components/numberic-text/numberic-typography';
import { MOCK_DATA } from '../mock-data';

export function CameraListPage() {
  return (
    <>
      <Grid container spacing={3} sx={{ pt: 2, pb: 3, pr: 2 }}>
        {MOCK_DATA.map((item) => (
          <Grid size={4}>
            <Card>
              <Box display="flex" justifyContent="center" alignItems="center">
                <CardMedia sx={{ height: 200, width: '50%' }} image={item.src} />
              </Box>
              <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                  {item.name}
                </Typography>
                {item.sale ? (
                  <>
                    <Box display="flex" justifyContent="flex-start" alignItems="center">
                      <CustomTypography
                        value={item.price}
                        sx={{
                          textDecoration: 'line-through',
                          color: 'text.secondary',
                          mr: 1,
                        }}
                      />
                      <Chip label={`-${item.sale}%`} color="error" variant="outlined" />
                    </Box>
                    <CustomTypography
                      variant="subtitle2"
                      value={item.price - (item.price * item.sale) / 100}
                    />
                  </>
                ) : (
                  <CustomTypography variant="subtitle2" value={item.price} />
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Pagination count={10} />
      </Box>
    </>
  );
}
