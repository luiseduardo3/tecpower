import Head from "next/head";
import Link from "next/link";
import Router from "next/router";
import { useState } from "react";
import { Botao } from "../../Botao";
import { InputField } from "../../InputField";
import MenuBotoes from "../../MenuBotoes";

import styles from "./styles.module.css";

export const NovaListaLAyout = () => {
  const [email, setEmail] = useState("luis@gmail.com");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    Router.push("/listas");
  };
  const handleSubmit2 = () => {
    Router.push(`/listas`);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Nova Lista </title>
      </Head>

      <div className={styles.header} style={{ color: "#004aad" }}>
        LISTA | ATIVIDADE
      </div>

      <div className={styles.formArea}>
        <div className={styles.inputArea}>
            <label htmlFor="">Titulo</label>
          <InputField
            type="text"
            color={"#004aad"}
            placeholder="Titulo"
            value={email}
            onChange={setEmail}
          />
        </div>
        <div className={styles.inputArea}>
            <label htmlFor="">Descrição</label>
          <InputField
            type="text"
            color={"#004aad"}
            placeholder="Descrição"
            value={password}
            onChange={setPassword}
          />
        </div>


        <div className={styles.inputArea}>
            <label className={styles.agenda} htmlFor="">Data (Opcional)</label>
          
          <input type="date" />
        </div>
        <div className={styles.inputArea}>
            <label className={styles.agenda} htmlFor="">Adicionar ao Google Agenda (Opcional)</label>
          
          <input type="checkbox" />
        </div>

        <div className={styles.inputArea}>
          <Botao
            color={"#004aad"}
            label="Adicionar"
            onClick={handleSubmit}
            fill={true}
          />
        </div>

        <div className={styles.inputArea}>
          <Botao
            color={"#ff0000"}
            label="Cancelar"
            onClick={handleSubmit2}
            fill={true}
          />
        </div>
      </div>

      

      <div className={styles.linha}></div>
      
    </div>
  );
};
