import { useState } from "react";
import CartWidget from "./CartWidget";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import styles from "./navBar.module.css";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>
        <Logo />
      </div>

      {/* Botón hamburguesa SOLO en mobile */}
      <div className={styles.center}>
        <button className={styles.burger} onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {/* Links, con clase condicional */}
      <NavLinks isOpen={open} closeMenu={() => setOpen(false)} />

      <div className={styles.right}>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
