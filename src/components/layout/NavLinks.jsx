import { NavLink } from "react-router-dom";
import styles from "./NavLinks.module.css";

const NavLinks = () => {
  const categories = ["ropa", "calzado", "accesorios"];

  return (
    <ul className={styles.menu}>
      <li>
        <NavLink to="/">Inicio</NavLink>
      </li>
      <li>
        <NavLink to="/products">Todos Nuestros Productos</NavLink>
      </li>
      <li className={styles.dropdown}>
        <span>Categorías ▾</span>
        <ul className={styles.dropdownMenu}>
          {categories.map((cat) => (
            <li key={cat}>
              <NavLink to={`/category/${cat}`}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </NavLink>
            </li>
          ))}
        </ul>
      </li>
      <li>
        <NavLink to="/contact">Contacto</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
