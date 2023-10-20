import React from 'react';
import SpecialtyBlock from './specialtyBlock';
import { useTheme } from '@mui/material';
import LineChart from './lineChart';

const Statistics = (): JSX.Element => {
  const theme = useTheme();
  return (
    <>
      <SpecialtyBlock/>
      <LineChart
          height="350px"
          color={[theme.palette.primary.main, theme.palette.primary.light]}
        />
      </>
);
};

export default Statistics;
