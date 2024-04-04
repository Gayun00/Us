import {
  LoginRequest,
  LoginResponse,
  RefreshTokenResponse,
} from "@/types/httpRequest";
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

export const refreshAuthToken = () => {
  return request.post<null, RefreshTokenResponse>({
    path: "/users/auth-refresh",
    shouldAuthorize: true,
  });
};
