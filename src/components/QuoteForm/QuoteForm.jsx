import { useState } from 'react';
import './QuoteForm.scss';

function QuoteForm() {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    tiposMovel: [],
    quantidade: '',
    data: '',
    endereco: '',
    detalhes: '',
  });

  const tiposDisponiveis = [
    { value: 'sala', label: 'Móveis de Sala' },
    { value: 'quarto', label: 'Móveis de Quarto' },
    { value: 'escritorio', label: 'Móveis de Escritório' },
    { value: 'planejados', label: 'Móveis Planejados' },
    { value: 'outro', label: 'Outro' },
  ];

  const formatPhone = (value) => {
    const digits = value.replace(/\D/g, '').slice(0, 11);
    if (digits.length <= 2) return digits.length ? `(${digits}` : '';
    if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'telefone') {
      setFormData((prev) => ({ ...prev, telefone: formatPhone(value) }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleCheckbox = (value) => {
    setFormData((prev) => {
      const tipos = prev.tiposMovel.includes(value)
        ? prev.tiposMovel.filter((t) => t !== value)
        : [...prev.tiposMovel, value];
      return { ...prev, tiposMovel: tipos };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.nome || !formData.telefone || formData.tiposMovel.length === 0 || !formData.quantidade || !formData.endereco || !formData.detalhes) {
      alert('⚠️ Por favor, preencha todos os campos obrigatórios antes de enviar.');
      return;
    }

    // Format date to Brazilian format
    const dataFormatada = formData.data
      ? formData.data.split('-').reverse().join('/')
      : 'Não informada';

    // Build WhatsApp message preview
    const message = `Olá! Gostaria de solicitar um orçamento:\n\n` +
      `*Nome:* ${formData.nome}\n` +
      `*Telefone:* ${formData.telefone}\n` +
      `*E-mail:* ${formData.email || 'Não informado'}\n` +
      `*Tipos de Móvel:* ${formData.tiposMovel.map((v) => tiposDisponiveis.find((t) => t.value === v)?.label).join(', ')}\n` +
      `*Quantidade:* ${formData.quantidade}\n` +
      `*Data Preferida:* ${dataFormatada}\n` +
      `*Endereço:* ${formData.endereco}\n` +
      `*Detalhes:* ${formData.detalhes}`;

    alert(`📋 Prévia da mensagem que seria enviada via WhatsApp:\n\n${message}`);
  };

  return (
    <section className="quote-form section" id="orcamento">
      <div className="container">
        <div className="quote-form__card">
          <h2 className="section-title">Faça Seu Orçamento</h2>
          <p className="section-subtitle">
            Preencha os dados abaixo e receba um orçamento personalizado
          </p>

          <form className="quote-form__form" onSubmit={handleSubmit} id="form-orcamento">
            <div className="quote-form__row">
              <div className="quote-form__field">
                <label htmlFor="nome">Nome Completo *</label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  placeholder="Seu nome completo"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="quote-form__field">
                <label htmlFor="telefone">Telefone/WhatsApp *</label>
                <input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  placeholder="(11) 99999-9999"
                  maxLength={15}
                  value={formData.telefone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="quote-form__field">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="seu@email.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="quote-form__field">
              <label>Tipo de Móvel *</label>
              <div className="quote-form__checkboxes">
                {tiposDisponiveis.map((tipo) => (
                  <label key={tipo.value} className="quote-form__checkbox-label">
                    <input
                      type="checkbox"
                      checked={formData.tiposMovel.includes(tipo.value)}
                      onChange={() => handleCheckbox(tipo.value)}
                    />
                    <span>{tipo.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="quote-form__field">
              <label htmlFor="quantidade">Quantidade de Peças *</label>
              <input
                type="number"
                id="quantidade"
                name="quantidade"
                placeholder="Ex: 3"
                min="1"
                value={formData.quantidade}
                onChange={handleChange}
                required
              />
            </div>

            <div className="quote-form__field">
              <label htmlFor="data">Data Preferida</label>
              <input
                type="date"
                id="data"
                name="data"
                value={formData.data}
                onChange={handleChange}
              />
            </div>

            <div className="quote-form__field">
              <label htmlFor="endereco">Endereço Completo *</label>
              <input
                type="text"
                id="endereco"
                name="endereco"
                placeholder="Rua, número, bairro, cidade"
                value={formData.endereco}
                onChange={handleChange}
                required
              />
            </div>

            <div className="quote-form__field">
              <label htmlFor="detalhes">Detalhes Adicionais *</label>
              <textarea
                id="detalhes"
                name="detalhes"
                placeholder="Descreva os móveis que precisam ser montados (marca, modelo, observações especiais...)"
                rows="4"
                value={formData.detalhes}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="quote-form__submit" id="btn-submit-orcamento">
              Solicitar Orçamento Gratuito
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default QuoteForm;
