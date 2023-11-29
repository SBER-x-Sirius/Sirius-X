import React from 'react';
import { ScheduleContainer, ChooseWeek, Whitespace, ScheduleWrapper, ScheduleError } from './styles';
import RightArrow from '../../assets/svg/right-arrow.svg';
import LeftArrow from '../../assets/svg/left-arrow.svg';
import { useTranslation } from 'react-i18next';
import ScheduleContent, { ScheduleData } from './schedule-content';
import { useGetWeeklyScheduleQuery } from '../../__data__/services/api/schedule/schedule.api';
import useWeekNumberMonthYear from '../../utils/schedule/useMonthandWeek';

const ScheduleGrid = (): JSX.Element => {
  const { t } = useTranslation();
  const { weekNumber, monthName, year } = useWeekNumberMonthYear();
  const {data} = useGetWeeklyScheduleQuery(weekNumber);

  return (
    <ScheduleContainer>
      <ScheduleWrapper>
          <ChooseWeek>
            <img src={LeftArrow} alt={t('schedule:scheduleTranslation.scheduleGrid.backIcon')} />
            <Whitespace />
            <img src={RightArrow} alt={t('schedule:scheduleTranslation.scheduleGrid.forwardIcon')} />
            <Whitespace />
            {monthName} {year} ({weekNumber} {t('schedule:scheduleTranslation.scheduleGrid.week')})
          </ChooseWeek>
        {data ? <ScheduleContent data={data} /> : <ScheduleError>{t('schedule:scheduleTranslation.scheduleGrid.error')}</ScheduleError>}
      </ScheduleWrapper>
    </ScheduleContainer>
  );
};

export default ScheduleGrid;
