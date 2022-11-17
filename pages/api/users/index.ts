import { NextApiHandler } from "next";
import { Users } from "../../../utils/users";
import prisma from "../../../libs/prisma";
import api from "../../../libs/api";

// GET mostre todos usuarios
const handlerGet: NextApiHandler = async (req, res) => {
  // const users = await prisma.usuario.findMany(); //assim pega tudo

  const { page } = req.query;

  const users = await api.getPegarTodosUser(parseInt(page as string)); // ta vindo de libs/api

  res.json(users);
};

//POST iserindo usuarios
const handlerPost: NextApiHandler = async (req, res) => {
  const { name, idade, estado, cidade, email, senha, carteira, nivel } =
    req.body;

  const novoUser = await api
    .addUser(name, idade, estado, cidade, email, senha, carteira, nivel)
    .catch(() => {
      res.json({ error: "E-mail já existe" }); // se de errado
    });

  if (novoUser) {
    res.status(201).json({ status: true, user: novoUser }); // se der certo
  }
};

const handlerPut: NextApiHandler = async (req, res) => {
  res.json({ status: "put" });
};

const handler: NextApiHandler = (req, res) => {
  switch (req.method) {
    case "GET":
      handlerGet(req, res);
      break;
    case "POST":
      handlerPost(req, res);
      break;
    case "PUT":
      handlerPut(req, res);
      break;
  }
};

export default handler;
