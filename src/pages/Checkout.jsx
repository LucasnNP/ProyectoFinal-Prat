import { useContext, useState } from "react";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase/config";
import { CartContext } from "../context/CartContext";
import CheckoutForm from "../components/checkout/CheckoutForm";
import styles from "./Checkout.module.css";

function Checkout() {
  const { cart, totalPrice, clearCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCheckout = async (buyerData) => {
    setLoading(true);
    try {
      const order = {
        buyer: buyerData,
        items: cart,
        total: totalPrice(),
        date: Timestamp.fromDate(new Date()),
      };

      const ordersRef = collection(db, "orders");
      const docRef = await addDoc(ordersRef, order);
      setOrderId(docRef.id);
      clearCart();
    } catch (error) {
      console.error("Error al crear la orden: ", error);
    } finally {
      setLoading(false);
    }
  };

  if (orderId) {
    return (
      <div className={styles.succes}>
        <h2>¡Compra realizada con éxito! 🎉</h2>
        <p>
          Tu número de orden es: <strong>{orderId}</strong>
        </p>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className={styles.empty}>
        <h2>Tu carrito está vacío</h2>
        <p>Agrega productos al carrito antes de proceder al checkout.</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1>Finalizar compra</h1>

      {loading ? (
        <p className={styles.loading}>Procesando tu orden...</p>
      ) : (
        <CheckoutForm onConfirm={handleCheckout} />
      )}
    </div>
  );
}

export default Checkout;
