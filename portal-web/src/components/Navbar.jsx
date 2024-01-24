// Navbar.js
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuItems } from './MenuItems';
import './Navbar.css';
import Login from './login';
import SearchBar from './SearchBar';

const Navbar = ({ onSearch }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSearchBarVisible, setSearchBarVisible] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const toggleSearchBar = () => {
    setSearchBarVisible(!isSearchBarVisible);
  };

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos === 0) {
      setVisible(true);
    } else if (prevScrollPos < currentScrollPos && visible) {
      setVisible(false);
    } else if (prevScrollPos > currentScrollPos && !visible) {
      setVisible(true);
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
      <div className='menu-icons' onClick={toggleMenu}>
        {isMenuOpen ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
      </div>
      <div className='nav-logo-container'>
        <h1 className='navbar-logo'>The News Portal</h1>
      </div>
      {location.pathname !== '/' && (
        <div className='search-icon-container' onClick={toggleSearchBar}>
          <i className='fa fa-search'></i>
        </div>
      )}
      {isSearchBarVisible && <SearchBar onSearch={onSearch} />}
      <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
        {MenuItems.map((item, index) => (
          <li key={index}>
            <Link className={item.cName} to={item.url}>
              <i className={item.icon}></i> {item.title}
            </Link>
          </li>
        ))}
        <li>
          <Link type='button' className='nav-mobile' to='/login'>
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
