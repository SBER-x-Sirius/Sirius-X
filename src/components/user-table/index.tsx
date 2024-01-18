import React from 'react';
import { User, UserTableRow } from '../user-table-row';
import { UserPageTable, UserPageTableWrapper } from './styles';

type UsersListProps = {
  users: User[];
  handleDelete: any;
};

const UsersTable: React.FC<UsersListProps> = ({ users, handleDelete }) => {
  return (
    <UserPageTableWrapper>
      <UserPageTable>
        <tbody>{users?.map((user, index) => <UserTableRow key={index} user={user} index={index} handleDelete={handleDelete} />)}</tbody>
      </UserPageTable>
    </UserPageTableWrapper>
  );
};

export default UsersTable;
