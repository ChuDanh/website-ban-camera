'use client';

import { Button } from '@mui/material';
import Collapse from '@mui/material/Collapse';
import Grid from '@mui/material/Grid2';
import { debounce } from 'lodash-es';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import FormProvider, { RHFSelect } from 'src/shared/components/hook-form';
import Iconify from 'src/shared/components/iconify';
import { useBoolean } from 'src/shared/hooks/use-boolean';
import { pickFilterFormData, useFetchingParams } from '../_hooks/use-fetching-params';
import { TFilterOptions } from '../types';

export const FilterOption = () => {
  const open = useBoolean();

  const { fetchingParams, setFetchingParams } = useFetchingParams(false);

  const methods = useForm({
    defaultValues: pickFilterFormData(fetchingParams),
  });

  const { handleSubmit, setValue, watch } = methods;

  const status = watch('status');
  const money = watch('money');

  const onSubmit = debounce(
    handleSubmit(async (data) => {
      setFetchingParams(data);
    }),
    1000
  );

  useEffect(
    () => {
      if (status || money) {
        onSubmit();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [status, money]
  );

  useEffect(
    () => {
      Object.entries(pickFilterFormData(fetchingParams)).forEach(([key, value]) =>
        setValue(key as keyof TFilterOptions, value as string)
      );
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [fetchingParams]
  );

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Button
        variant="outlined"
        onClick={open.onToggle}
        startIcon={<Iconify icon={open.value ? 'raphael:arrowup' : 'raphael:arrowdown'} />}
      >
        Bộ lọc
      </Button>

      <Collapse in={open.value} timeout="auto" unmountOnExit>
        <Grid container spacing={2} sx={{ py: 1.5 }}>
          <Grid size={4}>
            <RHFSelect
              name="status"
              label="Tình trạng "
              options={[
                {
                  label: 'Còn hàng',
                  value: 'active',
                },
                {
                  label: 'Hết hàng',
                  value: 'inactive',
                },
              ]}
              size="small"
            />
          </Grid>

          <Grid size={4}>
            <RHFSelect
              name="money"
              label="Giá tiền"
              options={[
                {
                  label: 'Dưới 5 triệu',
                  value: 'less5',
                },
                {
                  label: 'Từ 5 đến 10 triệu',
                  value: '5to10',
                },
                {
                  label: 'Từ 10 đến 20 triệu',
                  value: '10to20',
                },
                {
                  label: 'Trên 20 triệu',
                  value: 'more20',
                },
              ]}
              size="small"
            />
          </Grid>
        </Grid>
      </Collapse>
    </FormProvider>
  );
};
