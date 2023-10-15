
import React, { useState,useEffect }from 'react';
import axios from 'axios';
import styles from "./App.css"
import ProductCom from "./productCom"
import { useNavigate } from 'react-router-dom';

function Products() {

  let [products,setProducts] = useState([]);
useEffect(() =>{
axios.get("https://dummyjson.com/products")
.then((res) =>{
  setProducts(res.data.products);
})
},[])

  return (
   <>
    <h2 style={{textAlign : "center"}}>Product</h2> 
   <div id='main-div'>
    {products.map((product,i)=>{
      return  <ProductCom
      
      key = {i}
      id = {product.id}
      price = {product.price}
      img = {product.thumbnail}
      titel = {product.titel}
      rating = {product.rating}
      
      />
  
})}
   </div>





   </>

  )

}

export default Products;