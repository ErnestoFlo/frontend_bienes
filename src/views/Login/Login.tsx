import Button from "@components/NavBarButton";
import NavBarCard from "@components/NavBarCard";
import InputCard from "@components/InputsCard";
import InputTXT from "@components/InputTxt";

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
                    <h2>Logo</h2>
                    <Button> Registrarse </Button>
            </NavBarCard >
            <section>  
                <InputCard>
                    <h2>Iniciar Sesion</h2>
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
                    <Button onClick={handleClick}>Ingresar</Button>
                </InputCard>
            </section>  
        </div>
    );
};

export default Login;