import styled from 'styled-components';

export const CustomInput = styled.input`
  width: 100%;
  margin: 0;
  padding: 15px 20px;
  border: none;
  border-radius: 15px;
  background-color: #f4f4f9;
  color: #5d6568;
  font-size: 16px;
  font-weight: 400;
  &:focus {
    outline: none;
    color: black;
  }
  &:active {
    border: none;
  }
`;

export const ButtonClearInput = styled.button`
  right: 35px;
  background-color: transparent;
  color: #5d6568;
  position: relative;
  width: 15px;
  height: 15px;
  padding: 0;
  margin: 0;
  border: none;
  &:hover {
    cursor: pointer;
  }
  &:before,
  &:after {
    position: absolute;
    top: 1px;
    content: ' ';
    height: 15px;
    width: 2px;
    background-color: #5d6568;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;

export const InputContainer = styled.div`
  max-width: 500px;
  max-height: 55px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0 0 20px 20px;
`;
