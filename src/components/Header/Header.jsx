import { useState, useEffect } from 'react';
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi';
import { PiWrenchFill } from 'react-icons/pi';
import { useLanguage } from '../../context/LanguageContext';
import './Header.scss';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const LanguageSwitcher = () => (
    <div className="header__lang-switcher">
      <button 
        className={`header__lang-btn ${language === 'pt' ? 'active' : ''}`} 
        onClick={() => { setLanguage('pt'); closeMenu(); }}
        aria-label="Português"
      >
        PT
      </button>
      <button 
        className={`header__lang-btn ${language === 'en' ? 'active' : ''}`} 
        onClick={() => { setLanguage('en'); closeMenu(); }}
        aria-label="English"
      >
        EN
      </button>
      <button 
        className={`header__lang-btn ${language === 'es' ? 'active' : ''}`} 
        onClick={() => { setLanguage('es'); closeMenu(); }}
        aria-label="Español"
      >
        ES
      </button>
    </div>
  );

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
          <a href="#servicos" className="header__link" onClick={closeMenu}>{t('header.servicos')}</a>
          <a href="#como-funciona" className="header__link" onClick={closeMenu}>{t('header.comoFunciona')}</a>
          <a href="#galeria" className="header__link" onClick={closeMenu}>{t('header.galeria')}</a>
          <a href="#orcamento" className="header__link" onClick={closeMenu}>{t('header.orcamento')}</a>
          <a href="#orcamento" className="header__cta-mobile" onClick={closeMenu}>{t('header.ctaButton')}</a>
          <div className="header__lang-switcher-mobile">
             <LanguageSwitcher />
          </div>
        </nav>

        <div className="header__actions">
          <a href="#orcamento" className="header__cta">{t('header.ctaButton')}</a>
          <div className="header__lang-switcher-desktop">
            <LanguageSwitcher />
          </div>
          <button
            className="header__hamburger"
            onClick={toggleMenu}
            aria-label={t('header.menuLabel')}
            id="menu-toggle"
          >
            {menuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
