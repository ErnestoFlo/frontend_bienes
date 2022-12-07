import { PropsWithChildren } from "react";
import './Input.css'

export const InputTXT = ({
  children,
  ...props
}: PropsWithChildren<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>>) => {
  return <input {...props}>{children}</input>;
};

export default InputTXT;