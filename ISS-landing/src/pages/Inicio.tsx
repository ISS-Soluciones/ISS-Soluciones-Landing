import { Carousel } from "../componentes/Carousel";
import { Header } from "../componentes/Header";
import "./Inicio.css";

export function Inicio() {
    return (
        <>
            <Header />
            <div className="hero-container">
                <Carousel />
            </div>
                
        </>

    )
}