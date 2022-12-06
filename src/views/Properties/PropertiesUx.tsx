import Page from "@components/Page";
import { IPropertie, IGetAllProperties } from "@store/Services/Properties";
import ErrorField from "@components/ErrorField";
import Card from "@components/Card";
import Paging from "@components/Paging";
import { formatCurrency } from "@helpers/NumberFormat";

import "./Properties.css";
import { CircleButton } from "@components/Buttons";
interface IPropertiesUxProps {
  error?: any;
  data?: IGetAllProperties;
  isLoading?: boolean;
  changePageLimit?: (page: number, limit: number) => void;
  addPageClick?: () => void;
  viewDetailClick?: (id: string) => void;
}
const PropertiesCard = (item: IPropertie, viewDetailClick: (id:string)=> void ) => {
  return (
    <Card key={item._id} className={`type_${item.type.toLowerCase()}`}>
      <div onClick={()=>{viewDetailClick(item._id);}}>{item.descripcion}</div>
      <h2>{item.precio}</h2>
    </Card>
  );
};
const PropertieUx = ({
  error,
  data,
  isLoading,
  changePageLimit = (p, l) => {
    console.log("PG", { p, l });
  },
  addPageClick = () => {},
  viewDetailClick = (id) => {},
}: IPropertiesUxProps) => {
  return (
    <Page pageTitle="Properties">
      <section className="PropertiesHolder">
        {isLoading && <div>Loading...</div>}
        {error && <p>{JSON.stringify(error)}</p>}
        {data && data.items.map((o: IPropertie) => PropertiesCard(o, viewDetailClick))}
      </section>
      <CircleButton className="floatLeftButton"
        onClick={() => {addPageClick()}}
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
    </Page>
  );
};

export default PropertieUx;
