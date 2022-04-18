import React from "react";
import "./navigation.css";
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <header className="navigation">
        
          <Link to="/">
          <h1 className="nav-logo">
            Flower Power
          </h1>
          </Link>

        <nav className="nav-links">

          <Link className="nav-item" to="/gallerylist">The Garden</Link>
          <Link className="nav-item" to="/login">Login</Link>
          <Link className="nav-item" to="/signup">Signup</Link>


        </nav>
          

        </header>

    )
}

export default Navigation