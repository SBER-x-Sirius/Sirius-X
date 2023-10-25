import { t } from 'i18next';
import React, { useState } from 'react';
import BaseForm from '../../../components/form';
import { SessionButton, SessionFormContent } from '../accession/style';
import Sidebar from '../sidebar';
import menu from '../sidebar/data';
import { AttendanceWrapper } from '../style';
import { AttendanceSelector } from '../../../components/attendance-selector';

export type AttendanceUser = {
  id: string;
  first_name: string;
  last_name: string;
  middle_name: string;
  email: string;
  role: string;
};

export type AttendanceGroup = {
  id: string;
  title: string;
};

export const NewMeeting: React.FC = (): JSX.Element => {
  const [selectUsers, setSelectUsers] = useState<(prevState: AttendanceUser) => undefined>();
  const [selectGroups, setSelectGroups] = useState<(prevState: AttendanceGroup) => undefined>();

  const users: AttendanceUser[] = [
    {
      id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
      first_name: 'Иван',
      last_name: 'Иванович',
      middle_name: 'Иванов',
      email: 'myemail',
      role: 'Студент'
    },
    {
      id: '3fa85f64-5717-4562-b3fc-2c963f66afa5',
      first_name: 'Петр',
      last_name: 'Петрович',
      middle_name: 'Петров',
      email: 'myemail',
      role: 'Студент'
    }
  ];

  const groups: AttendanceGroup[] = [
    {
      id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
      title: 'K0711-21/1'
    },
    {
      id: '3fa85f64-5717-4562-b3fc-2c963f66afa5',
      title: 'K0711-21/2'
    }
  ];

  const handleUserSelection = (selectedUsers: (prevState: AttendanceUser) => undefined): void => {
    setSelectUsers(selectedUsers);
  };

  const handleGroupSelection = (selectedGroups: (prevState: AttendanceGroup) => undefined): void => {
    setSelectGroups(selectedGroups);
  };

  return (
    <AttendanceWrapper>
      <Sidebar menu={menu} />
      <BaseForm>
        <SessionFormContent>
          <AttendanceSelector selectItem={groups} onSelectionChange={handleGroupSelection} />
          <AttendanceSelector selectItem={users} onSelectionChange={handleUserSelection} />
          <SessionButton>{t('attendance:attendanceTranslation.new-meeting.buttonTitle')}</SessionButton>
        </SessionFormContent>
      </BaseForm>
    </AttendanceWrapper>
  );
};
