import { PiWrenchFill } from 'react-icons/pi';
import { HiOutlineMail } from 'react-icons/hi';
import { RiInstagramLine, RiWhatsappLine } from 'react-icons/ri';
import { useLanguage } from '../../context/LanguageContext';
import './Footer.scss';

function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__col">
            <div className="footer__logo">
              <span className="footer__logo-icon">
                <PiWrenchFill />
              </span>
              <span className="footer__logo-text">MontaMóveis Pro</span>
            </div>
            <p className="footer__desc">
              {t('footer.desc')}
            </p>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">{t('footer.contato')}</h4>
            <ul className="footer__list">
              <li>
                <HiOutlineMail />
                <a href="#" onClick={(e) => { e.preventDefault(); alert(t('footer.emailAlert')); }}>contato@montamoveispro.com.br</a>
              </li>
              <li>
                <RiWhatsappLine />
                <a href="#" onClick={(e) => { e.preventDefault(); alert(t('footer.whatsappAlert')); }}>(11) 99999-9999</a>
              </li>
              <li>
                <RiInstagramLine />
                <a href="#" onClick={(e) => { e.preventDefault(); alert(t('footer.instagramAlert')); }}>@montamoveispro</a>
              </li>
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">{t('footer.horario')}</h4>
            <ul className="footer__list">
              <li>{t('footer.weekdays')}</li>
              <li>{t('footer.saturday')}</li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {currentYear} {t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
