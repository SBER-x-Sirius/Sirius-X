import { useTranslation } from 'react-i18next';
import { TableRow, TableCell, TableImageCell } from './styles';
import React from 'react';
import TableSVG from '../../assets/svg/Group 71.svg';

export type User = {
  initials: string;
  group: string;
  role: string;
};

type UserTableRowProps = {
  user: User;
  index: number;
}

export const UserTableRow: React.FC<UserTableRowProps> = ({ user, index }) => {
  const { t } = useTranslation();

  return (
    <TableRow key={index}>
      <TableCell>{user.initials}</TableCell>
      <TableCell>{user.group}</TableCell>
      <TableCell>{user.role}</TableCell>
      <TableImageCell>
        <img src={TableSVG} alt={t('attendance:attendanceTranslation.session-page.TableIconAlt')} />
      </TableImageCell>
    </TableRow>
  );
};
