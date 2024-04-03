import { login } from "@/apis";
import { useMutation } from "@tanstack/react-query";

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: async ({ id, password }: { id: string; password: string }) =>
      login({ id, password }),
  });
};
