import * as SC from './Input.style';

interface InputProps {
  id: string;
  name: string;
  placeholder: string;
  width?: number;
}

const Input = ({ id, name, placeholder, width }: InputProps) => {
  return <SC.Input id={id} name={name} placeholder={placeholder} width={width} />;
};

export default Input;
