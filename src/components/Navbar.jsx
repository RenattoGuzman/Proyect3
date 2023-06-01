import React from "react";
import { Link, useLocation } from 'react-router-dom';


function Navbar() {

  const location = useLocation();
  const { pathname } = location;

  return (
    <div >        
      <div className="fondoNav"></div>
      <h1 className='r'>RNTT</h1>
      <nav>
        <div>
          
          <ul >
            <li><Link to="/" className={pathname === "/" ? "selected" : "notselected"}>home</Link></li>
            
            <li><Link to="/proyectos" className={pathname === "/proyectos" ? "selected" : "notselected"}>proyectos</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
