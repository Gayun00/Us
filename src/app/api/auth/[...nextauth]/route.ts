import { URL } from "@/constants";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const res = await fetch(URL.API_SERVER + "/users/auth-with-password", {
          method: "POST",
          body: JSON.stringify({
            identity: "johndoh@us-all.cc",
            password: "qwer1234",
          }),
          headers: { "Content-Type": "application/json" },
        });
        const user = await res.json();
        if (user.token) {
          return user.record;
        }
        return null;
      },
    }),
  ],
});

export { handler as GET, handler as POST };
