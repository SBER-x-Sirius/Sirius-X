import React from 'react';
import {
  ContainerLeft,
  Header,
  Percentage,
  ImagePercentage,
  AmountOfInterest,
  ContainerRight,
  Card
} from './styles';
import { useTranslation } from 'react-i18next';
import { ChartContainer, BarPlot } from '@mui/x-charts';
import PercentArrow from '../../../assets/svg/PercentArrow.svg'
import { useGetAttendancePerWeekQuery } from '../../../__data__/services/api/statistics/additionalCard'

const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F'
];
const AdditionalCard2: React.FC = (): JSX.Element => {
  const { t } = useTranslation();

  const { data: avgPerWeek } = useGetAttendancePerWeekQuery()
  return (
    <Card>
      <ContainerLeft>
        <Header>{t('statistics:statisticsTranslation.additionalCard2.header')}</Header>
        <Percentage>
          <ImagePercentage src={PercentArrow} alt={t('statistics:statisticsTranslation.additionalCard2.imagePercentageAlt')}/>
          <AmountOfInterest>{t('statistics:statisticsTranslation.additionalCard2.amountOfInterest')}</AmountOfInterest>
        </Percentage>
      </ContainerLeft>
      <ContainerRight>
        {avgPerWeek ?
          <ChartContainer
            width={200}
            height={150}
            series={[{ data: avgPerWeek.message, label: 'uv', type: 'bar', color: '#68a1ff' }]}
            xAxis={[{ scaleType: 'band', data: xLabels }]}
          >
            <BarPlot />
          </ChartContainer> :
        <></>
        }
      </ContainerRight>
    </Card>
  );
};
export default AdditionalCard2;
