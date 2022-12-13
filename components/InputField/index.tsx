import styles from "./styles.module.css";
import OlhoAberto from "./OlhoAberto.svg";
import OlhoFechado from "./OlhoFechado.svg";
import { useState } from "react";

type Props = {
  color?: string;
  placeholder?: string;
  value?: string;
  onChange: (newValue: string) => void;
  password?: boolean;
  type: "text" | "email" | "password" | "checkbox" | "date";
};
export const InputField = ({
  color,
  placeholder,
  value,
  onChange,
  password,
  type,
}: Props) => {
  const [focus, setFocus] = useState(false);
  const [mostrarPassword, setMostrarPassword] = useState(false);
  return (
    <div
      className={styles.container}
      style={{
        borderColor: focus ? color : "#f9f9fb",
        backgroundColor: focus ? "#FFF" : "#f9f9fb",
      }}
    >
      <input
        // type={password ? (mostrarPassword ? "text" : "password") : "text"}
        type={type}
        className={styles.input}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
      {password && (
        <div
          className={styles.mostrarPassword}
          onClick={() => setMostrarPassword(!mostrarPassword)}
        >
          {mostrarPassword && <OlhoAberto color="#0097a7" />}
          {!mostrarPassword && <OlhoFechado color="#0097a7" />}
        </div>
      )}
    </div>
  );
};
