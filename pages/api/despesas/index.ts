import { NextApiHandler } from "next";
import apiDespesa from "../../../libs/apiDespesa";

import prisma from "../../../libs/prisma";

const handlePostDespesa: NextApiHandler = async (req, res) => {
  const { titulo, valor, userId } = req.body;

  const addDespesa = await prisma.despesa.createMany({
    data: {
      titulo: titulo,
      valor: valor,
      usuariosId: userId,
    },
  });
  res.json(addDespesa);
};

const handler: NextApiHandler = (req, res) => {
  switch (req.method) {
    case "POST":
      handlePostDespesa(req, res);
      break;
  }
};

export default handler;
