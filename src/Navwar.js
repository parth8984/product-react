import React from 'react'
import { Link } from 'react-router-dom'

function Navbar(props) {
    function renderButton (){
        if(props.isLoggedIn == false){
            return <button onClick={() =>{
                localStorage.setItem("isLoggedIn", true)
              props.setIsLoggedIn(true)
            }}>Login</button>
        }else{
            return <button onClick={() =>{
                localStorage.setItem("isLoggedIn", false)
                props.setIsLoggedIn(false)}}>Logout</button>
        }
    }
  return (
    <div id='header'>
<Link to = "/" > Home</Link>
<Link to = "/Product"> Product </Link>
<Link to = "About"> About </Link>
<Link to = "Pages"> Pages </Link>
{renderButton()}

    </div>
  )
}

export default Navbar;