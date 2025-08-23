import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

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

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-8">
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

      {/* Mobile Burger Button */}
      <button
        className="md:hidden text-gray-300 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-gray-900/95 backdrop-blur-md border-b border-gray-800 flex flex-col items-center py-6 space-y-6 md:hidden">
          {[
            { to: "/", label: "Home" },
            { to: "/about", label: "About" },
            { to: "/service", label: "Services" },
            { to: "/contact", label: "Contact" },
          ].map((link, index) => (
            <Link
              key={index}
              to={link.to}
              className="text-gray-300 text-lg font-medium hover:text-orange-400 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

export default Header;
