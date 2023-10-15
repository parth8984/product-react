import React from 'react'
import { useNavigate } from 'react-router-dom';


function ProductCom(props) {
    let navigate = useNavigate();
  return (
    <div className='productcard' onClick={() => {navigate(`/product/${props.id}`)}} >
    <img className='product-thumbnil'
    src={props.img} />
  <p>Titel : {props.title}</p>
  <p>Rating :{props.rating} </p>
  <p> Price : {props.price}</p>
  </div>
  )
}

export default ProductCom; 