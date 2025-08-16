import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md h-20 px-6 flex items-center justify-between shadow-lg border-b border-white/10">
      {/* Logo */}
      <Link to="/" className="flex items-center">
        <img
          src="/logo.png"
          alt="Logo"
          className="h-20 w-auto hover:scale-105 transition-transform duration-300"
        />
      </Link>

      {/* Navigation */}
      <nav className="flex space-x-6">
        {[
          { to: "/", label: "Home" },
          { to: "/about", label: "About" },
          { to: "/contact", label: "Contact" },
        ].map((link, index) => (
          <Link
            key={index}
            to={link.to}
            className="relative text-gray-200 font-semibold hover:text-orange-400 transition-colors duration-300"
          >
            {link.label}
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        ))}
      </nav>
    </header>
  );
}

export default Header;
