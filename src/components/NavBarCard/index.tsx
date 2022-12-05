import { PropsWithChildren } from "react";
import "./NavBarCard.css"

export const NavBarCard = ({
    children,
    ...props
}: PropsWithChildren<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>>) => {
return <nav {...props}>{children}</nav>;
};
export default NavBarCard;