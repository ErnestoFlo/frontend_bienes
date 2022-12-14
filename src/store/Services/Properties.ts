//Este archivo es el ncargado de obtener la información del backend
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { ObjectId } from "mongodb";

//Creamos la interfaz que nos ayudará a poder visualizar los datos de la entidad
export interface IPropertie {
    titulo: string;
    precio: string;
    descripcion: string;
    imagen?: string;
    fechaPublic?: Date;
    tipo: string[];
    area: string;
    habitaciones: string;
    banios: string;
    estado: string[];
    garage: string;
    terraza: string;
    direccion: string;
    propietario: [
        nombreCompleto: string,
        email: string,
        idPropietario: { type: ObjectId, ref: "IUser" }
    ];
    _id: string;
    type: string;
}

//Esta es una interfaz que nos permite crear o agregar una nueva propiedad a la app
export interface INewPropertie {
    titulo: string;
    precio: string;
    descripcion: string;
    tipo: string;
    area: string;
    habitaciones: string;
    banios: string;
    garage: string;
    terraza: string;
    direccion: string;
}

export interface IGetAllProperties {
    total: number;
    totalPages: number;
    page: number;
    itemsPerPage: number;
    items: IPropertie[];
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
                headers.set("Authorization", `Bearer ${token}`);
            }
        }
    }),
    tagTypes: ["Propertie"],
    endpoints: (builder) => ({
        allPropertie: builder.query({
            query: ()=>"/AllProperties",
            providesTags: ["Propertie"]
        }),
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

export const { useNewPropertieMutation, useAllPropertieQuery } = propertieApi;

