import Head from "next/head";
import styles from "../styles/Usuarios.module.css";
import api from "../libs/api";
import { User } from "../types/User";

type Props = {
  users: User[];
};

const Usuarios = ({ users }: Props) => {
  return (
    <div>
      <Head>
        <title>Usuários</title>
      </Head>
      <h1 className={styles.h1}>Página de usuarios</h1>

      <ul>
        {users.map((item, index) => (
          <li key={index}>
            {item.name} - {item.id} - {item.estado}
          </li>
        ))}
      </ul>
    </div>
  );
};

export const getServerSideProps = async () => {
  // DRY = Não se repita o mesmo codigo
  const users = await api.getPegarTodosUser(0);

  return {
    props: {
      users,
    },
  };
};
export default Usuarios;
