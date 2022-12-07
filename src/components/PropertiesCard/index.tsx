import { PropsWithChildren } from "react";
import './PropertiesCard.css';

interface CardProps {
  title? : string;
  className?: string;
}

const PropertiesCards = ({children, title, className, ..._props}: PropsWithChildren<CardProps>)=>{
  return (
    <div className={["cardProp", className].join(" ")}>
      {title && (<div className="cardTitle">{title}</div>)}
      {children}
    </div>
  )
}
export default PropertiesCards;
