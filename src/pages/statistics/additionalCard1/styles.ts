import styled from 'styled-components';

export const Card = styled.div`
  color: white;
  padding: 20px;
  border-radius: 20px;
  background: #115cff;
  min-width: 600px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`

export const ContainerTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const TopLeft = styled.div`
  align-items: center;
`

export const Header = styled.h3`
  margin: 0;
`
export const Content = styled.div``

export const TopRightChat = styled.div`
  width: 40px;
  height: 40px;
  background: #2a6dff;
  display: flex;
  border-radius: 8px;
`

export const TopRightImg = styled.img`
  margin: auto
`

export const ContainerBottom = styled.div``

export const LabelSchedule = styled.div`
  display: flex;
  justify-content: space-between;
`

export const NameSchedule = styled.div``

export const PercentSchedule = styled.div`
  margin-right: 4px
`

export const Schedule = styled.progress`
  width: 100%;
  -webkit-appearance: none;
  appearance: none;
  border: none;
  border-radius: 10px;
  height: 10px;
  
  &::-webkit-progress-bar {
    background: #56b6ff;
  }
  
  &::-webkit-progress-bar,
  &::-webkit-progress-value {
    border-radius: 10px;
  }
  
  &::-moz-progress-bar {
    border-radius: 10px;
  }
  
  &::-webkit-progress-value {
    background-color: #f0f0f0;
  }
`
