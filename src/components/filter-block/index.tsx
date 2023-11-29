import React, { useState } from 'react';
import { CheckboxContainer, CheckboxInput, FilterContainer, FilterSwitchContainer, FilterSwitchItems } from './styles';
import { useTranslation } from 'react-i18next';
import Input from '../input';
import { useDispatch, useSelector } from 'react-redux';
import { setClassTypeFilter } from '../../__data__/slices/schedule/filters';

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

  const tabs = {
    group: 'schedule:scheduleTranslation.filterBlock.typesTab.group',
    teacher: 'schedule:scheduleTranslation.filterBlock.typesTab.teacher'
  };

  const [activeTab, setActiveTab] = useState<string>(tabs.group);

  const classTypeFilter = useSelector((state: any) => state.filters.classTypeFilter);
  const dispatch = useDispatch();

  const handleActive = (buttonName: string) => {
    setActiveTab(buttonName);
  };

  const handleFilterChange = (checkboxId: string) => (event: React.MouseEvent<HTMLDivElement>) => {
    if (classTypeFilter.includes(checkboxId)) {
      const updatedFilters = classTypeFilter.filter((filter) => filter !== checkboxId);
      dispatch(setClassTypeFilter(updatedFilters));
    } else {
      const updatedFilters = [...classTypeFilter, checkboxId];
      dispatch(setClassTypeFilter(updatedFilters));
    }
  };

  const checkboxElements = checkboxes.map((checkbox) => {
    const translationKey = `schedule:scheduleTranslation.filterBlock.typesClass.${checkbox.id}`;

    return (
      <CheckboxInput key={checkbox.id} color={checkbox.color} onClick={handleFilterChange(checkbox.id)}>
        <input type='checkbox' id={checkbox.id} name={checkbox.id} />
        <label htmlFor={checkbox.id}>{t(translationKey as any)}</label>
      </CheckboxInput>
    );
  });

  return (
    <FilterContainer>
      <FilterSwitchContainer>
        <FilterSwitchItems
          onClick={() => {
            handleActive(tabs.group);
          }}
          active={activeTab === tabs.group}
        >
          {t('schedule:scheduleTranslation.filterBlock.typesTab.group')}
        </FilterSwitchItems>
        <FilterSwitchItems
          onClick={() => {
            handleActive(tabs.teacher);
          }}
          active={activeTab === tabs.teacher}
        >
          {t('schedule:scheduleTranslation.filterBlock.typesTab.teacher')}
        </FilterSwitchItems>
      </FilterSwitchContainer>
      <CheckboxContainer>
        <p>{t('schedule:scheduleTranslation.filterBlock.title')}:</p>
        {checkboxElements}
      </CheckboxContainer>
      <Input activeTab={activeTab} tabs={tabs} />
    </FilterContainer>
  );
};
