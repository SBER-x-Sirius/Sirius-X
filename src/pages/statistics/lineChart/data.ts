import { Theme } from '@mui/material';

export const getOption = (theme: Theme) => ({
  grid: { top: '10%', bottom: '10%', left: '5%', right: '5%' },
  legend: {
    itemGap: 20,
    icon: 'circle',
    textStyle: {
      fontSize: 13,
      color: theme.palette.text.secondary,
      fontFamily: theme.typography.fontFamily
    }
  },
  label: {
    fontSize: 13,
    color: theme.palette.text.secondary,
    fontFamily: theme.typography.fontFamily
  },
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    axisLine: { show: false },
    axisTick: { show: false },
    axisLabel: {
      fontSize: 14,
      fontFamily: 'roboto',
      color: theme.palette.text.secondary
    }
  },
  yAxis: {
    type: 'value',
    axisLine: { show: false },
    axisTick: { show: false },
    splitLine: {
      lineStyle: { color: theme.palette.text.secondary, opacity: 0.15 }
    },
    axisLabel: { color: theme.palette.text.secondary, fontSize: 13, fontFamily: 'roboto' }
  },
  series: [
    {
      // data: [30, 40, 20, 50, 40, 80, 90],
      type: 'line',
      stack: 'Первый курс',
      name: 'Первый курс',
      smooth: true,
      symbolSize: 4,
      lineStyle: { width: 4 }
    },
    {
      // data: [20, 50, 15, 50, 30, 70, 95],
      type: 'line',
      stack: 'Второй курс',
      name: 'Второй курс',
      smooth: true,
      symbolSize: 4,
      lineStyle: { width: 4 }
    },
    {
      // data: [20, 50, 15, 50, 30, 70, 95],
      type: 'line',
      stack: 'Третий курс',
      name: 'Третий курс',
      smooth: true,
      symbolSize: 4,
      lineStyle: { width: 4 }
    }
  ]
});
