import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import './QuoteForm.scss';

function QuoteForm() {
  const { t } = useLanguage();
  const tiposDisponiveis = t('quoteForm.tipos') || [];

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
      alert(t('quoteForm.alertRequired'));
      return;
    }

    // Format date to Brazilian format
    const dataFormatada = formData.data
      ? formData.data.split('-').reverse().join('/')
      : t('quoteForm.msgNaoInformada');

    // Build WhatsApp message preview
    const message = `${t('quoteForm.msgGreeting')}\n\n` +
      `*${t('quoteForm.msgNome')}:* ${formData.nome}\n` +
      `*${t('quoteForm.msgTelefone')}:* ${formData.telefone}\n` +
      `*${t('quoteForm.msgEmail')}:* ${formData.email || t('quoteForm.msgNaoInformado')}\n` +
      `*${t('quoteForm.msgTipoMovel')}:* ${formData.tiposMovel.map((v) => tiposDisponiveis.find((t) => t.value === v)?.label).join(', ')}\n` +
      `*${t('quoteForm.msgQuantidade')}:* ${formData.quantidade}\n` +
      `*${t('quoteForm.msgDataPreferida')}:* ${dataFormatada}\n` +
      `*${t('quoteForm.msgEndereco')}:* ${formData.endereco}\n` +
      `*${t('quoteForm.msgDetalhes')}:* ${formData.detalhes}`;

    alert(`${t('quoteForm.alertPreview')}\n\n${message}`);
  };

  return (
    <section className="quote-form section" id="orcamento">
      <div className="container">
        <div className="quote-form__card">
          <h2 className="section-title">{t('quoteForm.sectionTitle')}</h2>
          <p className="section-subtitle">
            {t('quoteForm.sectionSubtitle')}
          </p>

          <form className="quote-form__form" onSubmit={handleSubmit} id="form-orcamento">
            <div className="quote-form__row">
              <div className="quote-form__field">
                <label htmlFor="nome">{t('quoteForm.labelNome')}</label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  placeholder={t('quoteForm.placeholderNome')}
                  value={formData.nome}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="quote-form__field">
                <label htmlFor="telefone">{t('quoteForm.labelTelefone')}</label>
                <input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  placeholder={t('quoteForm.placeholderTelefone')}
                  maxLength={15}
                  value={formData.telefone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="quote-form__field">
              <label htmlFor="email">{t('quoteForm.labelEmail')}</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder={t('quoteForm.placeholderEmail')}
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="quote-form__field">
              <label>{t('quoteForm.labelTipoMovel')}</label>
              <div className="quote-form__checkboxes">
                {Array.isArray(tiposDisponiveis) && tiposDisponiveis.map((tipo) => (
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
              <label htmlFor="quantidade">{t('quoteForm.labelQuantidade')}</label>
              <input
                type="number"
                id="quantidade"
                name="quantidade"
                placeholder={t('quoteForm.placeholderQuantidade')}
                min="1"
                value={formData.quantidade}
                onChange={handleChange}
                required
              />
            </div>

            <div className="quote-form__field">
              <label htmlFor="data">{t('quoteForm.labelData')}</label>
              <input
                type="date"
                id="data"
                name="data"
                value={formData.data}
                onChange={handleChange}
              />
            </div>

            <div className="quote-form__field">
              <label htmlFor="endereco">{t('quoteForm.labelEndereco')}</label>
              <input
                type="text"
                id="endereco"
                name="endereco"
                placeholder={t('quoteForm.placeholderEndereco')}
                value={formData.endereco}
                onChange={handleChange}
                required
              />
            </div>

            <div className="quote-form__field">
              <label htmlFor="detalhes">{t('quoteForm.labelDetalhes')}</label>
              <textarea
                id="detalhes"
                name="detalhes"
                placeholder={t('quoteForm.placeholderDetalhes')}
                rows="4"
                value={formData.detalhes}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="quote-form__submit" id="btn-submit-orcamento">
              {t('quoteForm.submitButton')}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default QuoteForm;
