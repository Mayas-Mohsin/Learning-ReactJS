import React from "react";
import "./Header.css";
function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <a href="/" className="navbar-item">
              Your Logo
            </a>
          </div>
          <div className="navbar-menu">
            <div className="navbar-end">
              <a href="/" className="navbar-item">
                Home
              </a>
              <a href="/about" className="navbar-item">
                About
              </a>
              <a href="/services" className="navbar-item">
                Services
              </a>
              <a href="/contact" className="navbar-item">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

// Export the Header component
export default Header;
