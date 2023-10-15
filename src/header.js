import { Link } from "react-router-dom"

const Header = () =>{
    return(
        < div id="header">
        <Link to = "/">Home</Link>
        <Link to ="/about">About </Link>
        <Link to ="/contact">Content</Link>
        </div>
    )
}

export default Header;