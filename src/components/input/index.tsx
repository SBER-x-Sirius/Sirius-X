import React from 'react';
import {CustomInput, ButtonClearInput, InputContainer} from './styles';

type propsInput = {
  value: string,
  setValue: (e: string) => void
}

const Input = ({value, setValue}: propsInput): JSX.Element => {

  const handleClearInput = () => {
    setValue('');
  }

  const hangleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 30) {
      setValue(e.target.value);
    }
  }

  // TODO: после настройки webpack добавить svg лупы
  return (
    <InputContainer>
      <CustomInput type='text' placeholder='Поиск...' value={value} onChange={hangleChangeInput}  />
      <ButtonClearInput onClick={handleClearInput}></ButtonClearInput> 
    </InputContainer>
  );
};

export default Input;
