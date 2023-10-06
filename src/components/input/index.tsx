import React from 'react';
import { CustomInput, ButtonClearInput, InputContainer } from './styles';
import { useTranslation } from 'react-i18next';

type propsInput = {
  value: string;
  setValue: (e: string) => void;
};

const Input = ({ value, setValue }: propsInput): JSX.Element => {
  const { t } = useTranslation();

  const handleClearInput = () => {
    setValue('');
  };

  const hangleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 30) {
      setValue(e.target.value);
    }
  };

  return (
    <InputContainer>
      <CustomInput
        type="text"
        placeholder={t('schedule:scheduleTranslation.filterBlock.search')}
        value={value}
        onChange={hangleChangeInput}
      />
      <ButtonClearInput onClick={handleClearInput}></ButtonClearInput>
    </InputContainer>
  );
};

export default Input;
