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
import ErrorField from "@components/ErrorField";
import "./SignUp.css"

export interface IUserUXProps {
    email: string;
    setEmail: (email: string) => void;
    name: string;
    setName: (user: string) => void;
    password: string;
    setPassword: (password: string) => void;
    error: any;
    handleClick: () => void;
  }

const SignUp = ({
    email,
    setEmail,
    password,
    setPassword,
    name,
    setName,
    error,
    handleClick
  } : IUserUXProps) => {
    return (
        <div>
            <NavBarCard >
                 <h1>SEDAHE</h1>
                <Link to="/login">
                    <Button> Iniciar Sesión </Button>  
                </Link>
            </NavBarCard >  
            <Background>
                <InputCard>
                    <h2 className="texto">Registrarse</h2>
                    <InputTXT name="nombre" value={name} onChange={(e) => setName(e.target.value)} title="nombre" placeholder="Nombre" />
                    <InputTXT name="correo" value={email} onChange={(e) => setEmail(e.target.value)} title="correo" placeholder="Correo" />
                    <InputTXT name="contrasena" type="password" value={password} onChange={(e) => setPassword(e.target.value)} title="contrasena" placeholder="Contraseña" />
                    <div className="">
                    
                        <Link to="/login">
                            {error && <ErrorField>{error?.data?.error}</ErrorField>}
                            <Button onClick={handleClick}>Registrase!</Button>
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

export default SignUp;