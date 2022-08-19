import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemLIstContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Context } from "./components/context";
import Cart from "./components/Cart";


function App() {
  return (
    <>
    <Context>
    <NavBar/>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<ItemListContainer/>} />
    <Route path="/categoria/:idCategoria" element={<ItemListContainer/>} />
    <Route path="/producto/:id" element={<ItemDetailContainer/>} />
    <Route path="/Cart" element={<Cart/>} />
    
    </Routes>
    </BrowserRouter>
    </Context>
    
    </>

  );
}

export default App;
