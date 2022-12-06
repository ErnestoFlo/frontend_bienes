import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
  Navigate,
  Link
} from "react-router-dom";

import Button from "@components/NavBarButton";
import Page from "@components/Page";
import NavBarCard from "@components/NavBarCard";
import "./Home.css"
import ButtonOrientation from "@components/ButtonOrientation";
const Home = () => {
  return (
    <div>
      <NavBarCard >
        <h1>SEDAHE</h1>
        <Link to="/login">
            <Button>Logout</Button>
          </Link>
      </NavBarCard>
      <section className="contenedor">
        <h1 className="bienvenido">Bienvenido a SEDAHE!</h1>
        <p>Este es un sitio en donde se brinda el espacio para que
          puedas publicar y buscar propiedades de distintos tipos
          según tu preferencia.
        </p>
        <br />
        <div className="contenedorBotones">
          <br /><br />
          <Link to="/properties">
            <Button>Ver Propiedades</Button>
          </Link>
          <br /><br />
          <Link to="/properties/create">
            <Button>Publicar Propiedad</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
export default Home;