import styled from 'styled-components';

export const TableRow = styled.tr`
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 3fr;
  gap: 30px;
  align-items: center;
  padding: 8px 30px 6px 13px;
  border-bottom: 1px solid #f4f4f9;
`;

export const TableCell = styled.td`
  font-size: 16px;
`;

export const TableImageCell = styled.td`
  margin-left: auto;
`;
