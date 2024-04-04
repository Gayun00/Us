import {
  GetContentByIdParams,
  GetContentByIdResponse,
  GetContentsResponse,
  GetContentsSearchParams,
} from "@/types/httpRequest";
import { request } from "@/utils/httpRequest";

export const getContents = (queryParams: GetContentsSearchParams) => {
  return request.get<any, GetContentsResponse>({
    path: "/posts/records",
    queryParams,
    shouldAuthorize: true,
  });
};

export const getContentById = ({ id, expand }: GetContentByIdParams) => {
  return request.get<any, GetContentByIdResponse>({
    path: `/posts/records/${id}`,
    queryParams: { expand },
    shouldAuthorize: true,
  });
};
