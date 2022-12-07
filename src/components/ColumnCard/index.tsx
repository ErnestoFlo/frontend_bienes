import { PropsWithChildren } from "react"
import './ColumnsCard.css'

interface CardProps {
    title? : string;
}

const ColumnCard = ({children, title = "", ..._props}: PropsWithChildren <CardProps>) =>{
    return(
        <div className="ColumnCard">
            {title && (<div className="cardTitle">{title}</div>)}
            {children}
        </div>
    )
}

export default ColumnCard;