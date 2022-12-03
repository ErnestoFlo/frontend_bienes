import PropertieUx from "./PropertieNewUx";
import { useNewPropertieMutation, INewPropertie } from "src/store/Services/Properties";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PropertieNew = () => {
    const [form, setForm] = useState<INewPropertie>({
        titulo: "",
        precio: 0,
        descripcion: "",
        tipo: "",
        area: "",
        habitaciones: "",
        banios: 0,
        garage: "",
        terraza: "",
        direccion: "",
        nombreCompleto: "",
        email: "",
        idPropietario: ""
    });

    const [newPropertie, {isLoading, error}] = useNewPropertieMutation();
    const Navigate = useNavigate();

    const onChangeHandler = (name:string, value:string|number) => {
        setForm({...form, [name]: value});
    }

    const onSubmitHandler = async () => {
        try {
            const data = await newPropertie(form).unwrap();
            console.log(data);
            Navigate("/create");
        } catch (error) {
            console.log(error);
        }
    }

    const onCancelHandler = () => {
        console.log('cancel');
        Navigate("/create");
    }
    return (
        <PropertieUx
            form={form}
            onChangeHandler={onChangeHandler}
            onSubmitHandler={onSubmitHandler}
            onCancelHandler={onCancelHandler}
        />
    );
};
export default PropertieNew;