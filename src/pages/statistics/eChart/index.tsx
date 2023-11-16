import React from 'react';
import { useTheme } from '@mui/material';
import ReactEcharts from 'echarts-for-react';
import { getOption } from './data';

interface DoughnutChartProps {
  color?: string[];
}

const DoughnutChart: React.FC<DoughnutChartProps> = ({color = [] }): JSX.Element => {
  const theme = useTheme();
  const option = getOption(theme);

  return <ReactEcharts style={{ 
    height: '350px', 
    minWidth:'300px', 
    width: '100%', 
    maxWidth: '400px', 
    backgroundColor: 'white', 
    borderRadius: '20px', 
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' 
  }} option={{ ...option, color: [...color] }} />;
};

export default DoughnutChart;