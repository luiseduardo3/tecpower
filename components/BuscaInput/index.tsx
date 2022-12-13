import { useState } from "react";
import styles from "./styles.module.css";
import BuscaIcon from "./Busca.svg";

type Props = {
  onBusca: (buscaValor: string) => void;
};

export const BuscaInput = ({ onBusca }: Props) => {
  const [focused, setFocused] = useState(false);
  const [buscaValor, setBuscaValor] = useState("");

  const handleKeyUp = (evento: React.KeyboardEvent<HTMLInputElement>) => {
    if (evento.code === "Enter") {
      onBusca(buscaValor);
    }
  };
  return (
    <div
      className={styles.container}
      style={{ borderColor: focused ? tenant?.mainColor : "#FFFFFF" }}
    >
      <div className={styles.button} onClick={() => onBusca(buscaValor)}>
        <BuscaIcon color={tenant?.mainColor} />
      </div>
      <input
        type="text"
        className={styles.input}
        placeholder="Digite o nome do produto"
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onKeyUp={handleKeyUp}
        value={buscaValor}
        onChange={(e) => setBuscaValor(e.target.value)}
      />
    </div>
  );
};
