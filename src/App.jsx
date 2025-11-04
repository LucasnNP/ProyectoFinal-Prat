import ItemListContainer from "./components/containers/ItemListContainer";
import ItemDetailContainer from "./components/containers/ItemDetailContainer";
import NavBar from "./components/layout/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/products"
          element={<ItemListContainer greeting="Catálogo de productos" />}
        />
        <Route
          path="/category/:categoryId"
          element={<ItemListContainer greeting="Filtrando por categoría" />}
        />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
