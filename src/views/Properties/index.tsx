import { useState } from "react";
import PropertieUx from "./PropertiesUx";
import { useAllPropertieQuery } from "@store/Services/Properties";
import { useNavigate } from "react-router-dom";
const Propertie = () => {
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const changePageLimit = (p: number, l: number) => {
        setPage(p);
        setLimit(l);
    };
    const { data } = useAllPropertieQuery({
        page,
        items: limit,
    });
    const Navigate = useNavigate();
    return (
        <PropertieUx
            data={data}
            changePageLimit={changePageLimit}
            addPageClick={() => { Navigate("/properties/create") }}
            viewDetailClick={(id) => { Navigate(`/properties/${id}`) }}
        />
    );
};

export default Propertie;