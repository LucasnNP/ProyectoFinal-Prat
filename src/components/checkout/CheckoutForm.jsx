import { useState } from "react";
import styles from "./CheckoutForm.module.css";

function CheckoutForm({ onConfirm }) {
  const [values, setValues] = useState({
    name: "",
    email: "",
    emailConfirm: "",
    phone: "",
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones
    if (values.name.length < 3) {
      return alert("El nombre debe tener al menos 3 caracteres.");
    }

    if (!values.email.includes("@")) {
      return alert("El email debe ser válido.");
    }

    if (values.email !== values.emailConfirm) {
      return alert("Los emails no coinciden.");
    }

    if (values.phone.length < 8) {
      return alert("ingrese un número de teléfono válido.");
    }

    onConfirm({
      name: values.name,
      email: values.email,
      phone: values.phone,
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>Ingresa tus datos</h2>

      <label>
        Nombre completo:
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Email:
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Confirmar Email:
        <input
          type="email"
          name="emailConfirm"
          value={values.emailConfirm}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Teléfono:
        <input
          type="tel"
          name="phone"
          value={values.phone}
          onChange={handleChange}
          required
        />
      </label>

      <button type="submit" className={styles.button}>
        Finalizar compra
      </button>
    </form>
  );
}

export default CheckoutForm;
