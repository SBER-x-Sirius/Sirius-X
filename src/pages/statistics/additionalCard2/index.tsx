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

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G'
];
const AdditionalCard2: React.FC = (): JSX.Element => {
  const { t } = useTranslation();
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
        <ChartContainer
          width={200}
          height={150}
          series={[{ data: uData, label: 'uv', type: 'bar', color: '#68a1ff' }]}
          xAxis={[{ scaleType: 'band', data: xLabels }]}
        >
          <BarPlot />
        </ChartContainer>
      </ContainerRight>
    </Card>
  );
};
export default AdditionalCard2;
