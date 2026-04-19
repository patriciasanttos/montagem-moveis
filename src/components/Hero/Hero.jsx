import { HiArrowRight } from 'react-icons/hi';
import { useLanguage } from '../../context/LanguageContext';
import heroBg from '../../assets/images/hero-bg.png';
import './Hero.scss';

function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero" id="inicio">
      <div className="hero__bg">
        <img src={heroBg} alt={t('hero.heroAlt')} />
        <div className="hero__overlay" />
      </div>

      <div className="container hero__content">
        <h1 className="hero__title">
          {t('hero.titleLine1')}<br />{t('hero.titleLine2')}
        </h1>
        <p className="hero__subtitle">
          {t('hero.subtitle')}
        </p>
        <div className="hero__buttons">
          <a href="#orcamento" className="hero__btn hero__btn--primary" id="hero-cta-orcamento">
            {t('hero.ctaPrimary')}
            <HiArrowRight />
          </a>
          <a href="#orcamento" className="hero__btn hero__btn--outline" id="hero-cta-visita">
            {t('hero.ctaSecondary')}
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
