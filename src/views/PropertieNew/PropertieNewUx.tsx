import Page from "@components/Page";
import { DateField, Field, FieldSelect } from "@components/InputField";
import ActionField from "@components/ActionField";
//import { PrimaryButton, Button } from "@components/Buttons";
import { INewPropertie } from "src/store/Services/Properties";
import NavBarCard from "@components/NavBarCard";
import Button from "@components/NavBarButton";
import CancelButton from "@components/CancelButton";
import CreateCard from "@components/CreateCard";
import ColumnCard from "@components/ColumnCard";
import ButtonOrientation from "@components/ButtonOrientation";
import {
    BrowserRouter as Router,
    Route,
    Routes as Switch,
    Navigate,
    Link
} from "react-router-dom";

export interface IPropertieUx {
    form: INewPropertie;
    onChangeHandler: (name: string, value: string | number) => void;
    onSubmitHandler: () => void;
    onCancelHandler: () => void;
}

const PropertieUx = ({
    form,
    onChangeHandler,
    onSubmitHandler,
    onCancelHandler,
}: IPropertieUx) => {
    return (
        <div>
            <NavBarCard>
                <h2>Crear propiedad</h2>
            </NavBarCard>

            <section>
                <CreateCard>
                    <ColumnCard>
                        <Field
                            name="titulo"
                            labelText="Titulo"
                            placeholder="Titulo"
                            value={form.titulo}
                            onChange={(e) => {
                                onChangeHandler(e.target.name, e.target.value);
                            }}
                        />

                        <Field
                            name="precio"
                            labelText="Precio"
                            placeholder="Precio"
                            value={form.precio}
                            //type="text"
                            onChange={(e) => {
                                onChangeHandler(e.target.name, e.target.value);
                            }}
                        />

                        <Field
                            name="descripcion"
                            labelText="Descripci??n"
                            placeholder="Descripci??n"
                            value={form.descripcion}
                            onChange={(e) => {
                                onChangeHandler(e.target.name, e.target.value);
                            }}
                        />

                        <Field
                            name="tipo"
                            labelText="Tipo"
                            placeholder="Tipo"
                            value={form.tipo}
                            onChange={(e) => {
                                onChangeHandler(e.target.name, e.target.value);
                            }}
                        />

                        <Field
                            name="area"
                            labelText="Area"
                            placeholder="Area"
                            value={form.area}
                            onChange={(e) => {
                                onChangeHandler(e.target.name, e.target.value);
                            }}
                        />
                    </ColumnCard>

                    <ColumnCard>
                        <Field
                            name="habitaciones"
                            labelText="Habitaciones"
                            placeholder="Habitaciones"
                            value={form.habitaciones}
                            //type="text"
                            onChange={(e) => {
                                onChangeHandler(e.target.name, e.target.value);
                            }}
                        />

                        <Field
                            name="banios"
                            labelText="Ba??os"
                            placeholder="Ba??os"
                            value={form.banios}
                            //type="text"
                            onChange={(e) => {
                                onChangeHandler(e.target.name, e.target.value);
                            }}
                        />

                        <Field
                            name="garage"
                            labelText="Garage"
                            placeholder="Garage"
                            value={form.garage}
                            onChange={(e) => {
                                onChangeHandler(e.target.name, e.target.value);
                            }}
                        />

                        <Field
                            name="terraza"
                            labelText="Terraza"
                            placeholder="Terraza"
                            value={form.terraza}
                            onChange={(e) => {
                                onChangeHandler(e.target.name, e.target.value);
                            }}
                        />

                        <Field
                            name="direccion"
                            labelText="Direcci??n"
                            placeholder="Direcci??n"
                            value={form.direccion}
                            onChange={(e) => {
                                onChangeHandler(e.target.name, e.target.value);
                            }}
                        />

                    </ColumnCard>

                    <ButtonOrientation>

                        <Button
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                onSubmitHandler();
                            }}
                        >Publicar
                        </Button>

                        <CancelButton
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                onCancelHandler();
                            }}
                        >Cancelar</CancelButton>

                    </ButtonOrientation>


                </CreateCard>


            </section>
        </div>


    );
};

export default PropertieUx;