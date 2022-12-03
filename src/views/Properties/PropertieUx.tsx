import Page from "@components/Page";
import { IPropertie, INewPropertie } from "src/store/Services/Properties";
import ErrorField from "@components/ErrorField";
import Card from "@components/Card";
import Paging from "@components/Paging";
import { formatCurrency } from "@helpers/NumberFormat";

import "./Properties.css";
import { CircleButton } from "@components/Buttons";

//Realizamos la interfaz que nos permitira ver una cantidad determinada
//de elementos por cada página
interface IPropertieUxProps {
    
}

//Realizamos la estructura que tendran los card de cada propiedad
const PropertieCard = (item: IPropertie, viewDetailClick: (id:string)=> void ) => {
}