import Page from "@components/Page";
import { DateField, Field, FieldSelect } from "@components/InputField";
import ActionField from "@components/ActionField";
import { PrimaryButton, Button } from "@components/Buttons";
import { INewPropertie } from "src/store/Services/Properties";

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
        <Page pageTitle="NewPropertie">
            <section>
                <Field
                    name="titulo"
                    labelText="Titulo"
                    value={form.titulo}
                    onChange={(e) => {
                        onChangeHandler(e.target.name, e.target.value);
                    }}
                />

                <Field
                    name="precio"
                    labelText="Precio"
                    value={String(form.precio)}
                    type="number"
                    onChange={(e) => {
                        onChangeHandler(e.target.name, e.target.value);
                    }}
                />

                <Field
                    name="descripcion"
                    labelText="Descripción"
                    value={form.descripcion}
                    onChange={(e) => {
                        onChangeHandler(e.target.name, e.target.value);
                    }}
                />

                <Field
                    name="tipo"
                    labelText="Tipo"
                    value={form.tipo}
                    onChange={(e) => {
                        onChangeHandler(e.target.name, e.target.value);
                    }}
                />

                <Field
                    name="area"
                    labelText="Area"
                    value={form.area}
                    onChange={(e) => {
                        onChangeHandler(e.target.name, e.target.value);
                    }}
                />

                <Field
                    name="habitaciones"
                    labelText="Habitaciones"
                    value={String(form.habitaciones)}
                    type="number"
                    onChange={(e) => {
                        onChangeHandler(e.target.name, e.target.value);
                    }}
                />

                <Field
                    name="banios"
                    labelText="Baños"
                    value={String(form.banios)}
                    type="number"
                    onChange={(e) => {
                        onChangeHandler(e.target.name, e.target.value);
                    }}
                />

                <Field
                    name="garage"
                    labelText="Garage"
                    value={form.garage}
                    onChange={(e) => {
                        onChangeHandler(e.target.name, e.target.value);
                    }}
                />

                <Field
                    name="garage"
                    labelText="Garage"
                    value={form.garage}
                    onChange={(e) => {
                        onChangeHandler(e.target.name, e.target.value);
                    }}
                />

                <Field
                    name="terraza"
                    labelText="Terraza"
                    value={form.terraza}
                    onChange={(e) => {
                        onChangeHandler(e.target.name, e.target.value);
                    }}
                />

                <Field
                    name="direccion"
                    labelText="Dirección"
                    value={form.direccion}
                    onChange={(e) => {
                        onChangeHandler(e.target.name, e.target.value);
                    }}
                />

                <Field
                    name="nombreCompleto"
                    labelText="Nombre propietario"
                    value={form.nombreCompleto}
                    onChange={(e) => {
                        onChangeHandler(e.target.name, e.target.value);
                    }}
                />

                <Field
                    name="email"
                    labelText="Email"
                    value={form.email}
                    onChange={(e) => {
                        onChangeHandler(e.target.name, e.target.value);
                    }}
                />

                <Field
                    name="idPropietario"
                    labelText="ID propietario"
                    value={form.idPropietario}
                    onChange={(e) => {
                        onChangeHandler(e.target.name, e.target.value);
                    }}
                />

                <ActionField>
                        <PrimaryButton
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                onSubmitHandler();
                            }}
                        >Publicar
                        </PrimaryButton>
                        <Button
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                onCancelHandler();
                            }}
                        >Cancelar</Button>
                </ActionField>

            </section>
        </Page>
    );
};

export default PropertieUx;