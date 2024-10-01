'use client';

import { Card, CardContent, CardMedia, Link, Pagination, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid2';
import { useRouter } from 'next/navigation';
import CustomBreadcrumbs from 'src/shared/components/custom-breadcrumbs';
import CustomTypography from 'src/shared/components/numberic-text/numberic-typography';
import IntroPage from '../../../../shared/components/intro-page';
import { useFetchingParams } from '../_hooks/use-fetching-params';
import { Categories } from '../components/categories';
import { FilterOption } from '../components/filter-option';
import FilterOptionsNav from '../components/filter-options-nav';
import { MOCK_DATA } from '../mock-data';

export function CameraListPage() {
  const { setFetchingParams } = useFetchingParams(false);
  const router = useRouter();

  return (
    <>
      <IntroPage title="Sản phẩm" />

      <Grid container spacing={2} sx={{ py: 2, px: 2 }}>
        <Grid size={3}>
          <Box sx={{ width: 'auto', height: '500px' }}>
            <FilterOptionsNav />
            <FilterOption />
            <Categories setFetchingParams={setFetchingParams} />
          </Box>
        </Grid>

        <Grid size={9} container sx={{ px: 2 }} spacing={3}>
          <Grid size={12}>
            <CustomBreadcrumbs heading="Danh sách sản phẩm" />
          </Grid>
          {MOCK_DATA.map((item) => (
            <Grid size={4}>
              <Card>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <CardMedia sx={{ height: 200, width: '50%' }} image={item.src} />
                </Box>
                <CardContent>
                  <Typography variant="h5" component="div" gutterBottom>
                    <Link
                      component="a"
                      onClick={() => router.push(`/cameras/${item.id}/detail`)}
                      sx={{ cursor: 'pointer' }}
                      underline="hover"
                    >
                      {item.name}
                    </Link>
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

          <Grid size={12}>
            <Box display="flex" justifyContent="center" alignItems="center">
              <Pagination count={10} />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
