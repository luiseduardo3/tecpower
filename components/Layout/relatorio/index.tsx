import Image from "next/image";
import Link from "next/link";
import MenuBotoes from "../../MenuBotoes";
import styles from "./styles.module.css";

import Analitic from './analitic.svg'

import Calendario from './calendario.svg'

import Google from './google.svg'

import Whatsapp from './whatsapp.svg'

import Print from './print.svg'



export const RelatorioLayout = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerFechar}>
          <Link href={"/"}>Fechar</Link>
        </div>
      </div>

  <div className={styles.relatorioImg}>
    <Image src={Calendario} alt=""/>
    <p>RELATORIOS</p>
  </div>

  <div className={styles.tituloBtn}>
  <h5 className={styles.h5}>TIPO</h5>
  
          <select className={styles.select}>
            <option className={styles.option} value="selecione">
            ENTRADA | SAÍDA
            </option>
            <option className={styles.option} value="padrao">
            ATIVIDADES
            </option>
            <option className={styles.option} value="estudante">
              DESAFIOS CONCLUÍDOS
            </option>
            <option className={styles.option} value="empreededor">
              EMPREEDEDOR
            </option>
          </select>
          </div>
  

          <div className={styles.Image}>
          <img src="/relatorio.png" alt="" />
          </div>

         <div className={styles.config}>
           <ul>
               <li>
                  <Link href="/perfil">
                       <Image src={Print} alt="" />
                       <span className={styles.texto}>Imprimir Relatorio</span>
                  </Link>
                </li>
                <li>
                  <Link href="/config">
                       <Image src={Calendario} alt="" />
                       <span className={styles.texto}>Envie por e-mail</span>
                  </Link>
                </li>
             </ul>
        </div>

        {/* <div className={styles.info}>
           <ul>
               <li>
                  <Link href="/config">
                       <Image src={Google} alt="" />
                       <span className={styles.texto}>Suporte</span>
                  </Link>
                </li>
                <li>
                  <Link href="/config">
                       <Image src={Google} alt="" />
                       <span className={styles.texto}>Termos de uso</span>
                  </Link>
                </li>
                <li>
                  <Link href="/config">
                       <Image src={Google} alt="" />
                       <span className={styles.texto}>Politica de Privacidade</span>
                  </Link>
                </li>
           </ul>
        </div> */}
      
      <MenuBotoes />
  </div>
  );
};

