export type Params = Record<string, string>;
type RequestMethod = "get" | "post" | "put" | "delete";

export interface RequestParams<TParams = Params> {
  path: string;
  method?: RequestMethod;
  params?: TParams;
  queryParams?: TParams;
  shouldAuthorize?: boolean;
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

export interface GetContentsSearchParams {
  expand: string;
  perPage: number;
  page: number;
}

export interface AuthorData {
  collectionId: string;
  collectionName: string;
  created: string;
  id: string;
  job: string;
  name: string;
  profileImage: string;
  updated: string;
}

export interface NewsData {
  collectionId: string;
  collectionName: string;
  created: string;
  description: string;
  id: string;
  imageUrl: string;
  title: string;
  updated: string;
  link: string;
}

export interface Content {
  author: string;
  collectionId: string;
  collectionName: string;
  created: string;
  expand: {
    author: AuthorData;
    news: NewsData;
  };
  id: string;
  mediaUrl: string;
  news: string;
  text: string;
  title: string;
  type: string;
  updated: string;
}

export interface GetContentsResponse {
  page: number;
  perPage: number;
  totalItems: number;
  totalPages: number;
  items: Content[];
}
