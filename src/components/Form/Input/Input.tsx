import * as SC from './Input.style';

interface InputProps {
  id: string;
  width?: number;
  placeholder: string;
}

const Input = ({ id, width, placeholder }: InputProps) => {
  return <SC.Input id={id} placeholder={placeholder} width={width} />;
};

export default Input;
