import { Link } from "react-router-dom";

export default function contact() {
  return (
    <>
      <h1>contact</h1>
      <Link to="/">Home</Link>
      <Link to="/about">Sobre Nosotros</Link>
      <Link to="/contact">Contacto</Link>
    </>
  );
}
