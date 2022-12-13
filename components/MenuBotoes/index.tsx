import styles from "./styles.module.css";

import Carteira from "./carteira.svg";
import Despesa from "./despesa.svg";
import Perfil from "./perfil.svg";
import Home from "./home.svg";
import Image from "next/image";
import Duvidas from "./duvida.svg";
import { useState } from "react";
import Link from "next/link";

const MenuBotoes = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className={styles.navigation}>
      <ul>
        <li className={styles.list}>
          <Link href="/">
            <span className={styles.icon}>
              <Image src={Home} alt="" />
            </span>
            <span className={styles.texto}>Home</span>
          </Link>
        </li>
        <li className={styles.list}>
          <Link href="/perfil">
            <span className={styles.icon}>
              <Image src={Perfil} alt="" />
            </span>
            <span className={styles.texto}>Perfil</span>
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
          <Link href="/servico">
            <span className={styles.icon}>
              <Image src={Despesa} alt="" />
            </span>
            <span className={styles.texto}>Adicionar</span>
          </Link>
        </li>

        <li className={styles.list}>
          <Link href="/duvidas">
            <span className={styles.icon}>
              <Image src={Duvidas} alt="" />
            </span>
            <span className={styles.texto}>Duvidas</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MenuBotoes;
