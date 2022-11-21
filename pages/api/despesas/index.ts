import { NextApiHandler } from "next";
import apiDespesa from "../../../libs/apiDespesa";

const handlePostDespesa: NextApiHandler = async (req, res) => {
  const { titulo, valor } = req.body;

  const novaDespesa = await apiDespesa
    .addDespesa(titulo, parseInt(valor))
    .catch((e) => {
      console.log(e);
      res.json({ error: "Algo deu errado" });
    });

  if (novaDespesa) {
    res.status(201).json({ status: true, novadespesa: novaDespesa });
  }
};

const handler: NextApiHandler = (req, res) => {
  switch (req.method) {
    case "POST":
      handlePostDespesa(req, res);
      break;
  }
};

export default handler;
