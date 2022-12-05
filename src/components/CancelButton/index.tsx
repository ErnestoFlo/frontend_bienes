import { PropsWithChildren } from "react";
import './Cancel.css'

export const CancelButton = ({
  children,
  className = "",
  ...props
}: PropsWithChildren<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>>) => {
  const cancel = [className, "cancel"].join(" ");
  return (
    <button {...props} className={cancel}>
      {children}
    </button>
  );
};

export default CancelButton;