import { HeroCarousel }  from "../componentes/Carousel";
import { Footer } from "../componentes/Footer";
import { Header } from "../componentes/Header";
import { ClockAlert, Users, UserStar, BookCheck, BanknoteCheck, ArrowRight } from "lucide-react";
import { Lightbulb, FileLock, UserCheck } from "lucide-react";
import "../estilos/Inicio.css";

const featuredServices = [
  {
    icon: ClockAlert,
    title: "Disponibilidad las 24 horas del día",
    description: "Contamos con un chat de soporte con disponibilidad para cualquier eventualidad que requiera de ayuda.",
  },
  {
    icon: Users,
    title: "Equipo de ingenieros altamente capacitados",
    description: "Nuestro equipo se encuentra propiamente entrenado para crear la solución ideal para tu negocio.",
  },
  {
    icon: UserStar,
    title: "Asesoramiento personalizado",
    description: "Te acompañamos durante todo el proceso de manera personal, asegurándonos de tener un trato diferenciado con cada uno de nuestros clientes.",
  },
  {
    icon: BookCheck,
    title: "Experticia en amplia variedad de campos tecnológicos",
    description: "Ponemos a tu disposición una gran variedad de servicios de acuerdo a lo que necesites en el momento, logrando resultados óptimos.",
  },
  {
    icon: BanknoteCheck,
    title: "Ajuste al presupuesto y tamaño del proyecto deseado",
    description: "No importa qué tan grande o pequeño sea tu negocio o empresa, te ofreceremos un servicio que satisfaga tus necesidades.",
  },
];

export function Inicio() {
  return (
    <>
      <Header />
      
      <main className="main-content">
        <div className="carousel-container">
          <HeroCarousel />
        </div>

        <section className="featured-cards-section">
          <div className="featured-cards-container">
            {featuredServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <article key={index} className="feature-card">
                  <div className="card-icon-wrapper">
                    <Icon className="card-icon" size={28} />
                  </div>
                  <h3 className="card-title">{service.title}</h3>
                  <p className="card-description">{service.description}</p>
                  <button className="card-action-btn" aria-label={`Ver más sobre ${service.title}`}>
                    <ArrowRight size={20} />
                  </button>
                </article>
              );
            })}
          </div>
        </section>

        <section className="valores-flipcards">
            <div className= "boxesContainer">

                <div className="cardBox">
                    <div className="card">
                        <div className="front">
                            <div className="flipcard-icon-wrapper">
                                <Lightbulb size={50} />
                            </div>
                            <h3>Innovación sin IA</h3>
                        </div>
                        <div className="back">
                            <p>Nuestros proyectos son planificados al 100% por nuestro equipo de ingenieros.
                                Creemos que la inteligencia artificial no debe reemplazar la creatividad y el ingenio humano,
                                sino que debe ser utilizada como una herramienta para potenciarlos.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="cardBox">
                    <div className="card">
                        <div className="front">
                            <div className="flipcard-icon-wrapper">
                                <FileLock size={50} />
                            </div>
                            <h3>Soluciones Personalizadas</h3>
                        </div>
                        <div className="back">
                            <p>Brindamos un trato especializado y personalizado a cada uno de nuestros clientes. 
                              Nuestro objetivo es hacer realidad la visión de tu negocio, y nuestra prioridad siempre será tu satisfacción.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="cardBox">
                    <div className="card">
                        <div className="front">
                            <div className="flipcard-icon-wrapper">
                                <UserCheck size={50} />
                            </div>
                            <h3>Seguridad Primero</h3>
                        </div>
                        <div className="back">
                            <p>Cada proyecto es tratado con la mayor discreción y confidencialidad posible,
                                garantizando la protección e integridad de tus datos.
                                Contamos con una estricta política de seguridad para asegurar que tu información esté siempre protegida.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
      </main>

      <Footer />
    </>
  );
}