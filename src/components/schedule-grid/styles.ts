import styled from 'styled-components';

type LeftSideProps = {
  currentday?: boolean;
};

type DayProps = {
  lastday?: boolean;
};

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

export const ScheduleWrapper = styled.div`
  width: 97%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Day = styled.div<DayProps>`
  display: flex;
  border-radius: 15px;
  border: 1px solid #5d6568;
  margin: 20px 0;
  overflow: hidden;
  opacity: ${(props) => (props.lastday ? '40%' : '100%')};
`;

export const ScheduleCellsContainer = styled.div`
  width: 100%;
`;

export const LeftSide = styled.div<LeftSideProps>`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => (props.currentday ? '#605dc7' : '#97abe0')};
  color: white;
  overflow: hidden;
  min-width: 50px;
  justify-content: center;
  align-items: center;
`;

export const RightSide = styled.div`
  width: 100%;
`;

export const Separator = styled.div`
  background-color: #97abe0;
  margin: 0 2vw;
  height: 1px;
`;

export const ChooseWeek = styled.div`
  margin-top: 26px;
  margin-left: 8px;
  display: flex;
  color: #97abe0;
  align-self: flex-start;
`;

export const Whitespace = styled.div`
  width: 10px;
`;

export const ScheduleError = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 20%;
  height: 30vh;
  color: gray;
  font-size: 20px;
`;
