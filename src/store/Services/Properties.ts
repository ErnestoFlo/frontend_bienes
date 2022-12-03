//Este archivo es el ncargado de obtener la información del backend
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { ObjectId } from "mongodb";

//Creamos la interfaz que nos ayudará a poder visualizar los datos de la entidad
export interface IPropertie {
    titulo: string;
    precio: number;
    descripcion: string;
    imagen?: string;
    fechaPublic?: Date;
    tipo: string[];
    area: string;
    habitaciones: number;
    banios: number;
    estado: string[];
    garage: string;
    terraza: string;
    direccion: string;
    propietario: [
        nombreCompleto: string,
        email: string,
        idPropietario: { type: ObjectId, ref: "IUser" }
    ];
    _id?: unknown;
}

//Esta es una interfaz que nos permite crear o agregar una nueva propiedad a la app
export interface INewPropertie {
    titulo: string;
    precio: number;
    descripcion: string;
    tipo: string;
    area: string;
    habitaciones: string;
    banios: number;
    garage: string;
    terraza: string;
    direccion: string;
    nombreCompleto: string;
    email: string;
    idPropietario: string
}

//Creamos la Api con sus ednPoint correspondientes los cuales nos permitiran realizar
//las peticiones del correspondiente CRUD
export const propertieApi = createApi({
    reducerPath: "propertieApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.REACT_APP_API_BASE_URL}/properties`,
        prepareHeaders: (headers, { getState }) => {
            headers.set("apikey", process.env.REACT_APP_API_KEY as string);
            const token = (getState() as RootState).sec.token;
            if (token) {
                headers.set("Autorization", `Bearer ${token}`);
            }
        }
    }),
    tagTypes: ["Propertie"],
    endpoints: (builder) => ({
        newPropertie: builder.mutation({
            query: (body: INewPropertie) => {
              return {
                url: "create",
                method: "POST",
                body
              }
            },
            invalidatesTags: ["Propertie"]
        })
    })
});

export const { useNewPropertieMutation } = propertieApi;

