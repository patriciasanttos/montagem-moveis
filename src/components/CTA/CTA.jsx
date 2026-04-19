import { HiArrowRight } from 'react-icons/hi';
import { RiWhatsappLine } from 'react-icons/ri';
import { useLanguage } from '../../context/LanguageContext';
import './CTA.scss';

function CTA() {
  const { t } = useLanguage();

  return (
    <section className="cta">
      <div className="container cta__content">
        <h2 className="cta__title">{t('cta.title')}</h2>
        <p className="cta__subtitle">
          {t('cta.subtitle')}
        </p>
        <div className="cta__buttons">
          <a href="#orcamento" className="cta__btn cta__btn--dark" id="cta-orcamento">
            {t('cta.ctaPrimary')}
            <HiArrowRight />
          </a>
          <a
            href="#"
            className="cta__btn cta__btn--outline"
            id="cta-telefone"
            onClick={(e) => {
              e.preventDefault();
              alert(t('cta.whatsappAlert'));
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
