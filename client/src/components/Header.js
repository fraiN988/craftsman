import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/Header.css';

const Header = ({ user }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    navigate('/login');
  };

  return (
    <header>
      <nav>
        <ul className="nav-list">
          {user ? (
            <>
              {user.role === 'admin' ? (
                <li><Link to="/admin">Admin Dashboard</Link></li>
              ) : (
                <li><Link to="/">List of Craftsmen</Link></li>
              )}
              <li><button className="logout-btn" onClick={handleLogout}>Logout</button></li>
            </>
          ) : (
            <>
            <li><Link to="/" className="nav-link">Home</Link></li>
              <li><Link to="/login" className="nav-link">Login</Link></li>
              <li><Link to="/register" className="nav-link">Register</Link></li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
