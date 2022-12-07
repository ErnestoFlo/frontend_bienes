import { PropsWithChildren } from "react";
import './Background.css';

export const Background = ({
    children,
    ...props
}: PropsWithChildren<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>>) => {
return <section {...props}>{children}</section>;
};
export default Background;