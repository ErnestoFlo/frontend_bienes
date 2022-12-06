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

export interface IUserUXProps {
    email: string;
    setEmail: (email: string) => void;
    user: string;
    setUser: (user: string) => void;
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
    user,
    setUser,
    error,
    handleClick
  } : IUserUXProps) => {
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
                    <InputTXT name="nombre" value={user} onChange={(e) => setUser(e.target.value)} title="nombre" placeholder="Nombre" />
                    <InputTXT name="correo" value={email} onChange={(e) => setEmail(e.target.value)} title="correo" placeholder="Correo" />
                    <InputTXT name="contrasena" value={password} onChange={(e) => setPassword(e.target.value)} title="contrasena" placeholder="Contraseña" />
                    <div className="">
                    
                        <Link to="/home">
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