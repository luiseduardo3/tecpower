export const Teste = () => {
  
}

// import { NextApiHandler } from "next";
// import { Users } from "../../../utils/users";
// import prisma from "../../../libs/prisma";
// import api from "../../../libs/api";

// //ler a informação do usuario
// const handlerGet: NextApiHandler = async (req, res) => {
//   console.log(req.query, "aqui");
//   const { id } = req.query;

//   const user = await api.getUser(parseInt(id as string));

//   if (user) {
//     res.json({ status: true, user });
//     return;
//   }

//   res.json({ error: "Usuario não encontado" });
// };

// const handlerPut: NextApiHandler = async (req, res) => {
//   const { name, ativo, carteira, nivel } = req.body;
//   const { id } = req.query;

//   const updateUser = await api.updateUser(
//     parseInt(id as string),
//     name,
//     ativo,
//     carteira,
//     nivel
//   );

//   if (updateUser) {
//     res.json({ status: true, user: updateUser });
//     return;
//   }
//   res.json({ error: "Não foi possivel alterar este usuário" });
// };

// const handlerDelete: NextApiHandler = async (req, res) => {
//   const { id } = req.query;

//   const deleteUser = await api.deleteUser(parseInt(id as string)).catch(() => {
//     res.json({ error: "Usuário não encontrado" });
//   });

//   if (deleteUser) {
//     res.json({ status: true });
//   }
// };

// const handler: NextApiHandler = async (req, res) => {
//   switch (req.method) {
//     case "GET":
//       handlerGet(req, res);
//       break;

//     case "PUT":
//       handlerPut(req, res);
//       break;
//     case "DELETE":
//       handlerDelete(req, res);
//       break;
//   }
// };

// export default handler;
