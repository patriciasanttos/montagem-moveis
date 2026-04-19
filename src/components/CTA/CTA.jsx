import { HiArrowRight, HiPhone } from 'react-icons/hi';
import './CTA.scss';

function CTA() {
  return (
    <section className="cta">
      <div className="container cta__content">
        <h2 className="cta__title">Pronto para Montar Seus Móveis?</h2>
        <p className="cta__subtitle">
          Entre em contato agora e receba um orçamento sem compromisso!
        </p>
        <div className="cta__buttons">
          <a href="#orcamento" className="cta__btn cta__btn--dark" id="cta-orcamento">
            Faça Seu Orçamento Agora
            <HiArrowRight />
          </a>
          <a href="tel:+5511999999999" className="cta__btn cta__btn--outline" id="cta-telefone">
            <HiPhone />
            (11) 99999-9999
          </a>
        </div>
      </div>
    </section>
  );
}

export default CTA;
