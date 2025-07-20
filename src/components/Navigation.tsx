import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Dumbbell, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showProgramsDropdown, setShowProgramsDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !(dropdownRef.current as HTMLElement).contains(event.target as Node)
      ) {
        setShowProgramsDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/#about' },
    {
      label: 'Programs',
      href: '/#programs',
      dropdown: [
        { label: '8W Shred Challenge', href: '/8w-shred-challenge' },
        { label: 'Recipe Ebook', href: '/recipe-ebook' }
      ]
    },
    { label: 'Results', href: '/#results' },
    { label: 'Contact', href: '/#contact' },
  ];

  const handleNavClick = (href: string) => {
    if (href.startsWith('/#')) {
      if (location.pathname !== '/') {
        window.location.href = href;
      } else {
        const element = document.querySelector(href.substring(1));
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
    setShowProgramsDropdown(false);
  };

  return (
    <motion.nav
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        scrolled ? 'bg-bg-primary/95 backdrop-blur-md border-b border-border-primary' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 bg-bg-primary/50">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/">
            <motion.div
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              <img
                src="https://i.imgur.com/FcxSkFm.png"
                alt="Dumbbell Logo"
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="text-xl font-black text-white">CHAMPIONS LIFESTYLE</span>
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 text-text-primary">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                ref={item.label === 'Programs' ? dropdownRef : undefined}
              >
                {item.dropdown ? (
                  <motion.button
                    onClick={() => setShowProgramsDropdown(!showProgramsDropdown)}
                    className="text-text-secondary hover:text-text-primary transition-colors relative group flex items-center space-x-1"
                    whileHover={{ y: -2 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <span>{item.label}</span>
                    <ChevronDown className="w-4 h-4" />
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                  </motion.button>
                ) : (
                  <motion.div
                    whileHover={{ y: -2 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    {item.href.startsWith('/') ? (
                      <Link
                        to={item.href}
                        className="text-text-secondary hover:text-text-primary transition-colors relative group"
                      >
                        {item.label}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                      </Link>
                    ) : (
                      <button
                        onClick={() => handleNavClick(item.href)}
                        className="text-text-secondary hover:text-text-primary transition-colors relative group"
                      >
                        {item.label}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                      </button>
                    )}
                  </motion.div>
                )}

                {/* Dropdown Menu */}
                {item.dropdown && showProgramsDropdown && (
                  <motion.div
                    className="absolute top-full left-0 mt-2 w-48 bg-bg-secondary/95 backdrop-blur-md rounded-2xl border border-border-secondary shadow-2xl"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.label}
                        to={dropdownItem.href}
                        className="block px-6 py-3 text-text-secondary hover:text-text-primary hover:bg-hover-subtle transition-colors first:rounded-t-2xl last:rounded-b-2xl"
                        onClick={() => setShowProgramsDropdown(false)}
                      >
                        {dropdownItem.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
            <motion.button
              className="bg-primary text-text-primary px-6 py-2 rounded-full font-semibold hover:bg-primary/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://calendly.com/championlifestyle-yash/30min?month=2025-07', '_blank')}
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-text-primary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`md:hidden bg-bg-secondary/95 backdrop-blur-md ${isOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-6 py-4 space-y-4">
          {navItems.map((item) => (
            <div key={item.label}>
              {item.href.startsWith('/') ? (
                <Link
                  to={item.href}
                  className="block text-text-secondary hover:text-text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  onClick={() => handleNavClick(item.href)}
                  className="block text-text-secondary hover:text-text-primary transition-colors w-full text-left"
                >
                  {item.label}
                </button>
              )}
              
              {/* Mobile Dropdown */}
              {item.dropdown && (
                <div className="ml-4 mt-2 space-y-2">
                  {item.dropdown.map((dropdownItem) => (
                    <Link
                      key={dropdownItem.label}
                      to={dropdownItem.href}
                      className="block text-text-muted hover:text-text-primary transition-colors text-sm"
                      onClick={() => setIsOpen(false)}
                    >
                      {dropdownItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <button 
            className="w-full bg-primary text-text-primary py-3 rounded-full font-semibold"
            onClick={() => {
              setIsOpen(false);
              window.open('https://calendly.com/championlifestyle-yash/30min?month=2025-07', '_blank');
            }}
          >
            Get Started
          </button>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navigation;
