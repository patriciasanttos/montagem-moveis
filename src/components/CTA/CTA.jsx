import { HiArrowRight } from 'react-icons/hi';
import { RiWhatsappLine } from 'react-icons/ri';
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
          <a
            href="#"
            className="cta__btn cta__btn--outline"
            id="cta-telefone"
            onClick={(e) => {
              e.preventDefault();
              alert('📱 Este botão irá enviar uma mensagem via WhatsApp para o número da empresa.');
            }}
          >
            <RiWhatsappLine size={22} />
            (11) 99999-9999
          </a>
        </div>
      </div>
    </section>
  );
}

export default CTA;
