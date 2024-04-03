import { getExampleRequest } from "@/apis";
import { useQuery } from "@tanstack/react-query";

const queryKeys = {
  all: ["example"] as const,
};

export const useExampleQuery = () => {
  return useQuery({
    queryKey: queryKeys.all,
    queryFn: async () => getExampleRequest,
  });
};
