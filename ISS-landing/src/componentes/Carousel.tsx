import Carousel from 'react-bootstrap/Carousel';
import CarouselSlide from './Carousel-slide';

export function HeroCarousel() {
  return (
    <Carousel >
      <Carousel.Item>
        <CarouselSlide imgSrc="src/assets/sample-hero.png" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <CarouselSlide imgSrc="src/assets/sample-hero.png" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <CarouselSlide imgSrc="src/assets/sample-hero.png" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

