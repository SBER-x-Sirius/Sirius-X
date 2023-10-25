import React from 'react';
import Sidebar from '../../../components/sidebar';
import { UsersPageWrapper, UserPageHeader, GroupsBlock, GroupsList, GroupsListItem, ShareButton, SettingsIcon, ButtonsBlock, UserPageTableWrapper, UserPageTable, TableRow, TableCell, TableImageCell, TableIcon } from './style';
import SettingsSVG from '../../../assets/svg/settings_24px.svg';
import TableSVG from '../../../assets/svg/Group 71.svg';

export const Users = () => {
  return (
    <UsersPageWrapper>
      <Sidebar />
      <UserPageHeader>
        <GroupsBlock>
          <span>Присутствующие группы:</span>
          <GroupsList>
            <GroupsListItem><span>К0711-21/1,</span></GroupsListItem>
            <GroupsListItem><span>К0711-21/1,</span></GroupsListItem>
            <GroupsListItem><span>К0711-21/1,</span></GroupsListItem>
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
            <TableRow>
              <TableCell>Фамилия Имя Отчество</TableCell>
              <TableCell>К0711-21/1</TableCell>
              <TableCell>Студент</TableCell>
              <TableImageCell>
                <TableIcon src={TableSVG} alt='Кнопка дополнительных действий'/>
              </TableImageCell>
            </TableRow>
          </tbody>
        </UserPageTable>
      </UserPageTableWrapper>
    </UsersPageWrapper>
  );
};
