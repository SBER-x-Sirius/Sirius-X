import React from 'react';
import { ScheduleContainer, ChooseWeek, Whitespace, ScheduleWrapper, ScheduleError } from './styles';
import RightArrow from '../../assets/svg/right-arrow.svg';
import LeftArrow from '../../assets/svg/left-arrow.svg';
import { useTranslation } from 'react-i18next';
import ScheduleContent, { ScheduleData } from './schedule-content';
import { useGetWeeklyScheduleQuery } from '../../__data__/services/api/schedule/schedule.api';

const ScheduleGrid = (): JSX.Element => {
  const { t } = useTranslation();
  const currentDate = new Date();

  const getWeekNumber = (date) => {
    const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
    const days = Math.floor((date - firstDayOfYear) / (24 * 60 * 60 * 1000));
    return Math.ceil((days + firstDayOfYear.getDay() + 1) / 7);
  };

  const weekNumber = getWeekNumber(currentDate);
  const {data} = useGetWeeklyScheduleQuery(weekNumber);

  return (
    <ScheduleContainer>
      <ScheduleWrapper>
        {data && (
          <ChooseWeek>
            <img src={LeftArrow} alt={t('schedule:scheduleTranslation.scheduleGrid.backIcon')} />
            <Whitespace />
            <img src={RightArrow} alt={t('schedule:scheduleTranslation.scheduleGrid.forwardIcon')} />
            <Whitespace />
            {data.weekData.month} {data.weekData.year} ({data.weekData.week} {t('schedule:scheduleTranslation.scheduleGrid.week')})
          </ChooseWeek>
        )}
        {data ? <ScheduleContent data={data} /> : <ScheduleError>{t('schedule:scheduleTranslation.scheduleGrid.error')}</ScheduleError>}
      </ScheduleWrapper>
    </ScheduleContainer>
  );
};

export default ScheduleGrid;
