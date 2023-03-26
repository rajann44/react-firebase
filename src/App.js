import Card from "./components/Card";
import Navbar from "./components/Navbar";
import AddMovie from "./components/AddMovie";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Card></Card>}></Route>
        <Route path="/add" element={<AddMovie></AddMovie>}></Route>
      </Routes>
    </div>
  );
}

export default App;
