import { useEffect, useState } from 'react';
import CarouselSlide from './Carousel-slide';
import carrousel1 from '../assets/carrousel1.jpg';
import carrousel2 from '../assets/carrousel2.jpg';
import carrousel3 from '../assets/carrousel3.jpg';
import '../estilos/Carousel.css';

type Position = 'left' | 'center' | 'right';

type Slide = {
  imgSrc: string;
  title: string;
  description: string;
  position?: Position;
};

const slides: Slide[] = [
  {
    imgSrc: carrousel1,
    title: 'Software hecho a tu medida',
    description: 'No importa el tamaño de tu negocio, nuestro equipo es capaz de ofrecerte una solución personalizada que se adapte a tus necesidades y presupuesto, acompañandote en cada paso del proceso.',
    position: 'left',
  },
  {
    imgSrc: carrousel2,
    title: 'Soporte técnico virtual y presencial',
    description: 'Nuestra red de ingenieros altamente capacitados estarán a tu completa disposición para ofrecerte soporte técnico y mantenimiento de tus sistemas, asegurando que tu negocio funcione sin problemas.',
    position: 'center',
  },
  {
    imgSrc: carrousel3,
    title: 'Mantenimiento de equipos y redes',
    description: '¿Problemas con algún dispositivo? Contamos con técnicos especializados que llegarán a donde los necesites para realizar el mantenimiento o reparaciones correspondientes y dejarán tus equipos como nuevos.',
    position: 'right',
  },
];

export function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % slides.length);
    }, 6500);

    return () => window.clearInterval(intervalId);
  }, []);

  const goToPreviousSlide = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? slides.length - 1 : currentIndex - 1,
    );
  };

  const goToNextSlide = () => {
    setActiveIndex((currentIndex) => (currentIndex + 1) % slides.length);
  };

  return (
    <section className="hero-carousel" aria-label="Carrusel principal">
      <div className="hero-carousel__viewport">
        <div
          className="hero-carousel__track"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {slides.map((slide, index) => {
            const positionClass = `hero-carousel__caption--${slide.position ?? 'center'}`;

            return (
              <article 
                className="hero-carousel__slide" 
                key={slide.title} 
                aria-hidden={index !== activeIndex}
              >
                <CarouselSlide imgSrc={slide.imgSrc} />
                <div className={`hero-carousel__caption ${positionClass} ${index === activeIndex ? 'is-active' : ''}`}>
                  <h3>{slide.title}</h3>
                  <p>{slide.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <button
        type="button"
        className="hero-carousel__control hero-carousel__control--prev"
        onClick={goToPreviousSlide}
        aria-label="Slide anterior"
      >
        <span aria-hidden="true">‹</span>
      </button>

      <button
        type="button"
        className="hero-carousel__control hero-carousel__control--next"
        onClick={goToNextSlide}
        aria-label="Slide siguiente"
      >
        <span aria-hidden="true">›</span>
      </button>

      <div className="hero-carousel__indicators" aria-label="Indicadores del carrusel">
        {slides.map((slide, index) => (
          <button
            key={slide.title}
            type="button"
            className={`hero-carousel__indicator${index === activeIndex ? ' is-active' : ''}`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Ir a ${slide.title}`}
            aria-current={index === activeIndex ? 'true' : undefined}
          />
        ))}
      </div>
    </section>
  );
}