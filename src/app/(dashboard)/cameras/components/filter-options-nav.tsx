'use client';

import { debounce } from 'lodash-es';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import FormProvider, { RHFTextField } from 'src/shared/components/hook-form';
import { pickFilterFormData, useFetchingParams } from '../_hooks/use-fetching-params';
import { TFilterOptions } from '../types';

export default function FilterOptionsNav() {
  const { fetchingParams, setFetchingParams } = useFetchingParams(false);

  const methods = useForm({
    defaultValues: pickFilterFormData(fetchingParams),
  });

  const { handleSubmit, setValue } = methods;

  const onSubmit = debounce(
    handleSubmit(async (data) => {
      setFetchingParams(data);
    }),
    1000,
    {
      leading: false,
      trailing: true,
    }
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
      <RHFTextField
        placeholder="Tìm kiếm sản phẩm..."
        name="keyword"
        sx={{ pb: 2 }}
        onChangeCapture={onSubmit}
      />
    </FormProvider>
  );
}
