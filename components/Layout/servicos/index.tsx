import Image from "next/image";
import Link from "next/link";
import MenuBotoes from "../../MenuBotoes";
import styles from "./styles.module.css";

const ServicosLayout = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerFechar}>
          <Link href={"/"}>Fechar</Link>
        </div>
      </div>

      <div className={styles.conteudo}>
        <div className={styles.despesas}>
          <h3># Despesas</h3>
          <Link href={"/nova-despesa"}>NOVA DESPESA</Link>
          <ul className={styles.ul}>
            <li className={styles.li}>
              1 - Comprar Pão{" "}
              <a className={styles.preco} href="">
                R$12,99
              </a>
            </li>
            <li className={styles.li}>
              2 - Lanche{" "}
              <a className={styles.preco} href="">
                R$12,99
              </a>
            </li>
            <li className={styles.li}>
              3 - Mc X-burge duplo{" "}
              <a className={styles.preco} href="">
                R$12,99
              </a>
            </li>
          </ul>

          <div className={styles.btnNovaDespesa}>
            <Link href={"/despesas"}>VER TODAS</Link>
          </div>
        </div>

        <div className={styles.listas}>
          <h3># Listas</h3>
          <Link href={"/nova-lista"}>NOVA LISTA</Link>
          <ul className={styles.ul}>
            <li className={styles.li}>1 - Estudar hoje #React</li>
            <li className={styles.li}>2 - Dormi as 23pm</li>
            <li className={styles.li}>3 - Lembrar de comprar pão</li>
          </ul>

          <div className={styles.btnNovaTarefa}>
            <Link href={"/listas"}>VER TODAS</Link>
          </div>
        </div>
      </div>

      <MenuBotoes />
    </div>
  );
};

export default ServicosLayout;
