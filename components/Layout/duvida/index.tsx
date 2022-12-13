import Image from "next/image";
import Link from "next/link";
import MenuBotoes from "../../MenuBotoes";
import styles from "./styles.module.css";
const DuvidaLayout = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerFechar}>
          <Link href={"/"}>Fechar</Link>
        </div>
      </div>
      
      <MenuBotoes />
    </div>
  );
};

export default DuvidaLayout;
