import { PropsWithChildren } from "react"
import './InputCard.css'

interface CardProps {
    title? : string;
}

const InputCard = ({children, title = "", ..._props}: PropsWithChildren <CardProps>) =>{
    return(
        <div className="InputCard">
            {title && (<div className="cardTitle">{title}</div>)}
            {children}
        </div>
    )
}

export default InputCard;