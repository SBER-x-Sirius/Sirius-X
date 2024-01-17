import React from 'react';
import { Day, LeftSide, RightSide, ScheduleCellsContainer, Separator } from '../styles';
import ScheduleCell from '../../schedule-cell';
import useCurrentDate from '../../../utils/schedule/useCurrentDate';
import { ScheduleItem } from '../../schedule-cell/styles';
import { useSelector } from 'react-redux';
import { translateClassType } from '../../../utils/schedule/translations';
import { filterLessons } from '../../../utils/schedule/filter-lesson';
import { useTranslation } from 'react-i18next';
import { DayData, Schedule } from '../../../__data__/services/api/schedule/types';

const ScheduleContent = ({ data }: { data: Schedule }): JSX.Element => {
  const { t } = useTranslation();
  const { day, date, week } = useCurrentDate(data);
  const scheduleElements = [];

  const classTypeFilter = useSelector((state: any) => state.filters.classTypeFilter);
  const inputFilterGroup = useSelector((state: any) => state.filters.inputFilterGroup);
  const inputFilterTeacher = useSelector((state: any) => state.filters.inputFilterTeacher);
  const translatedFilters = classTypeFilter.map((filter) => translateClassType(filter));

  for (const dayKey in data) {
    if (Object.prototype.hasOwnProperty.call(data, dayKey)) {
      const dataDay = data[dayKey] as DayData;
      const translatedDay = `schedule:scheduleTranslation.days.${dataDay.day}`;

      if (dataDay.lessons && Object.keys(dataDay.lessons).length > 0) {
        let lessonCounter = 0;
        const filteredLessonKeys = filterLessons(
          dataDay.lessons,
          inputFilterGroup,
          inputFilterTeacher,
          translatedFilters
        );

        const dayElement = (
          <Day key={dayKey} lastday={week.indexOf(dataDay.date) < week.indexOf(date.toString())}>
            <LeftSide currentday={dataDay.day === day && dataDay.date == date}>
              <div>{t(translatedDay as any)}</div>
              <div>{dataDay.date}</div>
            </LeftSide>
            <RightSide>
              {filteredLessonKeys.map((lessonKey, index) => {
                const lesson = dataDay.lessons[lessonKey];
                lessonCounter++;
                return (
                  <React.Fragment key={lessonKey}>
                    <ScheduleCell data={{ lessonKey, ...lesson, dataDay }} />
                    {index < filteredLessonKeys.length - 1 && <Separator />}
                  </React.Fragment>
                );
              })}

              {lessonCounter === 0 && (
                <>
                  <ScheduleItem>{t('schedule:scheduleTranslation.scheduleGrid.noMatches')}</ScheduleItem>
                </>
              )}
            </RightSide>
          </Day>
        );
        scheduleElements.push(dayElement);
      } else {
        if (dayKey != 'weekData') {
          scheduleElements.push(
            <Day key={dayKey} lastday={week.indexOf(dataDay.date) < week.indexOf(date.toString())}>
              <LeftSide currentday={dataDay.day === day && dataDay.date == date}>
                <div>{t(translatedDay as any)}</div>
                <div>{dataDay.date}</div>
              </LeftSide>
              <RightSide>
                <ScheduleItem>{t('schedule:scheduleTranslation.scheduleGrid.noClasses')}</ScheduleItem>
              </RightSide>
            </Day>
          );
        }
      }
    }
  }

  return <ScheduleCellsContainer>{scheduleElements}</ScheduleCellsContainer>;
};

export default ScheduleContent;
