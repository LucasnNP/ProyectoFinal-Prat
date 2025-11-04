import styles from "./Pages.module.css";

function Contact() {
  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.title}>Contacto</h1>
      <p className={styles.subtitle}>
        Si tenés dudas o consultas, podés escribirnos y te responderemos a la
        brevedad.
      </p>
      <form className={styles.contactForm}>
        <input
          type="text"
          placeholder="Tu nombre"
          className={styles.input}
          required
        />
        <input
          type="email"
          placeholder="Tu correo electrónico"
          className={styles.input}
          required
        />
        <textarea
          placeholder="Tu mensaje"
          className={styles.textarea}
          required
        />
        <button type="submit" className={styles.btn}>
          Enviar mensaje
        </button>
      </form>
    </div>
  );
}

export default Contact;
