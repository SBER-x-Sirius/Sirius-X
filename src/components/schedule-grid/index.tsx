import React from 'react';
import { ScheduleContainer, ChooseWeek, Whitespace } from './styles';
import RightArrow from '../../assets/svg/right-arrow.svg';
import LeftArrow from '../../assets/svg/left-arrow.svg';
import { WeekData } from '../../pages/schedule/test-data';
import { useTranslation } from 'react-i18next';
import ScheduleContent, { ScheduleData } from './schedule-content';

const ScheduleGrid = ({ data }: { data: ScheduleData }): JSX.Element => {
  const { t } = useTranslation();

  return (
    <ScheduleContainer>
      <ChooseWeek>
        <img src={LeftArrow} alt={t('schedule:scheduleTranslation.scheduleGrid.backIcon')} />
        <Whitespace />
        <img src={RightArrow} alt={t('schedule:scheduleTranslation.scheduleGrid.forwardIcon')} />
        <Whitespace />
        {WeekData.month} {WeekData.year} ({WeekData.week} {t('schedule:scheduleTranslation.scheduleGrid.week')})
      </ChooseWeek>
      <ScheduleContent data={data} />
    </ScheduleContainer>
  );
};

export default ScheduleGrid;
