import {
  GetContentsResponse,
  GetContentsSearchParams,
} from "@/types/httpRequest";
import { request } from "@/utils/httpRequest";

export const getContents = (queryParams: GetContentsSearchParams) => {
  return request.get<any, GetContentsResponse>({
    path: "/posts/records",
    queryParams,
  });
};
