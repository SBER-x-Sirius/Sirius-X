import React from 'react';
import { User, UserTableRow } from '../user-table-row';
import { UserPageTable, UserPageTableWrapper } from './styles';

type UsersListProps = {
  users: User[];
};

const UsersTable: React.FC<UsersListProps> = ({ users }) => {
  return (
    <UserPageTableWrapper>
      <UserPageTable>
        <tbody>{users?.map((user, index) => <UserTableRow key={index} user={user} index={index} />)}</tbody>
      </UserPageTable>
    </UserPageTableWrapper>
  );
};

export default UsersTable;
