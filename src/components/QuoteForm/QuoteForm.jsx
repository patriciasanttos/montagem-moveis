import { useState } from 'react';
import './QuoteForm.scss';

function QuoteForm() {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    tipoMovel: '',
    quantidade: '',
    data: '',
    endereco: '',
    detalhes: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Build WhatsApp message
    const message = `Olá! Gostaria de solicitar um orçamento:\n\n` +
      `*Nome:* ${formData.nome}\n` +
      `*Telefone:* ${formData.telefone}\n` +
      `*E-mail:* ${formData.email}\n` +
      `*Tipo de Móvel:* ${formData.tipoMovel}\n` +
      `*Quantidade:* ${formData.quantidade}\n` +
      `*Data Preferida:* ${formData.data}\n` +
      `*Endereço:* ${formData.endereco}\n` +
      `*Detalhes:* ${formData.detalhes}`;

    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
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

            <div className="quote-form__row">
              <div className="quote-form__field">
                <label htmlFor="tipoMovel">Tipo de Móvel *</label>
                <select
                  id="tipoMovel"
                  name="tipoMovel"
                  value={formData.tipoMovel}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>Selecione o tipo</option>
                  <option value="sala">Móveis de Sala</option>
                  <option value="quarto">Móveis de Quarto</option>
                  <option value="escritorio">Móveis de Escritório</option>
                  <option value="planejados">Móveis Planejados</option>
                  <option value="outro">Outro</option>
                </select>
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
              <label htmlFor="detalhes">Detalhes Adicionais</label>
              <textarea
                id="detalhes"
                name="detalhes"
                placeholder="Forneça mais informações sobre a montagem (marca, modelo, observações especiais...)"
                rows="4"
                value={formData.detalhes}
                onChange={handleChange}
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
