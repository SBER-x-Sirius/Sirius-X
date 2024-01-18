import React from 'react';
import AdditionalCard2 from './additionalCard2';
import SpecialtyBlock from './specialtyBlock';
import StudentsTableBlock from './studentsTable';
import { useTheme } from '@mui/material';
import LineChart from './lineChart';
import WelcomeCard from './welcomeCard/index';
import DoughnutChart from './eChart/index';
import { DoubleCard, FlexContainer } from './styles';
import AdditionalCard1 from './additionalCard1/index';

const Statistics = (): JSX.Element => {
  const theme = useTheme();
  return (
    <>
      <FlexContainer>
        <WelcomeCard />
        <DoubleCard>
        <AdditionalCard1 />
        <AdditionalCard2 />
        </DoubleCard>
      </FlexContainer>
      <FlexContainer>
        <LineChart color={[theme.palette.primary.main, theme.palette.error.light, theme.palette.warning.light]} />
        <DoughnutChart color={[theme.palette.primary.dark, theme.palette.warning.light, theme.palette.error.light]} />
      </FlexContainer>
      <FlexContainer>
        <SpecialtyBlock />
        <StudentsTableBlock />
      </FlexContainer>
    </>
  );
};

export default Statistics;
