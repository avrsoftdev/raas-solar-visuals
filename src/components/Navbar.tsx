import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-slate-900/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <img
              src={logo}
              alt="RAAS Engineers Logo"
              className="h-10 w-auto group-hover:shadow-lg transition-shadow duration-300"
            />
            {/* Optionally keep the text if you want */}
            <span className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              RAAS Engineers
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative text-white hover:text-yellow-400 transition-colors duration-300 font-medium ${
                  location.pathname === item.path ? 'text-yellow-400' : ''
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
                )}
              </Link>
            ))}
            <Link
              to="/quote"
              className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-6 py-2 rounded-full font-semibold hover:from-yellow-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-lg rounded-lg mt-2 border border-white/10">
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block text-white hover:text-yellow-400 transition-colors duration-300 font-medium ${
                    location.pathname === item.path ? 'text-yellow-400' : ''
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/quote"
                onClick={() => setIsOpen(false)}
                className="block bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-6 py-2 rounded-full font-semibold text-center hover:from-yellow-600 hover:to-orange-700 transition-all duration-300"
              >
                Get Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;