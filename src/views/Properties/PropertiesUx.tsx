import Page from "@components/Page";
import { IPropertie, IGetAllProperties } from "@store/Services/Properties";
import ErrorField from "@components/ErrorField";
import Card from "@components/Card";
import Paging from "@components/Paging";
import { formatCurrency } from "@helpers/NumberFormat";
import { Link } from "react-router-dom";
import Button from "@components/NavBarButton";
import PropertiesCards from "@components/PropertiesCard";

import "./Properties.css";
import { CircleButton } from "@components/Buttons";
import NavBar from "@components/NavBar";
import NavBarCard from "@components/NavBarCard";
interface IPropertiesUxProps {
  error?: any;
  data?: Array<IPropertie>;
  isLoading?: boolean;
  addPageClick?: () => void;
  viewDetailClick?: (id: string) => void;
}
const PropertiesCard = (item: IPropertie, viewDetailClick: (id: string) => void) => {
  return (
    <PropertiesCards key={item._id} className={`type_${item.type}`}>
      <div onClick={() => { viewDetailClick(item._id); }}>{item.titulo}
        <p>{item.descripcion}</p>
        <p>{item.area}</p>
        <p>{item.direccion}</p>
        <h2>L {item.precio}.00</h2>
      </div>
    </PropertiesCards>
  );
};
const PropertieUx = ({
  error,
  data,
  isLoading,
  addPageClick = () => { },
  viewDetailClick = (id) => { },
}: IPropertiesUxProps) => {
  return (
    <div>
      <NavBarCard>
        <h1>SEDAHE</h1>
        <Link to="/home">
          <Button> Home </Button>
        </Link>

      </NavBarCard>
      <section className="PropertiesHolder">
        {isLoading && <div>Loading...</div>}
        {error && <p>{JSON.stringify(error)}</p>}
        {data && data.map((o: IPropertie) => PropertiesCard(o, viewDetailClick))}
      </section>
      <Link to="/properties/create">
        <CircleButton className="floatLeftButton"
          onClick={() => { addPageClick() }}
        >+</CircleButton>
      </Link>
    </div>
  );
};

export default PropertieUx;
