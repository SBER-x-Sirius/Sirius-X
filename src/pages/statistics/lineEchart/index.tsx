import React from 'react';
import { useTheme } from '@mui/material';
import ReactEcharts from 'echarts-for-react';
import { getOption } from './data';

const LineChart = ({ height, color = [] }): JSX.Element => {
  const theme = useTheme();
  
  // Получение опций из файла data.ts
  const option = getOption(theme);

  return <ReactEcharts style={{ height }} option={{ ...option, color }} />;
};

export default LineChart;
