import React, { useEffect, useState } from 'react';
import { InputContainer, CustomTextField } from './styles';
import { useTranslation } from 'react-i18next';
import Autocomplete from '@mui/material/Autocomplete';
import { useGetTeacherOrGroupQuery } from '../../__data__/services/api/schedule/user.api';
import { Group, User } from '../../__data__/services/api/schedule/types';
import { useDispatch } from 'react-redux';
import { setInputFilter, setClearInput } from '../../__data__/slices/schedule/filters';

type propsInput = {
  activeTab: string;
  tabs: {
    teacher: string;
    group: string;
  };
};

const Input = ({ activeTab, tabs }: propsInput): JSX.Element => {
  const { t } = useTranslation();
  const { data, isLoading, error } = useGetTeacherOrGroupQuery(activeTab === tabs.teacher ? 'преподаватель' : 'группа');
  const [inputValue, setInputValue] = useState('');
  const [autocompleteKey, setAutocompleteKey] = useState(0);
  const dispatch = useDispatch();

  const defaultProps = {
    options: data || [],
    getOptionLabel: (option: User | Group) => {
      if (activeTab === tabs.teacher) {
        const teacher = option as User;
        return `${teacher.lastName} ${teacher.name} ${teacher.surName}`;
      } else {
        const group = option as Group;
        return `${group.name}`;
      }
    }
  };

  useEffect(() => {
    dispatch(setClearInput());
    setAutocompleteKey((prevKey) => prevKey + 1);
  }, [activeTab]);

  return (
    <InputContainer>
      <Autocomplete
        key={autocompleteKey}
        disabled={isLoading || !!error}
        disablePortal
        ListboxProps={{ style: { maxHeight: 150 } }}
        noOptionsText={t('schedule:scheduleTranslation.filterBlock.search.option')}
        sx={{ width: '100%' }}
        onChange={(event, newValue) => {
          if (!newValue) {
            setInputValue('');
            dispatch(setClearInput());
            setAutocompleteKey((prevKey) => prevKey + 1);
            return;
          }
          if (activeTab === tabs.teacher) {
            const teacher = newValue as User;
            dispatch(
              setInputFilter({ inputValue: `${teacher.lastName} ${teacher.name} ${teacher.surName}`, isTeacher: true })
            );
          } else {
            const group = newValue as Group;
            dispatch(setInputFilter({ inputValue: `${group.name}`, isTeacher: false }));
          }
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        {...defaultProps}
        renderInput={(params) => (
          <CustomTextField
            sx={{ border: 'none', '& fieldset': { border: 'none' } }}
            placeholder={
              activeTab === tabs.group
                ? t('schedule:scheduleTranslation.filterBlock.search.group')
                : t('schedule:scheduleTranslation.filterBlock.search.teacher')
            }
            {...params}
          />
        )}
      />
    </InputContainer>
  );
};
export default Input;
