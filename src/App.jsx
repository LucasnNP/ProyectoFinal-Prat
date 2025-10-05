import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/navBar";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="¡Bienvenidos a nuestra tienda!" />
    </>
  );
}

export default App;
