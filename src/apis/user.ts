import { LoginRequest, LoginResponse } from "@/types/httpRequest";
import { request } from "@/utils/httpRequest";

export const login = ({ id, password }: { id: string; password: string }) => {
  return request.post<LoginRequest, LoginResponse>({
    path: "/users/auth-with-password",
    params: {
      identity: id,
      password,
    },
  });
};
