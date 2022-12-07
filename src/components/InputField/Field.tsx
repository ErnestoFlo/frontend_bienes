import { InputHTMLAttributes } from 'react';
import './Input.css';
export interface IFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  labelText?:string;
  name:string;
  onChange?: (e:React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?:string;
}
const Field  = ({
  name = "",
  labelText = "",
  type = "text",
  value = "",
  placeholder="",
  onChange = (e:React.ChangeEvent<HTMLInputElement>) => { },
  ...rest
}: IFieldProps) => {
  return (
    <fieldset className="input">
      <input placeholder={placeholder} type={type} name={name} id={name} value={value} onChange={onChange} {...rest} />
    </fieldset>
  );
}

export default Field;