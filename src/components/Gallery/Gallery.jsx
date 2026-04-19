import gallery1 from '../../assets/images/gallery-1.png';
import gallery2 from '../../assets/images/gallery-2.png';
import gallery3 from '../../assets/images/gallery-3.png';
import './Gallery.scss';

const images = [
  { src: gallery1, alt: 'Montagem com furadeira profissional' },
  { src: gallery2, alt: 'Montagem de móvel com chave de fenda' },
  { src: gallery3, alt: 'Guarda-roupa finalizado' },
];

function Gallery() {
  return (
    <section className="gallery section" id="galeria">
      <div className="container">
        <h2 className="section-title">Nossos Trabalhos</h2>
        <p className="section-subtitle">
          Confira alguns dos nossos serviços realizados
        </p>
        <div className="gallery__grid">
          {images.map((image, index) => (
            <div className="gallery__item" key={index}>
              <img src={image.src} alt={image.alt} loading="lazy" />
              <div className="gallery__overlay">
                <span className="gallery__label">{image.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
