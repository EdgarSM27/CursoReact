import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemCount from "./components/ItemLIstContainer/ItemCount";
import ItemListContainer from "./components/ItemLIstContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
    <NavBar/>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<ItemListContainer/>} />
    <Route path="/categoria/:idCategoria" element={<ItemListContainer/>} />
    <Route path="/producto/:idProducto" element={<ItemDetailContainer/>} />
    </Routes>
    </BrowserRouter>
    
    </>

  );
}

export default App;
