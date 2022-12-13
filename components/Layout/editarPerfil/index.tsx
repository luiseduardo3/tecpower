import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";

export const EdiatarPerfilLayout = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerFechar}>
          <Link href={"/perfil"}>Fechar</Link>
        </div>
        <div className={styles.headerEditar}>
          <Link href={"/"}>Cancelar</Link>
        </div>
      </div>

      <div className={styles.headerTitulo}>
        <h1 className={styles.h1}>ATUALIZAR DADOS</h1>
      </div>

      <div className={styles.inforArea}>
        <div className={styles.InfoNome}>
          <h4 className={styles.h4}>Nome : </h4> <h4>Luisa Eduarda</h4>{" "}
          <h4 className={styles.h4Editar} style={{ color: "#fff" }}>
            Editar
          </h4>
        </div>
        <div className={styles.InfoIdade}>
          <h4 className={styles.h4}>Data Nascimento : </h4> <h4>03/10/1998</h4>{" "}
          <h4 className={styles.h4Editar} style={{ color: "#fff" }}>
            Editar
          </h4>
        </div>
        <div className={styles.InfoEmail}>
          <h4 className={styles.h4}>e-mail : </h4> <h4>luis@gmail.com</h4>{" "}
          <h4 className={styles.h4Editar} style={{ color: "#fff" }}>
            Editar
          </h4>
        </div>
        <div className={styles.InfoEmail}>
          <h4 className={styles.h4}>Telefone/Whastapp: </h4>{" "}
          <h4>(88)98888888</h4>{" "}
          <h4 className={styles.h4Editar} style={{ color: "#fff" }}>
            Editar
          </h4>
        </div>
        <div className={styles.InfoSenha}>
          <h4 className={styles.h4}>Nova senha : </h4> <h4>*******</h4>{" "}
          <h4 className={styles.h4Editar} style={{ color: "#fff" }}>
            Editar
          </h4>
        </div>

        <div className={styles.InfoSenha}>
          <h4 className={styles.h4}>TIPO : </h4> <h4>ESTUDANTE</h4>{" "}
          <h4 className={styles.h4Editar} style={{ color: "#fff" }}>
            ALTERAR
          </h4>
        </div>

        <div className={styles.salvar}>SALVAR</div>
      </div>
    </div>
  );
};
