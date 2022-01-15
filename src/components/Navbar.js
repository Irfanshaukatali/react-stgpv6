import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(){
  return (
    <nave>
      <Link to="/" className="link">Home</Link>
       <Link to="/aboutus" className="link">Aboutus</Link>
       <Link to="/Contact" className="link">Contact</Link>
    </nave>
  )
}
export default Navbar;