
import React from "react"
import { Nav, NavLink } from "react-router-dom";
const NavBar = () => {
    return ( 
        <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        <NavLink  className={(navigationData) => navigationData.isActive ? 'me-3 py-2 text-dark text-decoration-underline': 'me-3 py-2 text-dark text-decoration-none' }  to={'home'}>
          Home
        </NavLink>
        <NavLink className={(navigationData) => navigationData.isActive ? 'me-3 py-2 text-dark text-decoration-underline': 'me-3 py-2 text-dark text-decoration-none' } to={'balance'}>
          Balance
        </NavLink>
        <NavLink className={(navigationData) => navigationData.isActive ? 'me-3 py-2 text-dark text-decoration-underline': 'me-3 py-2 text-dark text-decoration-none' } to={'product'}>
          Products
        </NavLink>
        <NavLink className={(navigationData) => navigationData.isActive ? 'me-3 py-2 text-dark text-decoration-underline': 'me-3 py-2 text-dark text-decoration-none' } to={'billing'}>
          Billing
        </NavLink>
        <NavLink className={(navigationData) => navigationData.isActive ? 'me-3 py-2 text-dark text-decoration-underline': 'me-3 py-2 text-dark text-decoration-none' } to={'cart'}>
          cart-(Naga)
        </NavLink>
      </nav>
     );
}
 
export default NavBar;