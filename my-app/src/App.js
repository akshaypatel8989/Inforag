import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./controller/Home";
import Aboutus from "./controller/Aboutus";
import Contactus from "./controller/Contactus";
import Products from "./controller/Products";
import Services from "./controller/Services";
import './App.css';
//import Home from './controller/Home';

function App() {
  return (
  
   <BrowserRouter>
   <Routes>
    <Route path="/"element={<Home/>}/>
     <Route path="/Aboutus"element={<Aboutus/>}/>
    <Route path="/Products" element = {<Products/>}/>
     <Route path="/Services"element={<Services/>}/>
     <Route path="/Contactus"element={<Contactus/>}/>
         
   </Routes>
   </BrowserRouter>



  );
}

export default App;
