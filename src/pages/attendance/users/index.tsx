import React from 'react';
import Sidebar from '../../../components/sidebar';
import { UsersPageWrapper, UserPageHeader, GroupsBlock, GroupsList, ShareButton, SettingsIcon, ButtonsBlock, UserPageTableWrapper, UserPageTable, TableRow, TableCell, TableImageCell, TableIcon } from './style';
import SettingsSVG from '../../../assets/svg/settings_24px.svg';
import TableSVG from '../../../assets/svg/Group 71.svg';

export const Users = () => {
  const groups = ['К0711-21/1', 'К0711-21/2', 'К0711-21/3'];

  const users = [
    { initials: 'Рындин Сергей Иванович', group: 'К0711-21/2', role: 'Студент'},
    { initials: 'Усов Даниил Андреевич', group: 'К0711-21/2', role: 'Студент'},
    { initials: 'Амантаев Артур Махмудович', group: 'К0711-21/2', role: 'Студент'},
  ]

  return (
    <UsersPageWrapper>
      <Sidebar />
      <UserPageHeader>
        <GroupsBlock>
        <GroupsList>
          Присутствующие группы: {groups.join(', ')}
        </GroupsList>
        </GroupsBlock>

        <ButtonsBlock>
          <ShareButton>Поделиться</ShareButton>
          <SettingsIcon src={SettingsSVG} alt='Кнопка настроек'/>
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
                  <TableIcon src={TableSVG} alt='Кнопка дополнительных действий'/>
                </TableImageCell>
              </TableRow>
            ))}
          </tbody>
        </UserPageTable>
      </UserPageTableWrapper>
    </UsersPageWrapper>
  );
};
