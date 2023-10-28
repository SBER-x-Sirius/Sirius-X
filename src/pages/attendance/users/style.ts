import styled from 'styled-components';

export const UsersPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 35px;
`

export const UserPageHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`

export const GroupsBlock = styled.div`
  display: flex;
  white-space: nowrap;
  gap: 15px;
  width: 424px;
  background-color: #FFFFFF;
  border-radius: 35px;
  padding: 12px 17px;
`

export const GroupsList = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0;
  margin: 0;
`

export const ButtonsBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

export const ShareButton = styled.button`
  padding: 12px 40px;
  border: 0;
  border-radius: 35px;
  background-color: rgb(96, 93, 199);
  color: #FFFFFF;
  font-size: 16px;
`

export const SettingsIcon = styled.img`
  cursor: pointer;
`;

export const UserPageTableWrapper = styled.div`
  margin-top: 20px;
  height: 650px;
  overflow: auto;
  padding: 26px 0 26px 22px;
  border-radius: 15px;
  background-color: #FFFFFF;
`

export const UserPageTable = styled.table`
  width: 100%;
  height: 100%;
`

export const TableRow = styled.tr`
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 3fr;
  gap: 30px;
  align-items: center;
  padding: 8px 30px 6px 13px;
  border-bottom: 1px solid #F4F4F9;
`

export const TableCell = styled.td`
  font-size: 16px;
`

export const TableImageCell = styled.td`
  margin-left: auto;
`

export const TableIcon = styled.img`
  cursor: pointer;
`
