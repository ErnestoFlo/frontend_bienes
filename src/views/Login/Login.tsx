import {
    BrowserRouter as Router,
    Route,
    Routes as Switch,
    Navigate,
    Link
} from "react-router-dom";

import Button from "@components/NavBarButton";
import NavBarCard from "@components/NavBarCard";
import InputCard from "@components/InputsCard";
import InputTXT from "@components/InputTxt";
import "./Login.css"

export interface ILoginUXProps {
    email: string;
    setEmail: (email: string) => void;
    password: string;
    setPassword: (password: string) => void;
    error: any;
    handleClick: () => void;
}

const Login = ({
    email,
    setEmail,
    password,
    setPassword,
    error,
    handleClick,
}: ILoginUXProps) => {
    return (
        <div>
            <NavBarCard >
                <h1>SEDAHE</h1>
                <Link to="/register">
                    <Button> Registrarse </Button>
                </Link>
            </NavBarCard >
            <section>
                <InputCard>
                    <h2 className="texto">Iniciar Sesion</h2>
                    <InputTXT
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email-address"
                    />
                    <InputTXT
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                    />
                    {error && <p>{JSON.stringify(error)}</p>}
                    <Link to="/home">
                        <Button onClick={handleClick}>Ingresar</Button>
                    </Link>

                </InputCard>
            </section>
        </div>
    );
};

export default Login;