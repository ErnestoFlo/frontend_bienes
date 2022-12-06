import {
    BrowserRouter as Router,
    Route,
    Routes as Switch,
    Navigate,
    Link
} from "react-router-dom";

import Button from "@components/NavBarButton";
import NavBarCard from "@components/NavBarCard";
import Background from "@components/Background";
import InputCard from "@components/InputsCard";
import InputTXT from "@components/InputTxt";
import CancelButton from "@components/CancelButton";

const NavBar = () => {
    return (
        <div>
            <NavBarCard >
                <h2>Logo</h2>
                <Link to="/login">
                    <Button> Iniciar Sesión </Button>  
                </Link>
            </NavBarCard >  
            <Background>
                <InputCard>
                    <h2>Registrarse</h2>
                    <InputTXT title="nombre" placeholder="Nombre" />
                    <InputTXT title="correo" placeholder="Correo" />
                    <InputTXT title="contrasena" placeholder="Contraseña" />
                    <div className="">
                    
                        <Link to="/home">
                            <Button>Registrase!</Button>
                        </Link>

                        <Link to="/login">
                            <CancelButton>Cancelar</CancelButton>
                        </Link>
                    </div>
                </InputCard>
            </Background>
        </div>
    )
}

export default NavBar;