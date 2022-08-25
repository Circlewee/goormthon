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
  // const [isButtonShow, setIsButtonShow] = useState(false);
  // const [inputValue, setInputValue] = useState('');

  // const handleClick = () => {
  // setInputValue('');
  // };

  // const handleFocus = () => {
  //   setIsButtonShow(true);
  // };

  // const handleBlur = () => {
  //   setIsButtonShow(false);
  // };

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <SC.Input
        id={id}
        placeholder={placeholder}
        width={width}
        onChange={onChange}
        type='text'
        {...register}
        // onFocus={handleFocus}
        // onBlur={handleBlur}
      />
      {/* {isButtonShow && (
        <SC.DeleteButton type='button' onClick={handleClick}>
          <img src='./assets/imgs/x_icon.png' />
        </SC.DeleteButton>
      )} */}
    </div>
  );
};

export default Input;
