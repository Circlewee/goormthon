import { UseFormRegisterReturn } from 'react-hook-form';

import * as SC from './Input.style';

interface InputProps {
  id: string;
  placeholder: string;
  width?: number;
  register?: UseFormRegisterReturn;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ id, placeholder, width, register, onChange }: InputProps) => {
  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <SC.Input
        id={id}
        placeholder={placeholder}
        width={width}
        onChange={onChange}
        type='text'
        {...register}
      />
    </div>
  );
};

export default Input;
