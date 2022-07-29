import "./App.css";
import ItemCount from "./components/ItemLIstContainer/ItemCount";
import ItemListContainer from "./components/ItemLIstContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";


function App() {
  return (
    <>
      <NavBar/>
    <ItemListContainer/>
    <ItemCount stock= "5"/>
    
    </>

  );
}

export default App;
