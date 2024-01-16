import React from 'react';
import { useTranslation } from 'react-i18next';

import Sidebar from '../../../components/sidebar';
import {
  UsersPageWrapper,
  UserPageHeader,
  GroupsBlock,
  GroupsList,
  ShareButton,
  SettingsIcon,
  ButtonsBlock
} from './style';
import SettingsSVG from '../../../assets/svg/settings_24px.svg';
import UserTable from '../../../components/user-table';
import { useGetAllUsersQuery } from '../../../__data__/services/api/attendance/user';
import { useGetAllGroupsQuery } from '../../../__data__/services/api/attendance/group';

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
            {t('attendance:attendanceTranslation.session-page.groupList')}: {groups_data && groups_data.map((g) => g.name ).join(', ')}
          </GroupsList>
        </GroupsBlock>
        <ButtonsBlock>
          <ShareButton>{t('attendance:attendanceTranslation.session-page.shareButton')}</ShareButton>
          <SettingsIcon src={SettingsSVG} alt={t('attendance:attendanceTranslation.session-page.shareButtonAlt')} />
        </ButtonsBlock>
      </UserPageHeader>
      {users && <UserTable users={users}/>}
    </UsersPageWrapper>
  );
};
