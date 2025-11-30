import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavLinks.module.css";

const NavLinks = ({ isOpen, closeMenu }) => {
  const categories = ["ropa", "calzado", "accesorios"];
  const [openCat, setOpenCat] = useState(false);

  return (
    <ul className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
      <li onClick={closeMenu}>
        <NavLink to="/">Inicio</NavLink>
      </li>

      <li onClick={closeMenu}>
        <NavLink to="/products">Todos Nuestros Productos</NavLink>
      </li>

      {/* Dropdown */}
      <li className={styles.dropdown} onClick={() => setOpenCat(!openCat)}>
        <span>Categorías ▾</span>

        <ul
          className={`${styles.dropdownMenu} ${
            openCat ? styles.dropdownOpen : ""
          }`}
        >
          {categories.map((cat) => (
            <li key={cat} onClick={closeMenu}>
              <NavLink to={`/category/${cat}`}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </NavLink>
            </li>
          ))}
        </ul>
      </li>

      <li onClick={closeMenu}>
        <NavLink to="/contact">Contacto</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
