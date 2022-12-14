import Image from "next/image";
import Link from "next/link";
import MenuBotoes from "../../MenuBotoes";
import styles from "./styles.module.css";

import Perfil from './perfil.svg'

import Analitic from './analitic.svg'

import Tema from './tema.svg'

import Chat from './chat.svg'


export const ConfigLayout = () => {
  return (
    <div className={styles.container}>
      {/* <div className={styles.header}>
        <div className={styles.headerFechar}>
          <Link href={"/"}>Fechar</Link>
        </div>
      </div> */}

         <div className={styles.config}>
           <ul>
               <li>
                  <Link href="/perfil">
                       <Image src={Perfil} alt="" />
                       <span className={styles.texto}>Perfil</span>
                  </Link>
                </li>

                <li>
                  <Link href="/config">
                       <Image src={Analitic} alt="" />
                       <span className={styles.texto}>Configurar Relatorio</span>
                  </Link>
                </li>

                <li>
                  <Link href="/config">
                       <Image src={Tema} alt="" />
                       <span className={styles.texto}>Tema</span>
                  </Link>
                </li>
             </ul>
        </div>

        <div className={styles.info}>
           <ul>
               <li>
                  <Link href="/config">
                       <Image src={Chat} alt="" />
                       <span className={styles.texto}>Suporte</span>
                  </Link>
                </li>
                <li>
                  <Link href="/config">
                       <Image src={Perfil} alt="" />
                       <span className={styles.texto}>Termos de uso</span>
                  </Link>
                </li>
                <li>
                  <Link href="/config">
                       <Image src={Perfil} alt="" />
                       <span className={styles.texto}>Politica de Privacidade</span>
                  </Link>
                </li>
           </ul>
        </div>
      
      <MenuBotoes />
  </div>
  );
};

