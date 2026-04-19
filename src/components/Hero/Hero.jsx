import { HiArrowRight } from 'react-icons/hi';
import heroBg from '../../assets/images/hero-bg.png';
import './Hero.scss';

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__bg">
        <img src={heroBg} alt="Sala com móveis montados" />
        <div className="hero__overlay" />
      </div>

      <div className="container hero__content">
        <h1 className="hero__title">
          Montagem de Móveis<br />Profissional
        </h1>
        <p className="hero__subtitle">
          Especialistas em montagem rápida e segura. Deixe seus móveis prontos para uso!
        </p>
        <div className="hero__buttons">
          <a href="#orcamento" className="hero__btn hero__btn--primary" id="hero-cta-orcamento">
            Faça Seu Orçamento
            <HiArrowRight />
          </a>
          <a href="#como-funciona" className="hero__btn hero__btn--outline" id="hero-cta-visita">
            Solicitar Visita
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
