import styled from 'styled-components';

type DropdownContentProps = {
  isOpen?: boolean;
};

export const DropdownContainer = styled.div`
  width: 300px;
`;

export const SelectedText = styled.div`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 35px;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  background-color: white;
`;

export const DropdownContent = styled.div<DropdownContentProps>`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  position: absolute;
  background-color: #f9f9f9;
  min-width: 200px;
  border: 1px solid #ccc;
  overflow: auto;
  max-height: 150px;
  border-radius: 0 0 15px 15px;
`;

export const DropdownOption = styled.div`
  padding: 10px;
  cursor: pointer;
`;
