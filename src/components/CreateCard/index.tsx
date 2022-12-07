import { PropsWithChildren } from "react"
import './CreateCard.css'

interface CardProps {
    title? : string;
}

const CreateCard = ({children, title = "", ..._props}: PropsWithChildren <CardProps>) =>{
    return(
        <div className="CreateCard">
            {title && (<div className="cardTitle">{title}</div>)}
            {children}
        </div>
    )
}

export default CreateCard;