import Head from "next/head";
import { useState } from "react";

import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [temErro, setTemErro] = useState(false);

  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async () => {
    setTemErro(false);
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
      setTemErro(true);
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

      <button onClick={handleSubmit}>Entrar</button>

      {temErro && "Acesso negado"}
      {loading && "carregando..."}
    </div>
  );
};

export default Login;
