import Link from "next/link";
import { useAppContext } from "../../contexts/app";
import { useFormato } from "../../libs/useFormato";
import { BannerType } from "../../types/BannerType";
import { Produto } from "../../types/Produto";
import styles from "./styles.module.css";

type Props = {
  data: Produto;
};

export const ProdutoItem = ({ data }: Props) => {
  const { tenant } = useAppContext();

  const formato = useFormato();
  return (
    <Link
      href={`/${tenant?.slug}/produto/${data.id}`}
      className={styles.container}
    >
      <div
        className={styles.head}
        style={{ backgroundColor: tenant?.secondColor }}
      ></div>
      <div className={styles.info}>
        <div className={styles.img}>
          <img src={data.imageProduto} alt="" />
        </div>
        <div className={styles.catNome}>{data.categoriaProduto}</div>
        <div className={styles.produtoNome}>{data.nomeProduto}</div>
        <div className={styles.preco} style={{ color: tenant?.mainColor }}>
          {formato.formatoPreco(data.precoProduto)}
        </div>
      </div>
    </Link>
  );
};
