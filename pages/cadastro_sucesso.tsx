import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Router from "next/router";
import { Botao } from "../components/Botao";

import styles from "../styles/CadastroSu.module.css";

const CadastroSucesso = () => {
  const handleSubmit = () => {
    Router.push("/login2");
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Cadastrado com sucesso </title>
      </Head>

      <div className={styles.header} style={{ color: "#004aad" }}>
        Cadastrado com sucesso!
      </div>
      <div className={styles.img}>
        <Image src="/tmp/sucesso.png" alt="" width={200} height={200} />
      </div>
      <div
        className={styles.subtitulo}
        style={{ borderColor: "#004aad", color: "#004aad" }}
      >
        Volte a tela de Login e use suas credencias
      </div>
      <div className={styles.inputArea}>
        <Botao
          color={"#004aad"}
          label="Logar"
          onClick={handleSubmit}
          fill={true}
        />
      </div>
    </div>
  );
};

export default CadastroSucesso;
