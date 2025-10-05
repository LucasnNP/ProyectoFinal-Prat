import CartWidget from "./CartWidget";
import styles from "./navBar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.logo}>Mi tienda</h1>
      <ul className={styles.menu}>
        <li>Inicio</li>
        <li>Productos</li>
        <li>Contacto</li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
