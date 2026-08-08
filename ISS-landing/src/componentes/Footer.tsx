import { DatabaseZap } from "lucide-react";
import { MapPin } from "lucide-react";
import { Send } from "lucide-react";
import { PhoneCall } from "lucide-react";

import '../estilos/Footer.css';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* Sección principal del Footer */}
      <div className="footer-container footer-grid">
        
        {/* Columna 1: Marca y descripción */}
        <div className="footer-brand">
          <div className="footer-logo-wrapper">
            <DatabaseZap size={40} color="#ffffff"/>
            <span className="footer-logo-text">ISS Soluciones</span>
          </div>
          <p className="footer-description">
            Transformamos ideas en soluciones tecnológicas de alto impacto. Innovación, calidad y eficiencia para hacer crecer tu negocio.
          </p>

          {/* Redes Sociales */}
          <div className="footer-socials">
            <a href="#" className="social-link" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.6a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z"/></svg>
            </a>
            <a href="#" className="social-link" aria-label="Twitter">
              <svg viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.05c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.58 8.58 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/></svg>
            </a>
            <a href="https://github.com/ISS-Soluciones" className="social-link" aria-label="GitHub">
              <svg viewBox="0 0 24 24"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>
            </a>
            <a href="#" className="social-link" aria-label="TikTok">
            <svg viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
            </a>
          </div>
        </div>

        {/* Columna 2: Enlaces Rápidos */}
        <div className="footer-col">
          <h3 className="footer-title">Soluciones</h3>
          <ul className="footer-list">
            <li><a href="#servicios">Desarrollo Web y Móvil</a></li>
            <li><a href="#servicios">Capacitaciones</a></li>
            <li><a href="#servicios">Soporte Técnico</a></li>
            <li><a href="#servicios">Soluciones de Hosting</a></li>
          </ul>
        </div>

        {/* Columna 3: Empresa */}
        <div className="footer-col">
          <h3 className="footer-title">Empresa</h3>
          <ul className="footer-list">
            <li><a href="#nosotros">Sobre Nosotros</a></li>
            <li><a href="#proyectos">Proyectos</a></li>
            <li><a href="#contacto">Contacto</a></li>
            <li><a href="#blog">Blog</a></li>
          </ul>
        </div>

        {/* Columna 4: Contacto */}
        <div className="footer-col">
          <h3 className="footer-title">Contacto</h3>
          <ul className="footer-list">
            <li className="contact-item">
              <MapPin size={20} color="#cbd5e1"/>
              <span>Lima, Perú</span>
            </li>
            <li className="contact-item">
              <Send size={20} color="#cbd5e1"/>
              <a href="mailto:iss.solucionestecnologicas@gmail.com">iss.solucionestecnologicas@gmail.com</a>
            </li>
            <li className="contact-item">
              <PhoneCall size={20} color="#cbd5e1"/>
              <a href="tel:+51933468699">+51 933 468 699</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Línea divisoria y Copyright */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p>&copy; {currentYear} ISS Soluciones. Todos los derechos reservados.</p>
          <div className="footer-bottom-links">
            <a href="#privacidad">Política de Privacidad</a>
            <a href="#terminos">Términos de Servicio</a>
            <a href="#cookies">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}