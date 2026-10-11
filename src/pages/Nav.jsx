import { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkLogoImage from '../assets/logo/logo-black-bg.png';
import LightLogoImage from '../assets/logo/logo-white-bg.png';

const Nav = ({ theme, setTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  const toggleTheme = () => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="nav_wrapper">
      <div className="container">
        <nav>
          <Link to="/" className="nav_logo" onClick={closeMenu}>
            <img src={theme === 'dark' ? DarkLogoImage : LightLogoImage} alt='DAN CONSULTANCY SERVICES' />
          </Link>
          <div className='nav_actions'>
            <ul
              id="nav-items"
              className={`nav_items ${isOpen ? 'open' : ''}`}
            >
              <li><Link to="/" onClick={closeMenu}>Home</Link></li>
              <li><Link to="/services" onClick={closeMenu}>Services</Link></li>
              {/* <li><a href="/#mywork" onClick={closeMenu}>My Work</a></li> */}
              {/* <li><a href="/#about" onClick={closeMenu}>About</a></li> */}
              <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
              <li><Link to="/careers" onClick={closeMenu}>Careers</Link></li>
            </ul>

            <div className="nav_controls">
              <button
                type="button"
                className="theme_toggle"
                onClick={toggleTheme}
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
                title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
              >
                {theme === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
              </button>

              <button
                type="button"
                className="menu_icon"
                onClick={() => setIsOpen((current) => !current)}
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isOpen}
                aria-controls="nav-items"
              >
                {isOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Nav;