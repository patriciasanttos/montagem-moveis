import { PiWrenchFill } from 'react-icons/pi';
import { HiOutlineMail } from 'react-icons/hi';
import { RiInstagramLine, RiWhatsappLine } from 'react-icons/ri';
import './Footer.scss';

function Footer() {
  const currentYear = new Date().getFullYear();

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
              Serviço profissional de montagem de móveis. Qualidade, pontualidade e cuidado com seu patrimônio.
            </p>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">Contato</h4>
            <ul className="footer__list">
              <li>
                <HiOutlineMail />
                <a href="#" onClick={(e) => { e.preventDefault(); alert('📧 Este link irá enviar um e-mail para o email da empresa.'); }}>contato@montamoveispro.com.br</a>
              </li>
              <li>
                <RiWhatsappLine />
                <a href="#" onClick={(e) => { e.preventDefault(); alert('📱 Este link irá enviar uma mensagem via WhatsApp para o número da empresa.'); }}>(11) 99999-9999</a>
              </li>
              <li>
                <RiInstagramLine />
                <a href="#" onClick={(e) => { e.preventDefault(); alert('📸 Este link irá abrir o Instagram da empresa.'); }}>@montamoveispro</a>
              </li>
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">Horário de Atendimento</h4>
            <ul className="footer__list">
              <li>Segunda a Sexta: 08h - 18h</li>
              <li>Sábado: 08h - 13h</li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {currentYear} MontaMóveis Pro. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
