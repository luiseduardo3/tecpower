import prisma from "./prisma";

export default {
  addDespesa: async (titulo: string, valor: number) => {
    return await prisma.despesa.create({
      data: {
        titulo: titulo,
        valor: valor,
      },
    });
  },
};
