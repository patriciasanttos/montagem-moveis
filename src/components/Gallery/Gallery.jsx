import { useLanguage } from '../../context/LanguageContext';
import gallery1 from '../../assets/images/gallery-1.png';
import gallery2 from '../../assets/images/gallery-2.png';
import gallery3 from '../../assets/images/gallery-3.png';
import './Gallery.scss';

const images = [gallery1, gallery2, gallery3];

function Gallery() {
  const { t } = useLanguage();
  const imageLabels = t('gallery.images') || [];

  return (
    <section className="gallery section" id="galeria">
      <div className="container">
        <h2 className="section-title">{t('gallery.sectionTitle')}</h2>
        <p className="section-subtitle">
          {t('gallery.sectionSubtitle')}
        </p>
        <div className="gallery__grid">
          {images.map((imageSrc, index) => (
            <div className="gallery__item" key={index}>
              <img src={imageSrc} alt={imageLabels[index] || `Gallery image ${index + 1}`} loading="lazy" />
              <div className="gallery__overlay">
                <span className="gallery__label">{imageLabels[index] || ''}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
