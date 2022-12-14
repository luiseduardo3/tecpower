const Teste = () => {

}

export default Teste;

// import NextAuth, { NextAuthOptions } from "next-auth";

// import CredentialsProvider from "next-auth/providers/credentials";

// import api from "../../../libs/api";
// import { AuthUser } from "../../../types/AuthUser";

// export const authOptions: NextAuthOptions = {
//   secret: process.env.NEXTAUTH_SECRET,
//   providers: [
//     CredentialsProvider({
//       id: "credentials",
//       credentials: {
//         email: { label: "E-mail", type: "text" },
//         senha: { label: "Senha", type: "password" },
//       },
//       authorize: async (credentials, req) => {
//         if (credentials && credentials.email && credentials.senha) {
//           const user = await api.getUserFromEmail(credentials.email);
//           if (user) {
//             return {
//               id: user.id,
//               name: user.name,
//               idade: user.idade,
//               estado: user.estado,
//               cidade: user.cidade,
//               email: user.email,
//               carteira: user.carteira,
//               nivel: user.nivel,
//               tipo: user.tipo,
//               despesa: user.despesa,
//             } as any;
//           }
//         }
//         return null;
//       },
//     }),
//   ],
//   callbacks: {
//     jwt: async ({ token, user }) => {
//       if (user) {
//         token.user = user;
//       }
//       return token;
//     },
//     session: async ({ session, token }) => {
//       if (token) {
//         session.user = token.user as AuthUser;
//       }
//       return session;
//     },
//   },
//   pages: {
//     signIn: "/login", // página para logar
//   },
// };

// export default NextAuth(authOptions);
