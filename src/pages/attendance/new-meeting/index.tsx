import { t } from 'i18next';
import React, { useState } from 'react';
import BaseForm from '../../../components/form';
import { MeetingTitle, SessionButton, SessionFormContent } from '../accession/style';
import { AttendanceWrapper } from '../style';
import { AttendanceSelector } from '../../../components/attendance-selector';
import Sidebar from '../../../components/sidebar';
import { CreateMeetingData } from '../../../__data__/services/api/attendance/meeting/types';
import { useCreateMeetingMutation } from '../../../__data__/services/api/attendance/meeting';

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
  const [selectedUsers, setSelectedUsers] = useState<(prevState: AttendanceUser) => undefined>();
  const [selectedGroups, setSelectedGroups] = useState<(prevState: AttendanceGroup) => undefined>();
  const [selectedTitle, setSelectedTitle] = useState("");
  const [attendanceCreateMeeting, { error: attendanceCreateMeetingSuccess }] = useCreateMeetingMutation();

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
    setSelectedUsers(selectedUsers);
  };

  const handleGroupSelection = (selectedGroups: (prevState: AttendanceGroup) => undefined): void => {
    setSelectedGroups(selectedGroups);
  };

  const handleTitleChange = (event) => {
    const newValue = event.target.value;
    setSelectedTitle(newValue);
  };

  const handleSubmit = async () => {
    event.preventDefault()

    await attendanceCreateMeeting({ groupIds: selectedGroups, teacherIds: selectedUsers, title: selectedTitle } as CreateMeetingData);
    if (!attendanceCreateMeetingSuccess) {
      // navigate(getNavigationsValue('sirius-x.attendance'), { replace: true });
    } else {
      // navigate(getNavigationsValue('sirius-x.attendance'), { replace: true });
    }
  }

  return (
    <AttendanceWrapper>
      <Sidebar />
      <BaseForm>
        <SessionFormContent>
          <MeetingTitle onChange={handleTitleChange} placeholder={t('attendance:attendanceTranslation.new-meeting.titlePlaceholder')}/>
          <AttendanceSelector selectItem={groups} onSelectionChange={handleGroupSelection} />
          <AttendanceSelector selectItem={users} onSelectionChange={handleUserSelection} />
          <SessionButton onClick={handleSubmit}>{t('attendance:attendanceTranslation.new-meeting.buttonTitle')}</SessionButton>
        </SessionFormContent>
      </BaseForm>
    </AttendanceWrapper>
  );
};
