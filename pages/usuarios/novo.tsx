export const Teste = () => {
  
}

// import Head from "next/head";

// import styles from "../../styles/UsuariosNovo.module.css";

// import api from "../../libs/api";

// import { User } from "../../types/User";

// import { useState } from "react";
// import Link from "next/link";
// import { useRouter } from "next/router";

// import axios from "axios";

// const UsuarioNovo = () => {
//   const router = useRouter(); //para usar quando a requisão dá certo

//   const [nameInput, setNameInput] = useState("");
//   const [idadeInput, SetIdadeInput] = useState("");
//   const [estadoinput, setEstadoInput] = useState("");
//   const [cidadeInput, setCidadeInput] = useState("");
//   const [emailInput, setEmailInput] = useState("");
//   const [senhaInput, setSenhaInput] = useState("");

//   const cadastarUser = async () => {
//     if (
//       nameInput &&
//       idadeInput &&
//       estadoinput &&
//       cidadeInput &&
//       emailInput &&
//       senhaInput
//     ) {
//       // const req = await fetch(`/api/users`, {
//       //   method: "POST",
//       //   headers: {
//       //     "Content-Type": "application/json",
//       //   },
//       //   body: JSON.stringify({
//       //     name: nameInput,
//       //     idade: idadeInput,
//       //     estado: estadoinput,
//       //     cidade: cidadeInput,
//       //     email: emailInput,
//       //     senha: senhaInput,
//       //   }),
//       // });
//       // const json = await req.json();

//       const json = await axios.post(`/api/users`, {
//         // essa linha substitui as de cima
//         name: nameInput,
//         idade: idadeInput,
//         estado: estadoinput,
//         cidade: cidadeInput,
//         email: emailInput,
//         senha: senhaInput,
//       });

//       if (json.status) {
//         // se deu certo vai para o router.push
//         router.push(`/usuarios`);
//       } else {
//         // se deu errado mostrar o erro
//         alert(json.data.error);
//       }
//     }
//   };
//   return (
//     <div>
//       <Head>
//         <title>Usuários - Novo</title>
//       </Head>
//       <Link className={styles.link} href={`/usuarios/`}>
//         Voltar
//       </Link>
//       <a href="/login">Login</a>
//       <h1 className={styles.h1}>Página de usuarios - Novo</h1>

//       <input
//         className={styles.input}
//         type="text"
//         value={nameInput}
//         placeholder="Seu nome, ou Apelido"
//         onChange={(e) => setNameInput(e.target.value)}
//       />

//       <input
//         className={styles.input}
//         type="text"
//         value={idadeInput}
//         placeholder="Qual sua idade"
//         onChange={(e) => SetIdadeInput(e.target.value)}
//       />

//       <input
//         className={styles.input}
//         type="text"
//         value={estadoinput}
//         placeholder="Seu Estado"
//         onChange={(e) => setEstadoInput(e.target.value)}
//       />

//       <input
//         className={styles.input}
//         type="text"
//         value={cidadeInput}
//         placeholder="Sua cidade"
//         onChange={(e) => setCidadeInput(e.target.value)}
//       />

//       <input
//         className={styles.input}
//         type="email"
//         value={emailInput}
//         placeholder="Seu e-mail"
//         onChange={(e) => setEmailInput(e.target.value)}
//       />

//       <input
//         className={styles.input}
//         type="password"
//         value={senhaInput}
//         placeholder="Crie sua senha"
//         onChange={(e) => setSenhaInput(e.target.value)}
//       />

//       <button onClick={cadastarUser}>Cadastar</button>
//     </div>
//   );
// };

// export default UsuarioNovo;
