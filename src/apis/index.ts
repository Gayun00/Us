import { request } from "@/utils/httpRequest";

export const getExampleRequest = () => {
  return request.get({
    path: "/posts/records",
  });
};
