import { Package } from "lucide-react";
import "./Header.css";

export function Header(){
    return (
        <header className="header-container">
            <div className="header-content" style={{width: "20%"}}>
                <Package size={40} color="#333"/>
                <h1 className="header-title">ISS Soluciones</h1>
            </div>
            <div className="header-content" style={{width: "50%"}}>
                <h2>Servicios</h2>
                <h2>Inicio</h2>
                <h2>Blog</h2>
                <h2>Sobre Nosotros</h2>
                
            </div>
        </header>
    )
}