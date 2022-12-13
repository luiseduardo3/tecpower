import Link from "next/link";
import MenuBotoes from "../../MenuBotoes";
import styles from "./styles.module.css";

export const DespesaLayout = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerFechar}>
          <Link href={"/servico"}>Fechar</Link>
        </div>
      </div>

      <div className={styles.listas}>
        <h3># DESPESAS</h3>
        <Link href={"/nova-lista"}>ADICIONAR NOVA</Link>
        <ul className={styles.ul}>
          <li className={styles.li}>
            1 - 10 Pães{" "}
            <a className={styles.preco} href="">
              R$5,60
            </a>
            <a className={styles.editar} href="">
              Editar
            </a>
            <a className={styles.excluir} href="">
              Excluir
            </a>
          </li>
          <li className={styles.li}>
            2 - cinema{" "}
            <a className={styles.preco} href="">
              R$12,99
            </a>
            <a className={styles.editar} href="">
              Editar
            </a>
            <a className={styles.excluir} href="">
              Excluir
            </a>
          </li>
          <li className={styles.li}>
            3 - Uber táxi{" "}
            <a className={styles.preco} href="">
              R$12,99
            </a>
            <a className={styles.editar} href="">
              Editar
            </a>
            <a className={styles.excluir} href="">
              Excluir
            </a>
          </li>
          <li className={styles.li}>
            4 - Almoço{" "}
            <a className={styles.preco} href="">
              R$12,99
            </a>
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
