import { HeroCarousel }  from "../componentes/Carousel";
import { Footer } from "../componentes/Footer";
import { Header } from "../componentes/Header";
import "./Inicio.css";

export function Inicio() {
    return (
        <>
            <Header />
            <div className="carousel-container">
                <HeroCarousel />
            </div>
            <Footer/>
                
        </>

    )
}