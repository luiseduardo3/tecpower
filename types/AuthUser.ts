import { User } from "./User";

export type AuthUser = User & {
  tipo: string;
};
