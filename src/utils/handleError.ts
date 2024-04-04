import { refreshAuthToken } from "@/apis/user";
import { STORAGE_KEY } from "@/constants";

export const handleError = async (errorMessage: string) => {
  const isTokenExpired = errorMessage === "token is expired";
  if (isTokenExpired) {
    if (typeof window !== "undefined") {
      const res = await refreshAuthToken();
      localStorage.setItem(STORAGE_KEY.TOKEN, res.token);
    }
  }
};
