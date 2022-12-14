import Head from "next/head";
import Link from "next/link";
import Router from "next/router";
import { useState } from "react";
import { Botao } from "../../Botao";
import { InputField } from "../../InputField";
import MenuBotoes from "../../MenuBotoes";

import styles from "./styles.module.css";

export const NovaDespesaLayou = () => {
  const [email, setEmail] = useState("luis@gmail.com");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    Router.push("/despesas");
  };
  const handleSubmit2 = () => {
    Router.push(`/despesas`);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Login </title>
      </Head>

      <div className={styles.header} style={{ color: "#004aad" }}>
        ADICIONE NOVA DESPESA
      </div>
      {/* <div className={styles.linha}></div> */}

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
            <label htmlFor="">Valor</label>
          <InputField
            type="number"
            color={"#004aad"}
            placeholder="Valor da despesa"
            value={password}
            onChange={setPassword}
          />
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
