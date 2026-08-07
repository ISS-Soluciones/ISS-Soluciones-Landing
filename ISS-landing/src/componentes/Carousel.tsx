import Carousel from 'react-bootstrap/Carousel';
import CarouselSlide from './Carousel-slide';

export function HeroCarousel() {
  return (
    <Carousel fade >
      <Carousel.Item>
        <CarouselSlide imgSrc="src/assets/sample-hero.png" />
        <Carousel.Caption>
          <h3>Foto principal</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <CarouselSlide imgSrc="src/assets/sample-hero.png" />
        <Carousel.Caption>
          <h3>Secundario</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <CarouselSlide imgSrc="src/assets/hero.png" />
        <Carousel.Caption>
          <h3>Tercero</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

