import { useTranslation } from 'react-i18next';
import React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { TableRow, TableCell, TableImageCell } from './styles';
import TableSVG from '../../assets/svg/Group 71.svg';

export type User = {
  id: string;
  initials: string;
  group: string;
  role: string;
};

type UserTableRowProps = {
  user: User;
  index: number;
  handleDelete: any;
};


export const UserTableRow: React.FC<UserTableRowProps> = ({ user, index, handleDelete }) => {
  const { t } = useTranslation();

  const handleDeleteUser = (userId) => {
    handleDelete(userId);
    setAnchorEl(null);
  }

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <TableRow key={index}>
      <TableCell>{user.initials}</TableCell>
      <TableCell>{user.group}</TableCell>
      <TableCell>{user.role}</TableCell>
      <TableImageCell>
        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <img src={TableSVG} alt={t('attendance:attendanceTranslation.session-page.TableIconAlt')} />
        </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={() => handleDeleteUser(user.id)}>Удалить</MenuItem>
          </Menu>
      </TableImageCell>
    </TableRow>
  );
};
