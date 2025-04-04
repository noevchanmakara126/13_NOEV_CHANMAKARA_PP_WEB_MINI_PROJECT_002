// src/auth.j
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { loginService } from "@/service/logInService";

export const { handlers, auth, signIn, signOut, signUp } = NextAuth({
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        try {
          const user = await loginService(credentials);
          if (!user) {
            throw new Error("Invalid credentials");
          }
          return user;
        } catch (error) {
          console.error("Authorize error:", error);
          return null;
        }
      },
    }),
  ],

  secret: process.env.AUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },

  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.user = user;
      }
      return token;
    },
    session: async ({ session, token }) => {
      if (token && token.user) {
        session.user = token.user;
      }

      return session;
    },
  },
});
