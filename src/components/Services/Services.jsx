import { MdOutlineWeekend, MdOutlineBed, MdOutlineDesktopMac, MdOutlineHome, MdOutlineBuild, MdOutlineAccessTime } from 'react-icons/md';
import './Services.scss';

const servicesData = [
  {
    icon: <MdOutlineWeekend />,
    title: 'Móveis de Sala',
    description: 'Sofás, estantes, racks e mesas de centro',
  },
  {
    icon: <MdOutlineBed />,
    title: 'Móveis de Quarto',
    description: 'Camas, guarda-roupas, cômodas e criados-mudos',
  },
  {
    icon: <MdOutlineDesktopMac />,
    title: 'Móveis de Escritório',
    description: 'Mesas, cadeiras, armários e estações de trabalho',
  },
  {
    icon: <MdOutlineHome />,
    title: 'Móveis Planejados',
    description: 'Instalação completa de projetos planejados',
  },
  {
    icon: <MdOutlineBuild />,
    title: 'Manutenção',
    description: 'Ajustes, reparos e reforços em móveis',
  },
  {
    icon: <MdOutlineAccessTime />,
    title: 'Atendimento Rápido',
    description: 'Agendamento flexível e pontualidade garantida',
  },
];

function Services() {
  return (
    <section className="services section" id="servicos">
      <div className="container">
        <h2 className="section-title">Nossos Serviços</h2>
        <p className="section-subtitle">
          Montamos todos os tipos de móveis com qualidade e segurança
        </p>
        <div className="services__grid">
          {servicesData.map((service, index) => (
            <div className="services__card" key={index} id={`service-card-${index}`}>
              <div className="services__icon">{service.icon}</div>
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
