import { t } from 'i18next';
import React from 'react';
import { AttendanceGroup } from '../../../@types/attendance/group';
import { AttendanceUser } from '../../../@types/attendance/user';
import { AttendanceSelector } from '../../../components/attendance-selector';
import BaseForm from '../../../components/form';
import Sidebar from '../../../components/sidebar';
import { SessionButton, SessionFormContent } from '../accession/style';
import { AttendanceWrapper } from '../style';

export const NewMeeting: React.FC = (): JSX.Element => {
  const users: AttendanceUser[] = [
    {
      userId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
      first_name: 'Иван',
      last_name: 'Иванович',
      middle_name: 'Иванов',
      email: 'myemail',
      role: 'Студент'
    },
    {
      userId: '3fa85f64-5717-4562-b3fc-2c963f66afa5',
      first_name: 'Петр',
      last_name: 'Петрович',
      middle_name: 'Петров',
      email: 'myemail',
      role: 'Студент'
    },
    {
      userId: '3fa85f64-5717-4562-b3fc-2c963f6adss6afa6',
      first_name: 'Иван1',
      last_name: 'Иванович1',
      middle_name: 'Иванов1',
      email: 'myemail',
      role: 'Студент'
    },
    {
      userId: '3fa85f64-5717-4562-b3fc-2c963f66adsadaafa5',
      first_name: 'Петр1',
      last_name: 'Петрович1',
      middle_name: 'Петров1',
      email: 'myemail',
      role: 'Студент'
    },
    {
      userId: '3fa85f64-5717-4562-b3fc-2c963f66afadaa6',
      first_name: 'Иван2',
      last_name: 'Иванович2',
      middle_name: 'Иванов2',
      email: 'myemail',
      role: 'Студент'
    },
    {
      userId: '3fa85f64-5717-4562-b3fc-2c963f66asdadafa5',
      first_name: 'Петр2',
      last_name: 'Петрович2',
      middle_name: 'Петров2',
      email: 'myemail',
      role: 'Студент'
    }
  ];

  const groups: AttendanceGroup[] = [
    {
      groupId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
      title: 'K0711-21/1'
    },
    {
      groupId: '3fa85f64-5717-4562-b3fc-2c963f66afa5',
      title: 'K0711-21/2'
    }
  ];

  return (
    <AttendanceWrapper>
      <Sidebar />
      <BaseForm>
        <SessionFormContent>
          <AttendanceSelector selectItems={groups} />
          <AttendanceSelector selectItems={users} />
          <SessionButton>{t('attendance:attendanceTranslation.new-meeting.buttonTitle')}</SessionButton>
        </SessionFormContent>
      </BaseForm>
    </AttendanceWrapper>
  );
};
