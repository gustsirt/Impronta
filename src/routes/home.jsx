import { Link } from "react-router-dom";

export default function home() {
  return (
    <>
      <h1>home</h1>
      <Link to="/">Home</Link>
      <Link to="/about">Sobre Nosotros</Link>
      <Link to="/contact">Contacto</Link>
    </>
  )
}
