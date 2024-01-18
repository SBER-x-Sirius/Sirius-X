import styled from 'styled-components';
import { AgGridReact } from 'ag-grid-react';

export const StyledGrid = styled(AgGridReact)`
  .ag-root-wrapper {
    border: none;
  }
  .ag-header {
    background-color: white;
  }
  .ag-header-cell-text {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 140%;
    letter-spacing: -0.01em;
    color: #5d6568;
  }
  .ag-cell {
    font-size: 12px;
    color: #333;
  }
`;

export const TableContainer = styled.div`
  min-width: 443px;
    width: 100%;
  height: 581px;
  margin: auto;
  padding: 24px 40px 0 40px;
  background: #ffffff;
  box-shadow:
    0px 0px 2px rgba(145, 158, 171, 0.2),
    0px 12px 24px -4px rgba(145, 158, 171, 0.12);
  border-radius: 15px;
`;
export const HeaderBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const DataButton = styled.button`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  width: 132px;
  height: 32px;
  background: #97abe0;
  border: 1px solid #ffffff;
  border-radius: 5px;
`;
export const CourseButton = styled.button`
  width: 80px;
  height: 80px;
  margin-right: 10px;
  box-sizing: border-box;
  background: #ffffff;
  border: 1px solid #605dc7;
  border-radius: 7px;
`;
export const ButtonsBlock = styled.div``;
export const Header = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 120%;
  color: #000000;
`;
export const TableBlock = styled.div`
  width: 100%;
  overflow-y: scroll;
  max-height: 400px;
  scrollbar-color: #6969dd #e0e0e0;
`;
export const StudentsTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  text-align: left;
`;
export const TableHead = styled.thead`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 140%;
  letter-spacing: -0.01em;
  color: #5d6568;
`;
export const TableRow = styled.tr`
  height: 80px;
`;
export const TableHeader = styled.th``;
export const BodyBlock = styled.div``;
export const TableBody = styled.tbody`
  max-height: 400px;
`;
export const TableData = styled.td`
  border-style: solid;
  border-width: 1px 0 0 0px;
  border-color: #f4f4f9;
`;
