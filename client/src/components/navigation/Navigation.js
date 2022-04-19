import React from "react";
import "./navigation.css";
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth.js'

const Navigation = () => {
    const logout = event => {
      event.preventDefault();
      Auth.logout();
    };

    return (

        <header className="navigation">
        
          <Link to="/">
          <h1 className="nav-logo">
            Flower Power
          </h1>
          </Link>

        <nav className="nav-links">
          {Auth.loggedIn() ? (
            <>
              <Link className="nav-item" to="/garden">The Garden</Link>
              <Link to="/profile" className="nav-item">My Profile</Link>
              <Link className="nav-item" to="/contact">Contact Us</Link>
              <a href="/" className="nav-item" onClick={logout}>
                Logout
              </a>
              
            </>
          ) : (
            <>
              <Link className="nav-item" to="/garden">The Garden</Link>
              <Link className="nav-item" to="/contact">Contact Us</Link>
              <Link className="nav-item" to="/login">Login</Link>
              <Link className="nav-item" to="/signup">Signup</Link>

            </>
          )}
        </nav>
          

        </header>

    )
}

export default Navigation