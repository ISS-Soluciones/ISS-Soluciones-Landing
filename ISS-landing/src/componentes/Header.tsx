import { DatabaseZap } from "lucide-react";
import "./Header.css";

export function Header(){
    return (
        <header className="header-container">
            <div className="header-logo">
                <DatabaseZap size={35} color="#333"/>
                <h1 className="header-title">ISS Soluciones Tecnológicas</h1>
            </div>
            <div className="header-categories">
                <ul className="header-categories-list">
                    <li className="menu-item">
                        <a href="/" className="nav-link">
                            Inicio
                        </a>
                    </li>
                    <li className="menu-item has-dropdown">
                        <a title="Servicios" href="/servicios" className="nav-link">
                            Servicios
                        </a>
                        
                        <div className="dropdown-menu">
                            <div className="dropdown-container">
                                <div className="dropdown-column fisicos">
                                    <div className="column-header">
                                        <span className="badge-bar border-blue"></span>
                                        <h2>Servicios Físicos</h2>
                                    </div>
                                    <div className="services-list">
                                        <ul className="list-container">
                                            <li className="card-wrapper">Capacitaciones</li>
                                            <ul className="list-capacitaciones">
                                                <li className="card-wrapper">Fundamentos de Programación</li>
                                                <li className="card-wrapper">Python para Principiantes</li>
                                                <li className="card-wrapper">HTML + CSS para Principiantes</li>
                                            </ul>
                                            <li className="card-wrapper">Mantenimiento PCs</li>
                                            <li className="card-wrapper">Soporte Técnico (Presencial)</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="dropdown-column digitales">
                                    <div className="column-header">
                                        <span className="badge-bar border-red"></span>
                                        <h2>Servicios Digitales</h2>
                                    </div>
                                    <div className="services-list">
                                        <ul className="list-container">
                                            <li className="card-wrapper">Diseño Web</li>
                                            <li className="card-wrapper">Hosting y Dominios</li>
                                            <li className="card-wrapper">Apps Móviles (Android)</li>
                                            <li className="card-wrapper">Apps Web (API)</li>
                                            <li className="card-wrapper">Programas de baja y mediana escala</li>
                                            <li className="card-wrapper">Soporte Técnico (Virtual)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="menu-item">
                        <a href="/blog" className="nav-link">
                            Blog
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="/sobre-nosotros" className="nav-link">
                            Sobre Nosotros
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="/contacto" className="nav-link">
                            Contacto
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    )
}