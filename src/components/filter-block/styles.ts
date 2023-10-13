import styled from 'styled-components';

export const FilterContainer = styled.div`
  display: flex;
  width: 100%;
  border-radius: 15px;
  margin-top: 35px;
  background-color: white;
  flex-direction: column;
  justify-content: center;
`;

export const FilterSwitchContainer = styled.ul`
  display: flex;
  flex-direction: row;
  padding: 0;
  gap: 50px;
  border-bottom: 1px solid #f4f4f9;
  margin: 20px 20px 0 20px;
`;

export const FilterSwitchItems = styled.li<{ active: boolean }>`
  margin: 0;
  padding-bottom: 9px;
  list-style: none;
  border-bottom: ${({ active }) => (active ? '2px solid #97ABE0' : 'none')};
  color: ${({ active }) => (active ? '#97ABE0' : 'black')};
  font-weight: ${({ active }) => (active ? '500' : '400')};
  cursor: pointer;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 28px;
  gap: 28px;
  margin: 0 0 20px 20px;
  flex-wrap: wrap;
  align-items: center;
  & p {
    margin: 0;
  }
`;

export const CheckboxInput = styled.div<{ color: string }>`
  display: flex;
  align-items: center;
  color: ${({ color }) => (color !== '' ? color : 'inherit')};
  input[type='checkbox'] {
    appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 2px;
    border: 1px solid #d1d5db;
    background: #f4f4f9;
    margin-right: 8px;
    cursor: pointer;
    &:checked {
      background: ${({ color }) => (color !== '' ? color : 'inherit')};
      border-radius: 2px;
    }
  }
  label {
    cursor: pointer;
  }
`;
