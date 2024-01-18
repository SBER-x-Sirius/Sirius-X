import React, { useEffect, useState } from 'react';
import { useTheme } from '@mui/material';
import ReactEcharts from 'echarts-for-react';
import { getOption } from './data';
import { useGetLinneChartQuery } from '../../../__data__/services/api/statistics/chart'

const LineChart = ({ color = [] }: any): JSX.Element => {
  const theme = useTheme();
  // console.log(color);

  const { data: lineChartDate} = useGetLinneChartQuery()
  const [ option, setOption] = useState(getOption(theme))

  useEffect(() => {
    if (lineChartDate) {
      const apiData = {
        series: [
          {
            data: lineChartDate.message.course1
          },
          {
            data: lineChartDate.message.course2
          },
          {
            data: lineChartDate.message.course3
          }
        ]}
      setOption({ ...option, ...apiData })
      // console.log({ ...option, ...apiData });
    }
  }, [lineChartDate]);
  // console.log(option);
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
