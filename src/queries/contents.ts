import { getContentById, getContents } from "@/apis/contents";
import { GetContentByIdParams, GetContentsResponse } from "@/types/httpRequest";
import { useQuery, useSuspenseInfiniteQuery } from "@tanstack/react-query";

export const contentsQueryKey = {
  all: ["contents"],
  content: (id: string) => [...contentsQueryKey.all, id],
};

export const CONTENTS_LIMIT = 5;

export const useContentsInfiniteQuery = () => {
  return useSuspenseInfiniteQuery({
    queryKey: contentsQueryKey.all,
    queryFn: ({ pageParam = 0 }) => {
      return getContents({
        expand: "news,author",
        perPage: CONTENTS_LIMIT,
        page: pageParam,
      });
    },

    getNextPageParam: ({ page, totalPages }: GetContentsResponse) => {
      const nextPage = page + 1;
      if (nextPage <= totalPages) {
        return nextPage;
      }
    },
    initialPageParam: 1,
  });
};

export const useContentByIdQuery = ({ id, expand }: GetContentByIdParams) => {
  return useQuery({
    queryKey: contentsQueryKey.content(id),
    queryFn: () => getContentById({ id, expand }),
  });
};
