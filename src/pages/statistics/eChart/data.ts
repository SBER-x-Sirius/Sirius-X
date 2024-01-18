import { type Theme } from '@mui/material';

export const getOption = (theme: Theme) => ({
  legend: {
    show: true,
    itemGap: 20,
    icon: 'circle',
    bottom: 0,
    textStyle: {
      fontSize: 13,
      color: theme.palette.text.secondary,
      fontFamily: theme.typography.fontFamily
    }
  },
  tooltip: { show: false, trigger: 'item', formatter: '{a} <br/>{b}: {c} ({d}%)' },
  xAxis: [{ axisLine: { show: false }, splitLine: { show: false } }],
  yAxis: [{ axisLine: { show: false }, splitLine: { show: false } }],

  label: {
    fontSize: 13,
    color: theme.palette.text.primary,
    fontFamily: theme.typography.fontFamily
  },

  series: [
    {
      name: 'Traffic Rate',
      type: 'pie',
      radius: ['45%', '72.55%'],
      center: ['50%', '50%'],
      avoidLabelOverlap: false,
      hoverOffset: 5,
      stillShowZeroSum: false,
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        itemStyle: { shadowBlur: 10, shadowOffsetX: 0, shadowColor: 'rgba(0, 0, 0, 0.5)' },
        label: {
          show: true,
          formatter: '{b} \n{c} ({d}%)',
          fontFamily: theme.typography.fontFamily,
          color: theme.palette.text.primary,
          fontSize: 14
        }
      }
    }
  ]
});
