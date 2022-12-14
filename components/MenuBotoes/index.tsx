import styles from "./styles.module.css";

import Carteira from "./carteira.svg";
import Despesa from "./despesa.svg";
import Perfil from "./perfil.svg";
import Home from "./home.svg";
import Image from "next/image";
import Confi from "./confi.svg";

import Analitic from './analitic.svg'
import { useState } from "react";
import Link from "next/link";

const MenuBotoes = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className={styles.navigation}>
      <ul>
        <li className={styles.list}>
          <Link href="/store">
            <span className={styles.icon}>
              <Image src={Home} alt="" />
            </span>
            <span className={styles.texto}>Home</span>
          </Link>
        </li>
        <li className={styles.list}>
          <Link href="/servico">
            <span className={styles.icon}>
              <Image src={Despesa} alt="" />
            </span>
            <span className={styles.texto}>Adicionar</span>
          </Link>
        </li>
        <li className={styles.list}>
          <Link href="/carteira">
            <span className={styles.icon}>
              <Image src={Carteira} alt="" />
            </span>
            <span className={styles.texto}>Carteira</span>
          </Link>
        </li>
        <li className={styles.list}>
          <Link href="/relatorio">
            <span className={styles.icon}>
              <Image src={Analitic} alt="" />
            </span>
            <span className={styles.texto}>Relatorio</span>
          </Link>
        </li>
        <li className={styles.list}>
          <Link href="/config">
            <span className={styles.icon}>
              <Image src={Confi} alt="" />
            </span>
            <span className={styles.texto}>Configura</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MenuBotoes;
