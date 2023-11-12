import myStyled from 'styled-components';
import { styled } from '@mui/system';
import { TextField } from '@mui/material';

export const InputContainer = myStyled.div`
  max-width: 500px;
  max-height: 55px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0 0 20px 20px;
`;

export const CustomTextField = styled(TextField)`
  & .MuiInputBase-root.MuiOutlinedInput-root {
    border-radius: 15px;
    background-color: #f4f4f9;
    color: #5d6568;
    font-family: 'Jost', sans-serif;
    font-size: 16px;
    font-weight: 400;
  }
`;
