import Head from "next/head";
import { useState } from "react";

import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [errorTexto, setErrorTexto] = useState("");

  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async () => {
    if (!email && !senha) {
      setErrorTexto("Preencha os campos");
      return;
    }

    setErrorTexto("");
    setLoading(true);
    const request = await signIn("credentials", {
      redirect: false,
      email,
      senha,
    });
    setLoading(false);

    console.log(request);
    if (request && request.ok) {
      if (router.query.callbackUrl) {
        router.push(router.query.callbackUrl as string);
      } else {
        router.push("/");
      }
    } else {
      setErrorTexto("Acesso negado");
    }
  };

  return (
    <div>
      <div>
        <Head>
          <title>Login</title>
        </Head>
      </div>

      <h1>Login</h1>

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

export default Login;
