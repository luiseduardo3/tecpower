import NextAuth from "next-auth/next";
import { AuthUSer } from "./AuthUser";

declare module "next-auth" {
  interface Session {
    user: AuthUSer;
  }
}
