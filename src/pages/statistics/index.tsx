import React from 'react';
import { useTheme } from '@mui/material';
import {
    PageContent
} from "./styles";
import WelcomeCard from "./welcomeCard/index";
import DoughnutChart from "./eChart/index";

const Statistics = (): JSX.Element => {
  const theme = useTheme();
  return (
      <PageContent>
        <WelcomeCard/>
        <DoughnutChart
          height="350px"
          color={[
            theme.palette.primary.dark,
            theme.palette.primary.main,
            theme.palette.primary.light
          ]}
        />
      </PageContent>
  );
};

export default Statistics;
