import React, { useState } from 'react';
import { CheckboxContainer, CheckboxInput, FilterContainer, FilterSwitchContainer, FilterSwitchItems } from './styles';
import { useTranslation } from 'react-i18next';
import Input from '../input'

export const FilterBlock = (): JSX.Element => {
  const { t } = useTranslation();
  const checkboxes = [
    { id: 'lectures', label: 'Лекции', color: '#1CB87F' },
    { id: 'seminars', label: 'Семинары', color: '#EAB308' },
    { id: 'practicals', label: 'Практ.занятия', color: '#38BDF8' },
    { id: 'labs', label: 'Лаб.занятия', color: '#818CF8' },
    { id: 'exams', label: 'Экзамены(зачеты)', color: '#FF4848' },
    { id: 'other', label: 'Прочее', color: '#312E81' }
  ];

  const [activeTab, setActiveTab] = useState<string>('Группа')
  const [valueInput, setValueInput] = useState<string>('');

  const handleActive = (buttonName: string) => {
    setActiveTab(buttonName);
  };

  const checkboxElements = checkboxes.map((checkbox) => {
    const translationKey = `schedule:scheduleTranslation.filterBlock.typesClass.${checkbox.id}`;

    return (
      <CheckboxInput key={checkbox.id} color={checkbox.color}>
        <input type="checkbox" id={checkbox.id} name={checkbox.id} />
        <label htmlFor={checkbox.id}>
          {t(translationKey as any)}
        </label>
      </CheckboxInput>
    );
  });

  return (
    <FilterContainer>
      <FilterSwitchContainer>
        <FilterSwitchItems
          onClick={() => {
            handleActive('Группа');
          }}
          active={activeTab === 'Группа'}
        >
          {t('schedule:scheduleTranslation.filterBlock.typesTab.group')}
        </FilterSwitchItems>
        <FilterSwitchItems
          onClick={() => {
            handleActive('Преподаватель');
          }}
          active={activeTab === 'Преподаватель'}
        >
          {t('schedule:scheduleTranslation.filterBlock.typesTab.teacher')}
        </FilterSwitchItems>
      </FilterSwitchContainer>
      <CheckboxContainer>
        <p>{t('schedule:scheduleTranslation.filterBlock.title')}:</p>
        {checkboxElements}
      </CheckboxContainer>
      <Input value={valueInput} setValue={setValueInput} />
    </FilterContainer>
  );
};
