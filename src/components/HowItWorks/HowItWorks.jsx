import { MdOutlineChatBubbleOutline, MdOutlineCalendarMonth, MdOutlineBuild, MdOutlineCheckCircleOutline } from 'react-icons/md';
import { useLanguage } from '../../context/LanguageContext';
import './HowItWorks.scss';

const icons = [
  <MdOutlineChatBubbleOutline key="chat" />,
  <MdOutlineCalendarMonth key="calendar" />,
  <MdOutlineBuild key="build" />,
  <MdOutlineCheckCircleOutline key="check" />
];

function HowItWorks() {
  const { t } = useLanguage();
  const steps = t('howItWorks.steps') || [];

  return (
    <section className="how-it-works section" id="como-funciona">
      <div className="container">
        <h2 className="section-title" style={{ fontStyle: 'italic' }}>{t('howItWorks.sectionTitle')}</h2>
        <p className="section-subtitle">{t('howItWorks.sectionSubtitle')}</p>
        <div className="how-it-works__steps">
          {Array.isArray(steps) && steps.map((step, index) => (
            <div className="how-it-works__step" key={index}>
              <div className="how-it-works__icon">{icons[index]}</div>
              <h3 className="how-it-works__title">
                {index + 1}. {step.title}
              </h3>
              <p className="how-it-works__desc">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
