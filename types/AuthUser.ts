
import { User } from "./User";

export type AuthUser = User & {
  tipo: string;
} & {
  despesa: {
    id: number;
    titulo: string;
    valor: number;
    usuario_id: number;
  };
};
