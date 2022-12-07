import { useState } from "react";
import PropertieUx from "./PropertiesUx";
import { useAllPropertieQuery } from "@store/Services/Properties";
import { useNavigate } from "react-router-dom";
const Propertie = () => {
    const{data} = useAllPropertieQuery({} , {refetchOnMountOrArgChange: true, refetchOnFocus: true});
    const Navigate = useNavigate();
    console.log(data);
    return(
        <PropertieUx
            data={data}
        />
    )
};

export default Propertie;