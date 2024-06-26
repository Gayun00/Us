"use client";

import { STORAGE_KEY, URL } from "@/constants";
import { RequestParams } from "@/types/httpRequest";

const headers: HeadersInit = {
  "Content-Type": "application/json; charset=utf-8",
};

const fetchRequest = <TParams>({
  path,
  method,
  queryParams,
  params,
  shouldAuthorize,
}: RequestParams<TParams>) => {
  const convertedParams = queryParams
    ? Object.entries(queryParams).reduce(
        (newObj: Record<string, string>, [key, value]) => {
          if (typeof value === "string") {
            newObj[key] = decodeURIComponent(value);
          } else if (typeof value === "number") {
            newObj[key] = value.toString();
          }
          return newObj;
        },
        {}
      )
    : "";

  if (shouldAuthorize) {
    const token =
      typeof window !== "undefined"
        ? localStorage.getItem(STORAGE_KEY.TOKEN)
        : "";
    headers.Authorization = token ? `Bearer ${token}` : "";
  }

  const searchParams = new URLSearchParams(convertedParams).toString();

  return fetch(
    `${URL.API_SERVER}${path}${searchParams ? `?${searchParams}` : ""}`,
    {
      headers,
      method,
      body: JSON.stringify(params),
    }
  ).then(async (res) => {
    if (res.status >= 200 && res.status < 300) {
      return res.json();
    }
    const rest = await res.json();
    throw new Error(rest.message);
  });
};

const handleRequest = () => {
  return {
    get<TParams, TResponse>(
      params: RequestParams<TParams>
    ): Promise<TResponse> {
      return fetchRequest<TParams>({ ...params, method: "get" });
    },

    post<TParams, TResponse>(
      params: RequestParams<TParams>
    ): Promise<TResponse> {
      return fetchRequest({ ...params, method: "post" });
    },

    put<TParams, TResponse>(
      params: RequestParams<TParams>
    ): Promise<TResponse> {
      return fetchRequest({ ...params, method: "put" });
    },

    delete<TParams, TResponse>(
      params: RequestParams<TParams>
    ): Promise<TResponse> {
      return fetchRequest({ ...params, method: "delete" });
    },
  };
};

export const request = handleRequest();
