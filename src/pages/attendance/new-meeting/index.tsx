import { getNavigationsValue } from '@ijl/cli';
import { t } from 'i18next';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateMeetingMutation } from '../../../__data__/services/api/attendance/meeting';
import { useGetGroupsQuery } from '../../../__data__/services/api/attendance/group';
import { AttendanceSelector } from '../../../components/attendance-selector';
import BaseForm from '../../../components/form';
import Sidebar from '../../../components/sidebar';
import { MeetingTitle, SessionButton, SessionFormContent } from '../accession/style';
import { AttendanceWrapper } from '../style';
import { useGetTeachersQuery } from '../../../__data__/services/api/attendance/teacher';

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
  const navigate = useNavigate();

  const { data: groups } = useGetGroupsQuery();
  const { data: teachers } = useGetTeachersQuery();
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [selectedGroups, setSelectedGroups] = useState([]);
  const [selectedTitle, setSelectedTitle] = useState("");
  const [attendanceCreateMeeting, { data: attendanceCreateMeetingData, error: attendanceCreateMeetingSuccess }] = useCreateMeetingMutation();

  const handleUserSelection = (selectedUsers): void => {
    setSelectedUsers(selectedUsers);
  };

  const handleGroupSelection = (selectedGroups): void => {
    setSelectedGroups(selectedGroups);
  };

  const handleTitleChange = (event) => {
    const newValue = event.target.value;
    setSelectedTitle(newValue);
  };

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (selectedGroups && selectedUsers && selectedTitle) {
      await attendanceCreateMeeting({ groupIds: selectedGroups ? selectedGroups : [], teacherIds: selectedUsers ? selectedUsers : [''], title: selectedTitle });
      if (!attendanceCreateMeetingSuccess) {
        navigate(getNavigationsValue('sirius-x.attendance'), { replace: true });
      } else {
        const meetingId = attendanceCreateMeetingData.meetingId;
        const route = `/sirius-x/attendance/meeting/${meetingId}`;
        navigate(route, { replace: true });
      }
    }
  }

  return (
    <AttendanceWrapper>
      <Sidebar />
      <BaseForm>
        <SessionFormContent>
          <MeetingTitle onChange={handleTitleChange} placeholder={t('attendance:attendanceTranslation.new-meeting.titlePlaceholder')} />
          <AttendanceSelector selectItem={groups} onSelectionChange={handleGroupSelection} />
          <AttendanceSelector selectItem={teachers} onSelectionChange={handleUserSelection} />
          <SessionButton onClick={(e) => handleSubmit(e)}>{t('attendance:attendanceTranslation.new-meeting.buttonTitle')}</SessionButton>
        </SessionFormContent>
      </BaseForm>
    </AttendanceWrapper>
  );
};
