import React from 'react';
import SpecialtyBlock from './specialtyBlock';
import StudentsTableBlock from './studentsTable';
import { useTheme } from '@mui/material';
import LineChart from './lineChart';
import WelcomeCard from './welcomeCard/index';
import DoughnutChart from './eChart/index';
import {
  MainContainer, DoubleCard, FlexContainer,
} from './styles'

const Statistics = (): JSX.Element => {
  const theme = useTheme();
  return (
    <>
      <FlexContainer>
    <WelcomeCard/>
    <DoubleCard>
    </DoubleCard>
    </FlexContainer>
    <FlexContainer>
    <LineChart
        color={[theme.palette.primary.main, theme.palette.primary.light]}
      />
      <DoughnutChart
          color={[
            theme.palette.primary.dark,
            theme.palette.primary.main,
            theme.palette.primary.light
          ]}
        />
      </FlexContainer>
      <FlexContainer>
      <SpecialtyBlock/>
      <StudentsTableBlock/>
      </FlexContainer>
    </>
  );
};

export default Statistics;