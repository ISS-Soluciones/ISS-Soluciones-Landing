import { useEffect, useState } from 'react';
import CarouselSlide from './Carousel-slide';
import sampleHero from '../assets/sample-hero.png';

type Slide = {
  imgSrc: string;
  title: string;
  description: string;
};

const slides: Slide[] = [
  {
    imgSrc: sampleHero,
    title: 'Foto principal',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    imgSrc: sampleHero,
    title: 'Secundario',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    imgSrc: sampleHero,
    title: 'Tercero',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

export function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % slides.length);
    }, 3500);

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
          {slides.map((slide, index) => (
            <article className="hero-carousel__slide" key={slide.title} aria-hidden={index !== activeIndex}>
              <CarouselSlide imgSrc={slide.imgSrc} />
              <div className="hero-carousel__caption">
                <h3>{slide.title}</h3>
                <p>{slide.description}</p>
              </div>
            </article>
          ))}
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