import Head from "next/head";

import styles from "../../styles/Usuarios.module.css";

import api from "../../libs/api";

import { User } from "../../types/User";

import { useState } from "react";
import { redirect } from "next/dist/server/api-utils";
import Link from "next/link";
import axios from "axios";
import { useSession } from "next-auth/react";

type Props = {
  users: User[];
};

const Usuarios = ({ users }: Props) => {
  const { data: session, status: sessionStatus } = useSession();

  const [showMore, setShowMore] = useState(true);

  const [loading, setLoading] = useState(false);

  const [pageCount, setPageCount] = useState(1);

  const [userList, setUserList] = useState<User[]>(users);

  const CarregarMaisUser = async () => {
    if (!loading) {
      setLoading(true);

      // const req = await fetch(`/api/users?page=${pageCount + 1}`); // substitui com o axio

      // const json = await req.json(); // substitui com o axio

      const json = await axios.get(`/api/users?page=${pageCount + 1}`); // substitui as duas de cima

      if (json.data.status) {
        if (json.data.usuarios.length === 0) {
          setShowMore(false);
        }
        setUserList([...userList, ...json.data.usuarios]);
      }

      setLoading(false);

      setPageCount(pageCount + 1);
    }
  };

  const CarregarMenosUser = async () => {};
  return (
    <div>
      <Head>
        <title>Usuários</title>
      </Head>

      {sessionStatus === "loading" && <div>Carregando...</div>}

      {sessionStatus === "unauthenticated" && (
        <div>Você não tem permissão para acessar esté conteúdo</div>
      )}

      {sessionStatus === "authenticated" && (
        <>
          <h1 className={styles.h1}>Página de usuarios</h1>

          <Link className={styles.link} href={`/usuarios/novo`}>
            Novo Usuário
          </Link>

          <ul>
            {userList.map((item, index) => (
              <li key={index}>
                {item.name} - {item.id} - {item.estado} - {item.email}
              </li>
            ))}
          </ul>

          {showMore && (
            <button onClick={CarregarMaisUser}>Carregar mais</button>
          )}
          {!showMore && (
            <button onClick={CarregarMenosUser}>Carregar menos</button>
          )}
        </>
      )}
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
