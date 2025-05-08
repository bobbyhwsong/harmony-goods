import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <Heart className="h-8 w-8 text-pink-500" />
          <span className="ml-2 text-xl font-bold text-gray-800">중도와화합</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink to={link.path} label={link.label} />
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 hover:text-pink-500 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white shadow-lg"
        >
          <ul className="py-4 px-4">
            {navLinks.map((link) => (
              <li key={link.path} className="py-2">
                <NavLink to={link.path} label={link.label} isMobile />
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </header>
  );
};

interface NavLinkProps {
  to: string;
  label: string;
  isMobile?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ to, label, isMobile }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`relative font-medium transition-colors duration-200 ${
        isMobile
          ? 'block text-lg py-1'
          : 'inline-block text-base py-2'
      } ${
        isActive
          ? 'text-pink-500'
          : 'text-gray-700 hover:text-pink-500'
      }`}
    >
      {label}
      {isActive && (
        <motion.div
          layoutId="navigation-underline"
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-pink-500"
          initial={false}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        />
      )}
    </Link>
  );
};

const navLinks = [
  { path: '/', label: '홈' },
  { path: '/goods', label: '굿즈 보기' },
  { path: '/test', label: '테스트 하러 가기' },
  { path: '/about', label: '프로젝트 소개' },
  { path: '/blog', label: '블로그' },
];

export default Header;