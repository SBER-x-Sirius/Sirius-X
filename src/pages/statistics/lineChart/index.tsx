import React from 'react';
import { useTheme } from '@mui/material';
import ReactEcharts from 'echarts-for-react';
import { getOption } from './data';

const LineChart = ({ color = [] }): JSX.Element => {
  const theme = useTheme();

  const option = getOption(theme);

  return (
    <ReactEcharts
      style={{
        height: '320px',
        minWidth: '600px',
        width: '100%',
        maxWidth: '1000px',
        backgroundColor: 'white',
        borderRadius: '20px',
        padding: '15px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
      }}
      option={{ ...option, color }}
    />
  );
};

export default LineChart;
