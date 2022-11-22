import prisma from "./prisma";

export default {
  addDespesa: async (titulo: string, valor: string, userId: number) => {
    return await prisma.despesa.createMany({
      data: {
        titulo: titulo,
        valor: valor,
        userId: userId,
      },
    });
  },
};
