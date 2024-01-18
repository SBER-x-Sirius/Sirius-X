import styled from 'styled-components';

export const AuthFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #97abe0;
  width: 20%;
  padding: 2%;
  border-radius: 15px;
`;

export const AuthFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

export const AuthFieldTitle = styled.label`
  margin: 0 auto;
  margin-bottom: 6%;
  font-family: Jost sans-serif;
  font-size: 1.5vw;
  color: #fff;
`;

export const AuthSubmitButton = styled.button`
  padding: 12px 40px;
  border: 0;
  border-radius: 35px;
  background-color: rgb(96, 93, 199);
  color: white;
  font-size: 1vw;
  font-family: 'Jost', sans-serif;
  cursor: pointer;
  width: 80%;
  margin-bottom: 1%;
`;
