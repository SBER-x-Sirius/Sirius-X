import React from 'react';
import SpecialtyBlock from './specialtyBlock';
import {useTheme} from '@mui/material';
import LineChart from './lineChart';
import WelcomeCard from './welcomeCard/index';
import DoughnutChart from './eChart/index';

const Statistics = (): JSX.Element => {
    const theme = useTheme();
    return (
        <>
            <WelcomeCard/>
            <SpecialtyBlock/>
            <DoughnutChart
          height="350px"
          color={[
            theme.palette.primary.dark,
            theme.palette.primary.main,
            theme.palette.primary.light
          ]}
        />
            <LineChart
                height="350px"
                color={[theme.palette.primary.main, theme.palette.primary.light]}
            />
        </>
    );
};

export default Statistics;
