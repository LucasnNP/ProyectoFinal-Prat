import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./NavLinks.module.css";

const NavLinks = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error al obtener categorías:", error));
  }, []);

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
              <NavLink to={`/category/${encodeURIComponent(cat)}`}>
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
