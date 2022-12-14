import Image from "next/image";
import Link from "next/link";
import Router from "next/router";
import { useState } from "react";
import { Botao } from "../../Botao";
import { Header } from "../../Header";
import { InputField } from "../../InputField";
import MenuBotoes from "../../MenuBotoes";

import styles from "./styles.module.css";

const CadastroLayout = () => {
  const [nome, setNome] = useState("");

  const [senha, setSenha] = useState("");

  const Teste = () => {
    Router.push("/cadastro_sucesso");
  };
  return (
    <div className={styles.container}>
      {/* <div className={styles.header}>
        <div className={styles.headerFechar}>
          <Link href={"/"}>Fechar</Link>
        </div>
      </div> */}

      <div className={styles.header2} style={{ color: "#004aad" }}>
        Up economy
      </div>
      <div
        className={styles.subtitulo}
        style={{ borderColor: "#004aad", color: "#004aad" }}
      >
        Preencha os campos para criar o seu cadastro
      </div>
      {/* <div className={styles.linha}></div> */}

      <div className={styles.formArea}>
        <div className={styles.inputArea}>
          <InputField
            type="text"
            color="#004aad"
            onChange={setNome}
            placeholder="Seu nome"
            value={nome}
          />
        </div>

        <div className={styles.inputArea}>
          <h5>Data de nascimento</h5>
          <InputField
            type="date"
            color="#004aad"
            onChange={setNome}
            placeholder="Data de nascimento"
            value={nome}
          />
        </div>

        <div className={styles.inputArea}>
          <InputField
            type="text"
            color="#004aad"
            onChange={setNome}
            placeholder="Telefone ou Whatsapp"
            value={nome}
          />
        </div>

        <div className={styles.inputArea}>
          <InputField
            type="text"
            color="#004aad"
            onChange={setNome}
            placeholder="digite seu e-mail"
            value={nome}
          />
        </div>

        <div className={styles.inputArea}>
          <InputField
            type="text"
            color="#004aad"
            onChange={setSenha}
            placeholder="Crie sua senha"
            value={senha}
          />
        </div>

        <div className={styles.inputArea}>
          <InputField
            type="text"
            color="#004aad"
            onChange={setSenha}
            placeholder="Repita sua senha"
            value={senha}
          />
        </div>

        <div className={styles.inputArea}>
          <label className={styles.label}>Quer se cadastrar como?</label>
          <select className={styles.select}>
            <option className={styles.option} value="selecione">
              selecione
            </option>
            <option className={styles.option} value="padrao">
              PADRÃO
            </option>
            <option className={styles.option} value="estudante">
              ESTUDANDE
            </option>
            <option className={styles.option} value="empreededor">
              EMPREEDEDOR
            </option>
          </select>
        </div>
        <div className={styles.inputArea}>
          Li e concordo com os termos! <input type="checkbox" />
        </div>

        <div className={styles.inputArea}>
          <Botao
            color="#004aad"
            label="Cadastrar"
            onClick={Teste}
            fill={true}
          />
        </div>
      </div>

      <div className={styles.JaTemArea} style={{ borderColor: "#004aad" }}>
        Já tem cadastro?
        <Link style={{ color: "#004aad" }} href={`/login2`}>Fazer Login
          
        </Link>
      </div>
    </div>
  );
};

export default CadastroLayout;
