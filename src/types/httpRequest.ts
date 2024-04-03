export type Params = Record<string, string>;
type RequestMethod = "get" | "post" | "put" | "delete";

export interface RequestParams<TParams = Params> {
  path: string;
  method?: RequestMethod;
  params?: TParams;
  queryParams?: TParams;
}
