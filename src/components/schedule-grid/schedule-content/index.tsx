import React from 'react';
import { Day, LeftSide, RightSide, ScheduleCellsContainer, Separator } from '../styles';
import ScheduleCell from '../../schedule-cell';
import useCurrentDate from '../../../utils/schedule/useCurrentDate';
import { ScheduleItem } from '../../schedule-cell/styles';
import { useSelector } from 'react-redux';
import { translateClassType } from '../../../utils/schedule/translations';
import { filterLessons } from '../../../utils/schedule/filter-lesson';

export type Lesson = {
  time: string;
  name: string;
  placeActivity: string;
  teacher: string;
};

export type DaySchedule = {
  date: string;
  day: string;
  lessons: Record<string, Lesson>;
};

export type ScheduleData = Record<string, DaySchedule>;

const ScheduleContent = ({ data }: ScheduleData): JSX.Element => {
  const { day, date, week } = useCurrentDate(data);
  const scheduleElements = [];

  const classTypeFilter = useSelector((state: any) => state.filters.classTypeFilter);
  const inputFilterGroup = useSelector((state: any) => state.filters.inputFilterGroup);
  const inputFilterTeacher = useSelector((state: any) => state.filters.inputFilterTeacher);
  const translatedFilters = classTypeFilter.map((filter) => translateClassType(filter));

  for (const dayKey in data) {
    if (Object.prototype.hasOwnProperty.call(data, dayKey)) {
      const dataDay = data[dayKey];

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
              <div>{dataDay.day}</div>
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
                  <ScheduleItem>Совпадений не найдено.</ScheduleItem>
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
                <div>{dataDay.day}</div>
                <div>{dataDay.date}</div>
              </LeftSide>
              <RightSide>
                <ScheduleItem>Занятия отсутствуют.</ScheduleItem>
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
