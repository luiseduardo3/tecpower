const Teste = () => {

}

export default Teste;

// import { NextApiHandler } from "next";
// import apiDespesa from "../../../libs/apiDespesa";

// import prisma from "../../../libs/prisma";

// const handlePostDespesa: NextApiHandler = async (req, res) => {
//   const { titulo, valor, userId } = req.body;

//   const novaDespesa = await apiDespesa
//     .addDespesa(titulo, valor, parseInt(userId))
//     .catch((e) => {
//       console.log(e);
//       res.json({ error: "Algo deu muito errado :(" });
//     });
//   res.status(201).json({ status: true, novadespesa: novaDespesa });
// };
// const handler: NextApiHandler = (req, res) => {
//   switch (req.method) {
//     case "POST":
//       handlePostDespesa(req, res);
//       break;
//   }
// };

// export default handler;
