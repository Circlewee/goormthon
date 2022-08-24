import * as SC from './Input.style';

interface InputProps {
  id: string;
  placeholder: string;
}

const Input = ({ id, placeholder }: InputProps) => {
  return <SC.Input id={id} placeholder={placeholder} />;
};

export default Input;
