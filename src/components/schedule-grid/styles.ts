import styled from 'styled-components';

type LeftSideProps = {
  currentDay?: boolean;
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

export const Day = styled.div`
  display: flex;
  border: 1px solid;
  border-radius: 15px;
  margin: 20px 0;
  overflow: hidden;
`;

export const ScheduleCellsContainer = styled.div`
  width: 100%;
`;

export const LeftSide = styled.div<LeftSideProps>`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => (props.currentDay ? '#605dc7' : '#97abe0')};
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
