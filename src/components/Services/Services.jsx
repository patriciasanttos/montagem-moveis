import { MdOutlineWeekend, MdOutlineBed, MdOutlineDesktopMac, MdOutlineHome, MdOutlineBuild, MdOutlineAccessTime } from 'react-icons/md';
import { useLanguage } from '../../context/LanguageContext';
import './Services.scss';

const icons = [
  <MdOutlineWeekend key="weekend" />,
  <MdOutlineBed key="bed" />,
  <MdOutlineDesktopMac key="desktop" />,
  <MdOutlineHome key="home" />,
  <MdOutlineBuild key="build" />,
  <MdOutlineAccessTime key="time" />
];

function Services() {
  const { t } = useLanguage();
  const items = t('services.items') || [];

  return (
    <section className="services section" id="servicos">
      <div className="container">
        <h2 className="section-title">{t('services.sectionTitle')}</h2>
        <p className="section-subtitle">
          {t('services.sectionSubtitle')}
        </p>
        <div className="services__grid">
          {Array.isArray(items) && items.map((service, index) => (
            <div className="services__card" key={index} id={`service-card-${index}`}>
              <div className="services__icon">{icons[index]}</div>
              <h3 className="services__card-title">{service.title}</h3>
              <p className="services__card-desc">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
