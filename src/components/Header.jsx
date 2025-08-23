import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-900/95 backdrop-blur-md h-20 px-6 flex items-center justify-between shadow-lg border-b border-gray-800">
      {/* Logo */}
      <Link to="/" className="flex items-center">
        <img
          src="/logo.png"
          alt="Logo"
          className="h-14 w-auto hover:scale-105 transition-transform duration-300"
        />
      </Link>

      {/* Navigation */}
      <nav className="flex space-x-8">
        {[
          { to: "/", label: "Home" },
          { to: "/about", label: "About" },
          { to: "/service", label: "Services" },
          { to: "/contact", label: "Contact" },
        ].map((link, index) => (
          <Link
            key={index}
            to={link.to}
            className="relative group text-gray-300 font-medium hover:text-orange-400 transition-colors duration-300"
          >
            {link.label}
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        ))}
      </nav>
    </header>
  );
}

export default Header;
