import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../App.css';

const Header = () => {
  const location = useLocation(); // Get the current location

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <i className="fas fa-briefcase logo-icon"></i> {/* Replace with a relevant icon */}
        <span className="logo-text">JobPortal</span>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
        </li>
        <li>
          <Link to="/jobs" className={location.pathname === '/jobs' ? 'active' : ''}>Jobs</Link>
        </li>
        <li>
          <Link to="/login" className={location.pathname === '/login' ? 'active' : ''}>Login</Link>
        </li>
        <li>
          <Link to="/signup" className={location.pathname === '/signup' ? 'active' : ''}>Sign Up</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
