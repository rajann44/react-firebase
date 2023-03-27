import Card from "./components/Card";
import Navbar from "./components/Navbar";
import AddMovie from "./components/AddMovie";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Detail from "./components/Detail";

function App() {
  return (
    <div className="App flex flex-col min-h-screen">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Card></Card>}></Route>
        <Route path="/add" element={<AddMovie></AddMovie>}></Route>
        <Route path="/detail/:id" element={<Detail></Detail>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
