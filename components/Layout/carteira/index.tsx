import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";
import ImgCarteira from "./carteira.svg";
import MenuBotoes from "../../MenuBotoes";

const CarteiraLayout = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerFechar}>
          <Link href={"/"}>Fechar</Link>
        </div>
      </div>
      <div className={styles.conteudoArea}>
        <div className={styles.carteira}>
          <Image src={ImgCarteira} width={50} height={50} alt="" />
        </div>
        <div className={styles.saldo}>
          <p className={styles.p}>R$</p> 1,200
        </div>
        <div className={styles.depositar}>
          <Link href={"/deposito"}>Adicionar</Link>
        </div>
      </div>

      <div className={styles.conteudoHistorico}>
        <div className={styles.entrada}>
          <div className={styles.entradaconteudo}>
            <h3>Entrada</h3>
            <ul className={styles.ul}>
              <li className={styles.li}>
                <p className={styles.p}>+</p>R$ 25 hoje
              </li>
              <li className={styles.li}>
                <p className={styles.p}>+</p>R$ 25 hoje
              </li>
              <li className={styles.li}>
                <p className={styles.p}>+</p>R$ 25 ontem
              </li>
              <li className={styles.li}>
                <p className={styles.p}>+</p>R$ 25 há 2 dias
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.saida}>
          <div className={styles.saidaconteudo}>
            <h3>saída</h3>
            <ul className={styles.ul}>
              <li className={styles.li}>
                <p className={styles.p}>-</p>R$ 25 hoje
              </li>
              <li className={styles.li}>
                <p className={styles.p}>-</p>R$ 25 hoje
              </li>
              <li className={styles.li}>
                <p className={styles.p}>-</p>R$ 25 ontem
              </li>
              <li className={styles.li}>
                <p className={styles.p}>-</p>R$ 25 há 2 dias
              </li>
            </ul>
          </div>
        </div>
      </div>
      <MenuBotoes />
    </div>
  );
};

export default CarteiraLayout;
