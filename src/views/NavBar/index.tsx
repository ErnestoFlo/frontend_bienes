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
                <Button> Iniciar Sesión </Button>
            </NavBarCard >  
            <Background>
                <InputCard>
                    <h2>Registrarse</h2>
                    <InputTXT title="nombre" placeholder="Nombre" />
                    <InputTXT title="correo" placeholder="Correo" />
                    <InputTXT title="contrasena" placeholder="Contraseña" />
                    <div className="">
                        <Button>Registrase!</Button>
                        <CancelButton>Cancelar</CancelButton>
                    </div>
                </InputCard>
            </Background>
        </div>
    )
}

export default NavBar;