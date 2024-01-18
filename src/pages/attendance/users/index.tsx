import React from 'react';
import { useTranslation } from 'react-i18next';
import { useGetAllGroupsQuery } from '../../../__data__/services/api/attendance/group';
import { useGetAllUsersQuery } from '../../../__data__/services/api/attendance/user';
import Sidebar from '../../../components/sidebar';
import UserTable from '../../../components/user-table';
import { GroupsBlock, GroupsList, UserPageHeader, UsersPageWrapper } from './style';

type User = {
  initials: string;
  group: string;
  role: string;
};

export const Users: React.FC = (): JSX.Element => {
  const { t } = useTranslation();

  const { data: groups_data } = useGetAllGroupsQuery();
  const { data: users } = useGetAllUsersQuery();

  return (
    <UsersPageWrapper>
      <Sidebar />
      <UserPageHeader>
        <GroupsBlock>
          <GroupsList>
            {t('attendance:attendanceTranslation.meeting-page.groupList')}:{' '}
            {groups_data && groups_data.map((g) => g.name).join(', ')}
          </GroupsList>
        </GroupsBlock>
      </UserPageHeader>
      {users && <UserTable users={users} />}
    </UsersPageWrapper>
  );
};
