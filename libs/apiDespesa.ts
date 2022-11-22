import prisma from "./prisma";

export default {
  addDespesa: async (titulo: string, valor: string) => {
    return await prisma.despesa.createMany({
      data: {
        titulo: titulo,
        valor: valor,
      },
    });
  },
};
