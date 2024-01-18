import React, { useEffect, useState } from 'react';
import { useTheme } from '@mui/material';
import ReactEcharts from 'echarts-for-react';
import { getOption } from './data';
import { useGetEChartQuery } from '../../../__data__/services/api/statistics/chart';

interface DoughnutChartProps {
  color?: string[];
}

const DoughnutChart: React.FC<DoughnutChartProps> = ({ color = [] }: any): JSX.Element => {
  const theme = useTheme();

  const { data: eChartData } = useGetEChartQuery();
  const [option, setOption] = useState(getOption(theme));

  console.log(option);
  useEffect(() => {
    if (eChartData) {
      const apiData = {
        series: {
          data: [
            {
              value: eChartData.message[0],
              name: '1 Курс'

            },
            {
              value: eChartData.message[1],
              name: '2 Курс'

            },
            {
              value: eChartData.message[2],
              name: '3 Курс'

            }
          ]
        }
      };
      setOption({ ...option, ...apiData });
      console.log({ ...option, ...apiData });
    }
  }, [eChartData]);
  console.log(option);
  return (
    <ReactEcharts
      style={{
        height: '340px',
        minWidth: '300px',
        width: '100%',
        maxWidth: '400px',
        backgroundColor: 'white',
        borderRadius: '20px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        paddingBottom: '10px'
      }}
      option={{ ...option, color: [...color] }}
    />
  );
};

export default DoughnutChart;
