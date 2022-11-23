import Head from "next/head";
import { useState } from "react";

import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import axios from "axios";

const LoginApi = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [errorTexto, setErrorTexto] = useState("");

  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const login = async (email: string, senha: string) => {
    // colocar em outra pasta um service por exemplo

    // 1. pegar o CSRF
    // 2. Validar as Credentials
    // 3. Verificar o Session
    const csrFReq = await axios.get("/api/auth/csrf");

    if (csrFReq.data.csrfToken) {
      const authReq = await axios.post("/api/auth/callback/credentials", {
        json: true,
        csrfToken: csrFReq.data.csrfToken,
        email,
        senha,
      });

      if (authReq.status === 200) {
        const userData = await axios.get("/api/auth/session");
        if (userData.data.user) {
          return true;
        }
      }
    }

    return false;
  };

  const handleSubmit = async () => {
    if (!email && !senha) {
      setErrorTexto("Preencha os campos");
      return;
    }

    setErrorTexto("");
    setLoading(true);

    const logged = await login(email, senha); // usar só esse

    setLoading(false);

    if (logged) {
      window.location.href = "/";
    } else {
      setErrorTexto("Acesso Negado");
    }
  };
  return (
    <div>
      <div>
        <Head>
          <title>Login API</title>
        </Head>
      </div>

      <h1>Login API</h1>

      <input
        type="email"
        placeholder="Digite seu e-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={loading} //quando o loading for true o disabled vai ficar true
      />

      <input
        type="password"
        placeholder="Digite sua senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        disabled={loading} //quando o loading for true o disabled vai ficar true
      />

      <button onClick={handleSubmit} disabled={loading}>
        Entrar
      </button>

      {errorTexto}
      {loading && "carregando..."}
    </div>
  );
};

export default LoginApi;
