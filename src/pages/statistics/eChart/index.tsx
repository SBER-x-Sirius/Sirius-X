import React from 'react';
import { useTheme } from '@mui/material';
import ReactEcharts from 'echarts-for-react';
import { getOption } from './data';

interface DoughnutChartProps {
  height: string;
  color?: string[];
}

const DoughnutChart: React.FC<DoughnutChartProps> = ({ height, color = [] }): JSX.Element => {
  const theme = useTheme();
  const option = getOption(theme);

  return <ReactEcharts style={{ height: height }} option={{ ...option, color: [...color] }} />;
};

export default DoughnutChart;
