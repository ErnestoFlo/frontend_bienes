import Page from "@components/Page";
import { IPropertie, IGetAllProperties } from "@store/Services/Properties";
import ErrorField from "@components/ErrorField";
import Card from "@components/Card";
import Paging from "@components/Paging";
import { formatCurrency } from "@helpers/NumberFormat";
import "./Properties.css";
import { CircleButton } from "@components/Buttons";
interface IPropertieUxProps {
    error?: any;
    data?: IGetAllProperties;
    isLoading?: boolean;
    changePageLimit?: (page: number, limit: number) => void;
    addPageClick?: () => void;
    viewDetailClick?: (id: string) => void;
}

const PropertieCard = (item: IPropertie, viewDetailClick: (id: string) => void) => {
    return (
        <Card>
            <div>{item.titulo}</div>
            <div>{item.precio}</div>
            <div>{item.descripcion}</div>
            <div>{item.direccion}</div>
        </Card>
    );
};

const PropertiesUx = ({
    data,
    changePageLimit = (p, l) => {
        console.log("PG", { p, l });
    },
    addPageClick = () => { },
    viewDetailClick = (id) => { },
}: IPropertieUxProps) => {
    return (
        <div>
            <section className="PropertieHolder">
                {data && data.items.map((o: IPropertie) => PropertieCard(o, viewDetailClick))}
            </section>
            <CircleButton className="floateLeftButton"
                onClick={() => { addPageClick() }}
            >+</CircleButton>
            <Paging
                currentPage={data?.page || 1}
                totalPages={data?.totalPages || 0}
                pageLimit={data?.itemsPerPage || 10}
                onPageChange={(page) => {
                    changePageLimit(page, data?.itemsPerPage || 10);
                }}
                onLimitChange={(limit) => {
                    changePageLimit(data?.page || 1, limit);
                }}
            />
        </div>
    );
};

export default PropertiesUx;