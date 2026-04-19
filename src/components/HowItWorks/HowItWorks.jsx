import { MdOutlineChatBubbleOutline, MdOutlineCalendarMonth, MdOutlineBuild, MdOutlineCheckCircleOutline } from 'react-icons/md';
import './HowItWorks.scss';

const steps = [
  {
    icon: <MdOutlineChatBubbleOutline />,
    number: '1',
    title: 'Entre em Contato',
    description: 'Preencha o formulário com os detalhes da montagem',
  },
  {
    icon: <MdOutlineCalendarMonth />,
    number: '2',
    title: 'Agende a Visita',
    description: 'Escolha o melhor dia e horário para você',
  },
  {
    icon: <MdOutlineBuild />,
    number: '3',
    title: 'Montagem Profissional',
    description: 'Nossa equipe monta seus móveis com cuidado',
  },
  {
    icon: <MdOutlineCheckCircleOutline />,
    number: '4',
    title: 'Aproveite!',
    description: 'Seus móveis prontos para uso imediato',
  },
];

function HowItWorks() {
  return (
    <section className="how-it-works section" id="como-funciona">
      <div className="container">
        <h2 className="section-title" style={{ fontStyle: 'italic' }}>Como Funciona</h2>
        <p className="section-subtitle">Processo simples e transparente</p>
        <div className="how-it-works__steps">
          {steps.map((step, index) => (
            <div className="how-it-works__step" key={index}>
              <div className="how-it-works__icon">{step.icon}</div>
              <h3 className="how-it-works__title">
                {step.number}. {step.title}
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
