import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
  Navigate,
  Link
} from "react-router-dom";

import Button from "@components/NavBarButton";
import Page from "@components/Page";
const Home = () => {
  return (
    <Page pageTitle="Home">
      <h1>Hola Mundo</h1>

      <Link to="/properties/create">
        <Button>Ingresar</Button>
      </Link>
    </Page>
  );
}
export default Home;