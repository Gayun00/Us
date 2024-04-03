export type Params = Record<string, string>;
type RequestMethod = "get" | "post" | "put" | "delete";

export interface RequestParams<TParams = Params> {
  path: string;
  method?: RequestMethod;
  params?: TParams;
  queryParams?: TParams;
}

export interface LoginRequest {
  identity: string;
  password: string;
}

export interface UserRecord {
  id: string;
  collectionId: string;
  collectionName: string;
  username: string;
  verified: boolean;
  emailVisibility: boolean;
  email: string;
  created: string;
  updated: string;
  name: string;
  avatar: string;
}

export interface LoginResponse {
  record: UserRecord;
  token: string;
}
