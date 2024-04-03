import { getContents } from "@/apis/contents";
import { GetContentsResponse } from "@/types/httpRequest";
import { useInfiniteQuery } from "@tanstack/react-query";

const queryKey = {
  all: ["contents"],
};

const CONTENTS_LIMIT = 5;

export const useContentsInfiniteQuery = () => {
  return useInfiniteQuery({
    queryKey: queryKey.all,
    queryFn: async ({ pageParam = 0 }) => {
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
