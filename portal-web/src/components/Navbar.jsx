// Navbar.js
import React, { useState, useEffect } from 'react';
import { MenuItems } from './MenuItems';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos === 0) {
      setVisible(true); // Show the navbar when at the top
    } else if (prevScrollPos < currentScrollPos && visible) {
      setVisible(false); // Hide the navbar when scrolling down
    } else if (prevScrollPos > currentScrollPos && !visible) {
      setVisible(true); // Show the navbar when scrolling up
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos, visible]);

  return (
    <nav className={`NavbarItem ${visible ? '' : 'scrolled'}`}>
      <h1 className='navbar-logo'>The News Portal</h1>
      <div className='menu-icons' onClick={toggleMenu}>
        {isMenuOpen ? (
          <i className='fa fa-times'></i>
        ) : (
          <i className='fa fa-bars'></i>
        )}
      </div>
      <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
        {MenuItems.map((item, index) => (
          <li key={index}>
            <Link className={item.cName} to={item.url}>
              <i className={item.icon}></i> {item.title}
            </Link>
          </li>
        ))}
        <button onClick={() => window.location.href = 'form.php'}>Sign up</button>
      </ul>
    </nav>
  );
};

export default Navbar;
