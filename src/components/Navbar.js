import React from 'react'
import { NavLink} from 'react-router-dom'
 const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg  bg-primary fixed-top">
      <div className="container">
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">  
            <li className="nav-item">
              <NavLink to="/" className="nav-link text-light">  
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/cards" className="nav-link text-light">  
                Cards
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/cartaAxio" className="nav-link text-light">  
                Card Axio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contacto" className="nav-link text-light"> 
                Contacto
              </NavLink>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
