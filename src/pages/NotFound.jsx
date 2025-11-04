import { Link } from "react-router-dom";
import styles from "./Pages.module.css";

function NotFound() {
  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.subtitle}>
        La página que estás buscando no existe o fue movida.
      </p>
      <Link to="/" className={styles.btn}>
        Volver al inicio
      </Link>
    </div>
  );
}

export default NotFound;
