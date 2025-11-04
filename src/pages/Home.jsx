import styles from "./Pages.module.css";

function Home() {
  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.title}>Bienvenido a Mi Tienda</h1>
      <p className={styles.subtitle}>
        Descubrí nuestros productos destacados y las mejores ofertas.
      </p>
    </div>
  );
}

export default Home;
