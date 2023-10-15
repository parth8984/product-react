import React from "react";
import { BrowserRouter, Route, Routes, Link, Navigate} from "react-router-dom";
import Product from "./Product";
import Home from "./homa";
import Navbar from "./Navwar";
import "./index.css"
import { useState , useEffect} from "react";
import About from "./About";
import Pages from "./pages";
import ProductSpac from "./ProductSpac";

function App() {
  let [ isLoggedIn,setIsLoggedIn] = useState(false);

useEffect(()=>{
  var localStatevalue = JSON.parse(localStorage.getItem("IsloggedIN"));
  if(localStatevalue == null){
    localStorage.setItem("IsLoggedIn", false);
    setIsLoggedIn(false);
  }else{
    setIsLoggedIn(localStatevalue)
  }
},[])
 return(
      <>
      <BrowserRouter>
      <Navbar isLoggedIn = {isLoggedIn}setIsLoggedIn = {setIsLoggedIn}/>
      <Routes>
      <Route path = "/" element ={isLoggedIn == true ? <Home/> : <Navigate to ="/request"/>}/>
      <Route path="/request" element = {<h2> Login kar bhai Pahle</h2>}/>
      <Route path = "/Product" element = {isLoggedIn == true ? <Product/> : <Navigate to ="/request"/>}/>
      <Route path = "/About" element = {isLoggedIn == true ? <About/> : <Navigate to ="/request"/>}/>
      <Route path = "/Pages" element = {isLoggedIn == true ? <Pages/> : <Navigate to ="/request"/>}/>
      <Route path = "/Product/:id" element = { <ProductSpac/> }/>

      <Route path="*" element = {<h2>404 not found</h2>}/>


      </Routes>
      </BrowserRouter>

      </>
    )
  }


export default App;