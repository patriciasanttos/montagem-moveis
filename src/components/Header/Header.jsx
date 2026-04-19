import { useState, useEffect } from 'react';
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi';
import { PiWrenchFill } from 'react-icons/pi';
import './Header.scss';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="container header__inner">
        <a href="#" className="header__logo" onClick={closeMenu}>
          <span className="header__logo-icon">
            <PiWrenchFill />
          </span>
          <span className="header__logo-text">MontaMóveis Pro</span>
        </a>

        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
          <a href="#servicos" className="header__link" onClick={closeMenu}>Serviços</a>
          <a href="#como-funciona" className="header__link" onClick={closeMenu}>Como Funciona</a>
          <a href="#galeria" className="header__link" onClick={closeMenu}>Galeria</a>
          <a href="#orcamento" className="header__link" onClick={closeMenu}>Orçamento</a>
          <a href="#orcamento" className="header__cta-mobile" onClick={closeMenu}>Solicitar Orçamento</a>
        </nav>

        <a href="#orcamento" className="header__cta">Solicitar Orçamento</a>

        <button
          className="header__hamburger"
          onClick={toggleMenu}
          aria-label="Abrir menu"
          id="menu-toggle"
        >
          {menuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>
    </header>
  );
}

export default Header;
