import prisma from "./prisma";

export default {
  getPegarTodosUser: async (page: number) => {
    let perPage = 5; //itens por página

    //offset itens
    let offset = 0;
    if (page) {
      offset = (page - 1) * perPage;
    }

    const users = await prisma.usuario.findMany({
      skip: offset, // pular
      take: perPage, // quantos itens vai pegar

      where: {
        ativo: true,
      },
      select: {
        // selecionar os dados que aparece
        id: true,
        name: true,
        email: true,
        ativo: true,
        estado: true,
        tipo: true,
      },
      orderBy: {
        //ordenação, pode usar em nome também por exemplo name: "asc"
        id: "asc",
      },
    });
    return users;
  },
  addUser: async (
    name: string,
    idade: string,
    estado: string,
    cidade: string,
    email: string,
    senha: string,
    carteira: string,
    nivel: string
  ) => {
    return await prisma.usuario.create({
      data: {
        name: name,
        idade: idade,
        estado: estado,
        cidade: cidade,
        email: email,
        senha: senha,
        carteira: carteira,
        nivel: nivel,
      },
    });
  },
  getUser: async (id: number) => {
    const user = await prisma.usuario.findFirst({
      where: {
        id: id,
        ativo: true,
      },
      select: {
        // selecionar os dados que aparece
        id: true,
        name: true,
        estado: true,
        cidade: true,
        idade: true,
      },
    });
    return user;
  },
  updateUser: async (
    id: number,
    name?: string,
    ativo?: string,
    carteira?: string,
    nivel?: string
  ) => {
    let data: {
      name?: string;
      ativo?: boolean;
      carteira?: string;
      nivel?: string;
    } = {};

    if (name) {
      data.name = name;
    }
    if (carteira) {
      data.carteira = carteira;
    }
    if (ativo) {
      switch (ativo) {
        case "true":
        case "1":
          data.ativo = true;
          break;
        case "false":
        case "0":
          data.ativo = false;
      }
    }
    if (nivel) {
      data.nivel = nivel;
    }

    const updateUser = await prisma.usuario.update({
      where: { id: id },
      data: data,
    });
    return updateUser;
  },
  deleteUser: async (id: number) => {
    const deleteUser = await prisma.usuario.delete({
      where: {
        id: id,
      },
    });
    return deleteUser;
  },
};
