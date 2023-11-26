import { Link } from "react-router-dom";

export default function about() {
  return (
    <>
      <h1>about</h1>
      <Link to="/">Home</Link>
      <Link to="/about">Sobre Nosotros</Link>
      <Link to="/contact">Contacto</Link>
    </>
  );
}
