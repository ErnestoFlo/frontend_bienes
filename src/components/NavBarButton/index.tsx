import { PropsWithChildren } from "react";
import './Button.css'

export const Button = ({
  children,
  className = "",
  ...props
}: PropsWithChildren<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>>) => {
  const basicbutton = [className, "basicbutton"].join(" ");
  return (
    <button {...props} className={basicbutton}>
      {children}
    </button>
  );
};

export default Button;