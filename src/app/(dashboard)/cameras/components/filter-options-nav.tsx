'use client';

import { debounce } from 'lodash-es';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import FormProvider, { RHFTextField } from 'src/shared/components/hook-form';
import { useDebounce } from 'src/shared/hooks/use-debounce';
import { pickFilterFormData, useFetchingParams } from '../_hooks/use-fetching-params';
import { TFilterOptions } from '../types';

export default function FilterOptionsNav() {
  const { fetchingParams, setFetchingParams } = useFetchingParams(false);

  const methods = useForm({
    defaultValues: pickFilterFormData(fetchingParams),
  });

  const { handleSubmit, setValue, watch } = methods;
  const { keyword } = watch();

  const dbKeyword = useDebounce(keyword, 1000);

  const onSubmit = debounce(
    handleSubmit(async (data) => {
      setFetchingParams(data);
    })
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

  useEffect(() => {
    onSubmit();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dbKeyword]);

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <RHFTextField placeholder="Tìm kiếm sản phẩm..." name="keyword" sx={{ pb: 2 }} />
    </FormProvider>
  );
}
