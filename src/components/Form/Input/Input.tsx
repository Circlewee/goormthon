import { UseFormRegisterReturn } from 'react-hook-form';

import * as SC from './Input.style';

interface InputProps {
  id: string;
  placeholder: string;
  width?: number;
  register?: UseFormRegisterReturn;
}

const Input = ({ id, placeholder, width, register }: InputProps) => {
  return <SC.Input id={id} placeholder={placeholder} width={width} {...register} />;
};

export default Input;
