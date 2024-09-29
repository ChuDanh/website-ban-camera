export type BaseJSONResponse<Data = any> = {
  current_page: number;
  data: Array<Data>;
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: Link[];
  next_page_url: any;
  path: string;
  per_page: number;
  prev_page_url: any;
  to: number;
  total: number;
};

export type TFetchedResponse<T> = BaseJSONResponse<T> | Array<T>;

export type Link = {
  url?: string;
  label: string;
  active: boolean;
};

export type PaginationParams<Data extends Record<string, any>> = Data & {
  page?: number;
  limit?: number;
  paginated?: boolean;
  sort?: string;
};

export type ExtendingParams<Data extends Record<string, any>> = Data & {
  with?: string[];
  sort?: string;
  select?: string[];
};

export type TServerError = {
  message?: string;
  messages?: Record<string, Array<string>>;
  error: string;
  code: 0;
  trace: string;
};

export type TErrorName = 'COMMON_ERROR';

export type TCommonRequestId = string | number;
