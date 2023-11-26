import { Link, NavLink, Outlet } from 'react-router-dom';
import {
  BiLogoLinkedin,
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoGmail,
  BiLogoWhatsapp,
  BiCaretRight,
  BiCaretDown,
} from 'react-icons/bi';
import './root.scss';

export default function root() {
  return (
    <>
      <header className='header'>
        <Link to="/"><img src='./img/Logotipado.png' alt='Logotipo'/></Link>
        <nav className="nav">
          <ul>
            <li>
              <NavLink to="/">Inicio</NavLink>
            </li>
            <li>
              <NavLink to="about/">Acerca de</NavLink>
            </li>
            <li>
              <NavLink to="contact/">Contacto</NavLink>
            </li>
            <li>
              <NavLink to="refcolores/">Colores a Usar</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main className="main">
        <Outlet />
      </main>
      <footer className="footer">
        <img src='./img/Logotipado claro.png' alt='Impronta'/>
        <p className="title">Impronta</p>
        <p className="descrip">
          Consultora especializada en sistemas de gestión, ciberseguridad y
          manejo de datos. Contamos con más de 30 años de experiencia en
          auditorías internas de diferentes normas ISO y IATF entre otras e
          implementación de sistemas de gestión.
        </p>
        <div className="social-links">
          <a
            href="https://wa.me/5493482410412?text=Hola.%20Me%20gustaría%20contactarme%20contigo%20acerca%20de%20Impronta"
            target="_blank"
            rel="noreferrer"
          >
            <BiLogoWhatsapp />
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <BiLogoFacebook />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <BiLogoInstagram />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            <BiLogoLinkedin />
          </a>
          <a
            href="mailto:ojedaamunategui@hotmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <BiLogoGmail />
          </a>
        </div>
        <div className="copyright">
          &copy; Copyright {new Date().getFullYear() + ' - '}
          <strong> Impronta</strong>. Todos los derechos reservados
        </div>
      </footer>
    </>
  );
}
