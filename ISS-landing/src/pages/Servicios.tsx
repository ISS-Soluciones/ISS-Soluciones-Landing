import { useState } from "react";
import { Footer } from "../componentes/Footer";
import { Header } from "../componentes/Header";
import "../estilos/Servicios.css";

export function Servicios() {
    const [isCapacitacionesOpen, setIsCapacitacionesOpen] = useState(false);

    return (
        <>
            <Header />
            <main className="main-content">
                <section className="services-section">
                    <h2>Servicios</h2>
                    <p>Descripción de los servicios ofrecidos.</p>
                </section>
                <div className="services-list">
                    <ul className="list-contain">
                        <div className="column-header">
                            <span className="badge-bar border-blue"></span>
                            <h2>Servicios Fisicos</h2>
                            <ul className="list-contain sub-list">
                                <li className="card-wrap">
                                    <button
                                        type="button"
                                        className={`toggle-button ${isCapacitacionesOpen ? "open" : ""}`}
                                        onClick={() => setIsCapacitacionesOpen((prev) => !prev)}
                                    >
                                        Capacitaciones
                                    </button>
                                    {isCapacitacionesOpen && (
                                        <ul className="list-capacitacion open">
                                            <li className="card-wrap">Fundamentos de Programación</li>
                                            <li className="card-wrap">Python para Principiantes</li>
                                            <li className="card-wrap">HTML + CSS para Principiantes</li>
                                        </ul>
                                    )}
                                </li>

                                <li className="card-wrap">Mantenimiento PCs</li>
                                <li className="card-wrap">Soporte Técnico (Presencial)</li>
                            </ul>
                        </div>
                    </ul>
                    <ul className="list-contain">
                        <div className="column-header">
                            <span className="badge-bar border-green"></span>
                            <h2>Servicios Digitales</h2>
                            <li className="card-wrap green">Diseño Web</li>
                            <li className="card-wrap green">Hosting y Dominios</li>
                            <li className="card-wrap green">Apps Móviles (Android)</li>
                            <li className="card-wrap green">Apps Web (API)</li>
                            <li className="card-wrap green">Programas de baja y mediana escala</li>
                            <li className="card-wrap green">Soporte Técnico (Virtual)</li>
                        </div>
                    </ul>
                </div>
            </main>
            <Footer />
        </>
    );
}