import Image from "next/image";
import Link from "next/link";
import MenuBotoes from "../../MenuBotoes";
import styles from "./styles.module.css";

const PerfilLayout = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerFechar}>
          <Link href={"/"}>Fechar</Link>
        </div>
        <div className={styles.headerEditar}>
          <Link href={"/editar_perfil"}>Editar</Link>
        </div>
      </div>
      <div className={styles.imageArea}>
        <div className={styles.headerPerfilImage}>
          <Image src={"/tmp/imgperfil.png"} alt="" width={100} height={100} />
        </div>
      </div>
      <div className={styles.inforArea}>
        <div className={styles.nivel}>NIVEL  1</div>
        <div className={styles.infoTipo}>
          <h1>#ESTUDANTE</h1>
        </div>
        <div className={styles.InfoNome}>
          <h3>Seu Nome : </h3> <h4>Luisa Eduarda</h4>
        </div>
        <div className={styles.InfoIdade}>
          <h3>Data Nascimento : </h3> <h4>03/10/1998</h4>
        </div>
        <div className={styles.InfoEmail}>
          <h3>seu e-mail : </h3> <h4>luisa@gmail.com</h4>
        </div>
        <div className={styles.InfoEmail}>
          <h3>Telefone/Whats : </h3> <h4>(88)988888888</h4>
        </div>
        <div className={styles.InfoSenha}>
          <h3>Sua Senha : </h3> <h4>*******</h4>
        </div>
        <div className={styles.inforSaldo}>
          <h3>Saldo : </h3> <h4>R$1,200</h4>
        </div>
      </div>

      <MenuBotoes />
    </div>
  );
};

export default PerfilLayout;
