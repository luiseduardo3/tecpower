import Link from "next/link";
import MenuBotoes from "../../MenuBotoes";
import styles from "./styles.module.css";

export const ListaLayout = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerFechar}>
          <Link href={"/servico"}>Fechar</Link>
        </div>
      </div>

      <div className={styles.listas}>
        <h3># LISTAS</h3>
        <Link href={"/nova-lista"}>ADICIONAR NOVA</Link>
        <ul className={styles.ul}>
          <li className={styles.li}>
            1 - Estudar hoje #React{" "}
            <a className={styles.editar} href="">
              Editar
            </a>
            <a className={styles.excluir} href="">
              Excluir
            </a>
          </li>
          <li className={styles.li}>
            2 - Dormi as 23pm{" "}
            <a className={styles.editar} href="">
              Editar
            </a>
            <a className={styles.excluir} href="">
              Excluir
            </a>
          </li>
          <li className={styles.li}>
            3 - Lembrar de comprar pão{" "}
            <a className={styles.editar} href="">
              Editar
            </a>
            <a className={styles.excluir} href="">
              Excluir
            </a>
          </li>
          <li className={styles.li}>
            4 - Academia as 19pm{" "}
            <a className={styles.editar} href="">
              Editar
            </a>
            <a className={styles.excluir} href="">
              Excluir
            </a>
          </li>
        </ul>
      </div>

      <MenuBotoes />
    </div>
  );
};
