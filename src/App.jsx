import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemCount from "./components/ItemLIstContainer/ItemCount";
import ItemListContainer from "./components/ItemLIstContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import contextProvider from "./components/context";


function App() {
  return (
    <>
    <ContextProvider>
    <NavBar/>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<ItemListContainer/>} />
    <Route path="/categoria/:idCategoria" element={<ItemListContainer/>} />
    <Route path="/producto/:id" element={<ItemDetailContainer/>} />
    </Routes>
    </BrowserRouter>
    </ContextProvider>
    
    </>

  );
}

export default App;
