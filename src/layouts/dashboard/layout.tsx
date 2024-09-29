'use client';

import { Divider } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import { useFetchingParams } from '../../app/(dashboard)/cameras/_hooks/use-fetching-params';
import { Categories } from '../../app/(dashboard)/cameras/components/categories';
import { FilterOption } from '../../app/(dashboard)/cameras/components/filter-option';
import FilterOptionsNav from '../../app/(dashboard)/cameras/components/filter-options-nav';

type Props = {
  children: React.ReactNode;
};

export const DashboardLayout = ({ children }: Props) => {
  const { setFetchingParams } = useFetchingParams(false);

  return (
    <Grid container spacing={2} sx={{ pt: 2, px: 2 }}>
      <Grid size={3}>
        <Box sx={{ width: 'auto', height: '500px' }}>
          <FilterOptionsNav />
          <Divider sx={{ mb: 2 }} />
          <Categories setFetchingParams={setFetchingParams} />
        </Box>
      </Grid>

      <Grid size={9} sx={{ pl: 2 }}>
        <FilterOption />
        {children}
      </Grid>
    </Grid>
  );
};
