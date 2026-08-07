import { CarouselSlide } from "./Carousel-slide"
import "/src/pages/Inicio.css";


export function Carousel() {
    return (
        <div className="carousel-container">
            <CarouselSlide imgSrc="/src/assets/sample-hero.png"/>
            <CarouselSlide imgSrc="/src/assets/sample-hero.png" />
            <CarouselSlide imgSrc="/src/assets/sample-hero.png" />
            <CarouselSlide imgSrc="/src/assets/sample-hero.png" />
        </div>
    )
}
