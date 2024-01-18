import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Sidebar from '../../../components/sidebar';
import {
  UsersPageWrapper,
  UserPageHeader,
  GroupsBlock,
  GroupsList,
  SettingsIcon,
  ButtonsBlock
} from './style';
import SettingsSVG from '../../../assets/svg/settings_24px.svg';
import UserTable from '../../../components/user-table';
import { useDeleteUserMutation, useGetAllUsersQuery } from '../../../__data__/services/api/attendance/user';
import { useGetAllGroupsQuery } from '../../../__data__/services/api/attendance/group';

type User = {
  id: string;
  initials: string;
  group: string;
  role: string;
};

export const Users: React.FC = (): JSX.Element => {
  const { t } = useTranslation();

  const [ deleteUser ] = useDeleteUserMutation();
  const { data: groups_data } = useGetAllGroupsQuery();
  const { data: usersData } = useGetAllUsersQuery();
  const [users, setUsers] = useState<User[]>(null);

  const handleDeleteUser = async (userId: string) => {
    try {
      await deleteUser(userId);
      setUsers((prevUsers) => prevUsers.filter((u) => u.id !== userId));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (usersData) {
      setUsers(usersData as any);
    }
  }, [usersData]);

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
      {users && <UserTable users={users} handleDelete={handleDeleteUser} />}
    </UsersPageWrapper>
  );
};
