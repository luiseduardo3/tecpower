import styles from "./styles.module.css";
import VoltarIcon from "./Voltar.svg";
import Link from "next/link";

type Props = {
  voltarHref: string;
  color?: string;
  title?: string;
  subtitle?: string;
  invert?: boolean;
};
export const Header = ({
  voltarHref,
  color,
  title,
  subtitle,
  invert,
}: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <Link legacyBehavior href={voltarHref}>
          <a className={invert ? styles.buttonTransparente : ""}>
            <VoltarIcon color={invert ? "#FFF" : "#1b1b1b"} />
          </a>
        </Link>
      </div>
      <div className={styles.centertSide}>
        {title && (
          <div
            className={styles.title}
            style={{ color: invert ? "#FFF" : "#1b1b1b" }}
          >
            {title}
          </div>
        )}
        {subtitle && <div className={styles.subtitle}>{subtitle}</div>}
      </div>
      <div className={styles.rightSie}></div>
    </div>
  );
};
