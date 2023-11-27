import myStyled from 'styled-components';
import { styled } from '@mui/system';
import { Tooltip } from '@mui/material';

export const ScheduleItem = myStyled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 2vw;
  font-size: 14px;
`;
export const MainBlock = myStyled.div``;
export const Header = myStyled.div`
  display: flex;
  padding: 4px 0;
`;
export const Number = myStyled.div`
  display: flex;
  color: #97abe0;
  padding-right: 14px;
  font-weight: bold;
  font-size: 16px;
`;
export const Time = myStyled.div`
  padding-right: 14px;
`;
export const Name = myStyled.div`
  display: flex;
  font-weight: 500;
  padding: 4px 0;
  font-size: 18px;
`;
export const Place = myStyled.div`
  margin-left: -4px;
  display: flex;
  padding: 4px 0;
  text-align: center;
`;
export const PlaceText = myStyled.div`
  padding-top: 2px;
  font-size: 16px;
`;
export const Teacher = myStyled.div`
  display: flex;
  padding: 4px 0;
  font-size: 16px;
`;

export const TeacherInfo = myStyled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`

export const Icons = myStyled.img`
  width: 24px;
`

export const IconCopy = myStyled.img`
  width: 24px;
  cursor: pointer;
`

export const CustomTooltip = styled(Tooltip)`
  //transform: translate(360px, -400px);
  font-family: 'Jost', sans-serif;
`
