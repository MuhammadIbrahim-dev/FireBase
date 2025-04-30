
import "./App.css";
import { Route, Routes } from "react-router-dom";
import ListReciep from "./lists/ListReciep";
import Create from "./Createrecipies/Create";
import Home from "./assets/pages/Home";

function App() {


  

  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/listReciep" element={<ListReciep/>}/>
        <Route path="/CreateReciep" element={<Create/>}/>
      </Routes>
    </div>
  );
}

export default App;