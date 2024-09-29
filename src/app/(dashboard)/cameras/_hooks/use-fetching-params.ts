import { pick } from 'lodash-es';
import { useMemo } from 'react';
import { PaginationParams } from 'src/services/rest-api/app-api/types';
import { useSearchParamsState } from 'src/shared/hooks/use-search-params-state';
import { TFilterOptions } from '../types';

export type TFetchingParams = PaginationParams<TFilterOptions>;

export const generateDefaultParams: () => TFetchingParams = () => ({
  keyword: '',
  code: '',
  trademark_code: '',
  price_code: '',
  status: '',
  money: '',
  page: 1,
  limit: 12,
});

export const useFetchingParams = (isInit: boolean = true) => {
  const { params, setSearchParamsState } = useSearchParamsState(
    isInit
      ? {
          defaultParams: generateDefaultParams(),
        }
      : undefined
  );

  const setFetchingParams = (newParams: Partial<TFetchingParams>) => {
    setSearchParamsState(newParams);
  };

  const fetchingParams = useMemo(() => {
    return Object.assign(generateDefaultParams(), params);
  }, [params]);

  return {
    fetchingParams,
    setFetchingParams,
  };
};

export const pickFilterFormData = (params: Partial<TFetchingParams>) => {
  return {
    ...pick(params, ['keyword', 'code', 'trademark_code', 'price_code', 'status', 'money']),
  } as TFilterOptions;
};
