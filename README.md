# 🛒 Ecommerce React - Proyecto Final CoderHouse

Este proyecto es un **e-commerce desarrollado con React**, como entrega final del curso de **React JS** en **CoderHouse**.  
La aplicación permite navegar un catálogo de productos, ver detalles, filtrar por categorías, agregar productos al carrito y finalizar una compra generando una **orden en Firebase Firestore**.

---

## 🚀 Demo Online

(agregar aquí el link de Vercel luego del deploy)

---

## 📌 Características principales

- ✔ Catálogo de productos cargado desde **Firebase Firestore**
- ✔ **Filtrado por categorías** usando React Router
- ✔ **Vista de detalle** de cada producto
- ✔ **Carrito de compras integrado** con Context API
- ✔ Contador de unidades (ItemCount)
- ✔ **Checkout completo** con formulario y validaciones
- ✔ Generación de **órdenes de compra** en Firestore
- ✔ Navegación dinámica con **React Router DOM**
- ✔ Componentes modulares + CSS Modules
- ✔ Código limpio y organizado según buenas prácticas

---

## 🧱 Tecnologías utilizadas

- **React**
- **React Router DOM**
- **Firebase** (Firestore)
- **Vite**
- **CSS Modules**
- **Context API**

---

## 📦 Instalación del proyecto

Clonar el repositorio:

```bash
git clone [https://github.com/LucasnNP/ProyectoFinal-Prat.git]
cd ProyectoFinal-Prat
```

Instalar dependencias

```bash
npm install
```

Ejecutar en modo desarrollo:

```bash
npm run dev
```

---

## 🔥 Funcionalidades del proyecto

### 🔹 Catálogo de productos

Los productos se cargan desde Firestore (colección itmes).
Se listan en el componente ItemListContainer, que permite:

- Listar todos los productos
- Filtrar por categoría usando useParams()
- Visualizar detalles de un producto

### 🔹 Detalle del producto

En la ruta /item/:itemId, se muestra:

- Imagen
- Descripción
- Precio
- Contador de unidades
- Botón Agregar al carrito

### 🔹 Carrito con Context API

El estado global del carrito incluye:

- Agregar productos
- Eliminar productos
- Vaciar carrito
- Calcular total de unidades
- Calcular total a pagar

Contexto ubicado en:

```bash
src/context/CartContext.jsx
```

### 🔹 Checkout

Incluye:

- Formulario validado
- Envío de datos del comprador
- Generación de orden en Firestore (orders)
- Limpieza automática del carrito
- Pantalla de confirmación con el orderId

---

## 🔥 Rutas de la aplicación

| Ruta                    | Componente          | Descripción            |
| ----------------------- | ------------------- | ---------------------- |
| `/`                     | Home                | Página principal       |
| `/products`             | ItemListContainer   | Catálogo general       |
| `/category/:categoryId` | ItemListContainer   | Filtrado por categoría |
| `/item/:itemId`         | ItemDetailContainer | Detalle del producto   |
| `/cart`                 | Cart                | Carrito de compras     |
| `/checkout`             | Checkout            | Finalización de compra |
| `/contact`              | Contact             | Página de contacto     |
| `*`                     | NotFound            | Página 404             |

---

## 🔧 Firebase Firestore

Colección: items

Cada documento contiene:

```json
{
  "title": "Nombre del producto",
  "price": 45000,
  "category": "categoria",
  "description": "Descripción del producto",
  "image": "url-de-imagen",
  "stock": 5
}
```

Colección: orders

Generada al finalizar la compra:

```
{
  "buyer": {
    "name": "...",
    "email": "...",
    "phone": "..."
  },
  "items": [
    {
      "id": "...",
      "title": "...",
      "price": 123,
      "quantity": 2
    }
  ],
  "total": 246,
  "date": "Timestamp"
}
```

---

## 📜 Licencia

Este proyecto fue desarrollado como entrega final para el curso de React de CoderHouse.

---

## 👤 Autor

Lucas Prat
Proyecto final del curso: React.js – CoderHouse.
