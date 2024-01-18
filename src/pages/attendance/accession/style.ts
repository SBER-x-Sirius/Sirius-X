import styled from 'styled-components';

// TODO: название
export const MeetingFormContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
  padding: 40px 30px 32px;
`;

export const MeetingInput = styled.input`
  padding: 14px 16px;
  border-radius: 35px;
  border: 0;
  outline: none;
  font-size: 16px;
  color: rgb(93, 101, 104);
  font-family: 'Jost', sans-serif;
`;

// TODO: название
export const MeetingButton = styled.button`
  padding: 12px 40px;
  border: 0;
  border-radius: 35px;
  background-color: rgb(96, 93, 199);
  color: white;
  font-size: 16px;
  font-family: 'Jost', sans-serif;
  cursor: pointer;
`;

export const AccessionAlert = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
`;
