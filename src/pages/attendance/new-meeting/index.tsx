import { t } from 'i18next';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AttendanceState } from '../../../@types/attendance/slice';
import { useGetAllGroupsQuery } from '../../../__data__/services/api/attendance/group';
import { useCreateMeetingMutation } from '../../../__data__/services/api/attendance/meeting';
import { useGetAllTeachersQuery } from '../../../__data__/services/api/attendance/user';
import { AttendanceSelector } from '../../../components/attendance-selector';
import BaseForm from '../../../components/form';
import Sidebar from '../../../components/sidebar';
import { SessionButton, SessionFormContent } from '../accession/style';
import { AttendanceWrapper } from '../style';
import { getNavigationsValue } from '@ijl/cli';

export const NewMeeting: React.FC = (): JSX.Element => {
  const { data: groups } = useGetAllGroupsQuery();
  const { data: teachers } = useGetAllTeachersQuery();
  const [createMeeting, { data }] = useCreateMeetingMutation();
  const navigate = useNavigate();

  const targetGroups = useSelector((state: AttendanceState) => state.newMeetingSlice.groups);
  const targetTeachers = useSelector((state: AttendanceState) => state.newMeetingSlice.teachers);

  useEffect(() => {
    if (data) {
      navigate(getNavigationsValue('sirius-x.attendance.meeting') + '/' + data.meetingId.toString());
    }
  }, [data]);

  const handlerClick = async () => {
    if (targetGroups.length > 0) {
      await createMeeting({ groups: targetGroups, teachers: targetTeachers });
    }
  };

  return (
    <AttendanceWrapper>
      <Sidebar />
      <BaseForm>
        <SessionFormContent>
          {groups && <AttendanceSelector selectItems={groups} />}
          {teachers && <AttendanceSelector selectItems={teachers} />}
          <SessionButton type='button' onClick={handlerClick}>
            {t('attendance:attendanceTranslation.new-meeting.buttonTitle')}
          </SessionButton>
        </SessionFormContent>
      </BaseForm>
    </AttendanceWrapper>
  );
};
