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
  ButtonsBlock,
  UserPageTableWrapper,
  UserPageTable,
  TableRow,
  TableCell,
  TableImageCell,
  TableIcon
} from './style';
import SettingsSVG from '../../../assets/svg/settings_24px.svg';
import TableSVG from '../../../assets/svg/Group 71.svg';

type User = {
  initials: string;
  group: string;
  role: string;
};

export const Users: React.FC = (): JSX.Element => {
  const { t } = useTranslation();

  const groups: string[] = ['К0711-21/1', 'К0711-21/2', 'К0711-21/3'];

  const users: User[] = [
    { initials: 'Рындин Сергей Иванович', group: 'К0711-21/2', role: 'Студент' },
    { initials: 'Усов Даниил Андреевич', group: 'К0711-21/2', role: 'Студент' },
    { initials: 'Амантаев Артур Махмудович', group: 'К0711-21/2', role: 'Студент' }
  ];

  return (
    <UsersPageWrapper>
      <Sidebar />
      <UserPageHeader>
        <GroupsBlock>
          <GroupsList>
            {t('attendance:attendanceTranslation.meeting-page.groupList')}: {groups.join(', ')}
          </GroupsList>
        </GroupsBlock>

        <ButtonsBlock>
          <ShareButton>{t('attendance:attendanceTranslation.meeting-page.shareButton')}</ShareButton>
          <SettingsIcon src={SettingsSVG} alt={t('attendance:attendanceTranslation.meeting-page.shareButtonAlt')} />
        </ButtonsBlock>
      </UserPageHeader>
      <UserPageTableWrapper>
        <UserPageTable>
          <tbody>
            {users.map((user, index) => (
              <TableRow key={index}>
                <TableCell>{user.initials}</TableCell>
                <TableCell>{user.group}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableImageCell>
                  <TableIcon src={TableSVG} alt={t('attendance:attendanceTranslation.meeting-page.TableIconAlt')} />
                </TableImageCell>
              </TableRow>
            ))}
          </tbody>
        </UserPageTable>
      </UserPageTableWrapper>
    </UsersPageWrapper>
  );
};
