
import React from "react"
import { Link } from "react-router-dom";
const NavBar = () => {
    return ( 
        <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        <Link className="me-3 py-2 text-dark text-decoration-none" to={'home'}>
          Home
        </Link>
        <Link className="me-3 py-2 text-dark text-decoration-none" to={'/'}>
          Balance
        </Link>
        <Link className="me-3 py-2 text-dark text-decoration-none" to={'/'}>
          Products
        </Link>
      </nav>
     );
}
 
export default NavBar;