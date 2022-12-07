import { PropsWithChildren } from "react"
import './ButtonOrientation.css'

interface CardProps {
    title? : string;
}

const ButtonOrientation = ({children, title = "", ..._props}: PropsWithChildren <CardProps>) =>{
    return(
        <div className="buttonOr">
            {title && (<div className="buttonOr">{title}</div>)}
            {children}
        </div>
    )
}

export default ButtonOrientation;