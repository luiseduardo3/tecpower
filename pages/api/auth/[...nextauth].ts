import NextAuth, { NextAuthOptions } from "next-auth";

import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      id: "credentials",
      credentials: {
        email: { label: "E-mail", type: "text" },
        senha: { label: "Senha", type: "password" },
      },
      authorize: async (credentials, req) => {
        if (credentials?.email === "luis@teste.com") {
          const user = {
            id: "123",
            name: "Luis",
            email: "luis@teste.com",
            role: "USER",
          };
          return user;
        }
        return null;
      },
    }),
  ],
};

export default NextAuth(authOptions);
