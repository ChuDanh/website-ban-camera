import { useMemo } from 'react';
import { useSearchParamsState } from 'src/shared/hooks/use-search-params-state';

export type TTabOptions = {
  currentTab: string;
  unit?: string[];
};

export const generateDefaultTabParams: () => TTabOptions = () => ({
  currentTab: 'home',
});

const convertToFetchingParams = (params: TTabOptions) => {
  return Object.assign(params);
};

export const useFetchingTabParams = (isInit: boolean = true) => {
  const { params, setSearchParamsState } = useSearchParamsState(
    isInit
      ? {
          defaultParams: convertToFetchingParams(generateDefaultTabParams()),
        }
      : undefined
  );

  const setTableFetchingParams = (newParams: TTabOptions) => {
    setSearchParamsState(newParams);
  };

  const tableFetchingParams = useMemo(() => {
    return Object.assign(generateDefaultTabParams(), params);
  }, [params]);

  return {
    tableFetchingParams,
    setTableFetchingParams,
  };
};
