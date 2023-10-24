import styled from 'styled-components';

export const ScheduleContainer = styled.div`
  display: flex;
  width: 100%;
  border-radius: 15px;
  margin-top: 35px;
  background-color: white;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

export const Day = styled.div`
  display: flex;
  border: 1px solid;
  border-radius: 15px;
  min-width: 80vw;
  margin: 20px 0;
  overflow: hidden;
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #97abe0;
  color: white;
  overflow: hidden;
  min-width: 50px;
  justify-content: center;
  align-items: center;
`;

export const LeftSideCurrent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #605dc7;
  color: white;
  overflow: hidden;
  min-width: 50px;
  justify-content: center;
  align-items: center;
`;
export const RightSide = styled.div``;

export const Separator = styled.div`
  background-color: #97abe0;
  margin: 0 2vw;
  height: 1px;
  min-width: 71vw;
`;

export const ChooseWeek = styled.div`
  margin-top: 20px;
  margin-left: 4%;
  display: flex;
  color: #97abe0;
  align-self: flex-start;
`;
export const Whitespace = styled.div`
  width: 10px;
`;
