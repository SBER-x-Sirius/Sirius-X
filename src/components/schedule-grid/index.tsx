import React, { useState } from 'react';
import {
  ScheduleContainer,
  ChooseWeek,
  Whitespace,
  ScheduleWrapper,
  ScheduleError,
  Arrows,
  CustomCircularProgress
} from './styles';
import RightArrow from '../../assets/svg/right-arrow.svg';
import LeftArrow from '../../assets/svg/left-arrow.svg';
import { useTranslation } from 'react-i18next';
import ScheduleContent from './schedule-content';
import { useGetWeeklyScheduleQuery } from '../../__data__/services/api/schedule/schedule.api';
import useWeekNumberMonthYear from '../../utils/schedule/useMonthandWeek';
import { useSelector } from 'react-redux';

const ScheduleGrid = (): JSX.Element => {
  const { t } = useTranslation();
  const { weekNumber, monthName, year } = useWeekNumberMonthYear();
  const [currentWeek, setCurrentWeek] = useState(weekNumber);
  const { data, isFetching, error } = useGetWeeklyScheduleQuery(currentWeek);

  const inputFilterGroup = useSelector((state: any) => state.filters.inputFilterGroup);
  const inputFilterTeacher = useSelector((state: any) => state.filters.inputFilterTeacher);

  const handleClickPrevWeek = () => {
    if (currentWeek <= 0) {
      return;
    }
    setCurrentWeek(currentWeek - 1);
  };

  const handleClickNextWeek = () => {
    if (currentWeek >= 52) {
      return;
    }
    setCurrentWeek(currentWeek + 1);
  };

  return (
    <ScheduleContainer id='schedule-container'>
      <ScheduleWrapper>
        <ChooseWeek>
          <Arrows
            src={LeftArrow}
            alt={t('schedule:scheduleTranslation.scheduleGrid.backIcon')}
            onClick={handleClickPrevWeek}
          />
          <Whitespace />
          <Arrows
            src={RightArrow}
            alt={t('schedule:scheduleTranslation.scheduleGrid.forwardIcon')}
            onClick={handleClickNextWeek}
          />
          <Whitespace />
          {monthName} {year} ({currentWeek} {t('schedule:scheduleTranslation.scheduleGrid.week')})
        </ChooseWeek>
        {isFetching ? (
          <CustomCircularProgress />
        ) : data && !error && (inputFilterGroup || inputFilterTeacher) ? (
          <ScheduleContent data={data} />
        ) : (
          <ScheduleError>{t('schedule:scheduleTranslation.scheduleGrid.error')}</ScheduleError>
        )}
      </ScheduleWrapper>
    </ScheduleContainer>
  );
};

export default ScheduleGrid;
