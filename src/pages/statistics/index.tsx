import React from 'react';
import SpecialtyBlock from './specialtyBlock';
import {useTheme} from '@mui/material';
import LineChart from './lineChart';
import WelcomeCard from './welcomeCard/index';

const Statistics = (): JSX.Element => {
    const theme = useTheme();
    return (
        <>
            <WelcomeCard/>
            <SpecialtyBlock/>
            <LineChart
                height="350px"
                color={[theme.palette.primary.main, theme.palette.primary.light]}
            />
        </>
    );
};

export default Statistics;
