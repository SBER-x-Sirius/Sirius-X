import React, { useEffect } from 'react';
import { InputContainer, CustomTextField } from './styles';
import { useTranslation } from 'react-i18next';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useGetTeacherOrGroupQuery } from '../../__data__/services/api/schedule/user.api';
import { Group, User } from '../../__data__/services/api/schedule/types';

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

  const defaultProps = {
    options: data || [],
    getOptionLabel: (option: User | Group) => {
      if (activeTab === tabs.teacher) {
        const teacher = option as User;
        return `${teacher.name} ${teacher.surName} ${teacher.lastName}`;
      } else {
        const group = option as Group;
        return `${group.name}`;
      }
    }
  };

  useEffect(() => {}, [activeTab]);

  return (
    <InputContainer>
      <Autocomplete
        disabled={isLoading || !!error}
        disablePortal
        noOptionsText={t('schedule:scheduleTranslation.filterBlock.search.option')}
        sx={{ width: '100%' }}
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
