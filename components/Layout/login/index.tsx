import Head from "next/head";
import Link from "next/link";
import Router from "next/router";
import { useState } from "react";
import { Botao } from "../../Botao";
import { Header } from "../../Header";
import { InputField } from "../../InputField";

import styles from "./styles.module.css";

export const LoginLayout = () => {
  const [email, setEmail] = useState("luis@gmail.com");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    Router.push("/servico");
  };
  const handleCadastar = () => {
    Router.push(`/cadastro`);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Login </title>
      </Head>

      <div className={styles.header} style={{ color: "#004aad" }}>
        Up economy
      </div>
      <div
        className={styles.subtitulo}
        style={{ borderColor: "#004aad", color: "#004aad" }}
      >
        Use suas credenciais para realizar o login
      </div>
      {/* <div className={styles.linha}></div> */}

      <div className={styles.formArea}>
        <div className={styles.inputArea}>
          <InputField
            type="text"
            color={"#004aad"}
            placeholder="Digite seu e-mail"
            value={email}
            onChange={setEmail}
          />
        </div>
        <div className={styles.inputArea}>
          <InputField
            type="password"
            color={"#004aad"}
            placeholder="Digite sua senha"
            value={password}
            onChange={setPassword}
          />
        </div>
        <div className={styles.inputArea}>
          <Botao
            color={"#004aad"}
            label="Entrar"
            onClick={handleSubmit}
            fill={true}
          />
        </div>
      </div>

      <div className={styles.esqueciArea} style={{ borderColor: "#004aad" }}>
        Esqueceu sua senha?
        <Link style={{ color: "#004aad" }} href={`/recuperar-senha`}>
          clique aqui
        </Link>
      </div>

      <div className={styles.linha}></div>

      <div className={styles.cadastrarArea}>
        <Botao
          color="#004aad"
          label="Quero me cadastrar"
          onClick={handleCadastar}
          fill={false}
        />
      </div>
    </div>
  );
};
