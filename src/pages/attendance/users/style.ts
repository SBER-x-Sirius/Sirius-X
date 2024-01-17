import styled from 'styled-components';

export const UsersPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 35px;
`;

export const UserPageHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const GroupsBlock = styled.div`
  display: flex;
  white-space: nowrap;
  gap: 15px;
  width: 424px;
  background-color: #ffffff;
  border-radius: 35px;
  padding: 12px 17px;
`;

export const GroupsList = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0;
  margin: 0;
`;

export const ButtonsBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const ShareButton = styled.button`
  padding: 12px 40px;
  border: 0;
  border-radius: 35px;
  background-color: rgb(96, 93, 199);
  color: #ffffff;
  font-size: 16px;
  font-family: 'Jost', sans-serif;
`;

export const SettingsIcon = styled.img`
  cursor: pointer;
`;

export const TableIcon = styled.img`
  cursor: pointer;
`;
