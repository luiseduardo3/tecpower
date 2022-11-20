import { User } from "./User";

export type AuthUSer = User & {
  role: string;
};
