import React from 'react';
import { Day, LeftSide, RightSide, Separator } from '../styles';
import ScheduleCell from '../../schedule-cell';
import useCurrentDate from './useCurrentDate';

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

  for (const dayKey in data) {
    if (Object.prototype.hasOwnProperty.call(data, dayKey)) {
      const dataDay = data[dayKey];
      let lessonCounter = 0;
      const dayElement = (
        <Day key={dayKey} lastday={week.indexOf(dataDay.date) < week.indexOf(date.toString())}>
          <LeftSide currentday={dataDay.day === day && dataDay.date == date}>
            <div>{dataDay.day}</div>
            <div>{dataDay.date}</div>
          </LeftSide>
          <RightSide className='lessons'>
            {Object.keys(dataDay.lessons).map((lessonKey) => {
              const lesson = dataDay.lessons[lessonKey];
              lessonCounter++;
              return (
                <>
                  <div key={lessonKey} className='lesson'>
                    <ScheduleCell data={{ lessonKey, ...lesson }} />
                  </div>
                  {lessonCounter !== Object.keys(dataDay.lessons).length && <Separator />}
                </>
              );
            })}
          </RightSide>
        </Day>
      );

      scheduleElements.push(dayElement);
    }
  }

  return <div>{scheduleElements}</div>;
};

export default ScheduleContent;
