import React from 'react';
import { Day, LeftSide, RightSide, Separator } from '../styles';
import ScheduleCell from '../../schedule-cell';

export type Lesson = {
  time: string;
  name: string;
  placeActivity: string;
  teacher: string;
};

type DaySchedule = {
  date: string;
  day: string;
  lessons: Record<string, Lesson>;
};

export type ScheduleData = Record<string, DaySchedule>;

const ScheduleContent = ({ data }: ScheduleData): JSX.Element => {
  const scheduleElements = [];

  for (const dayKey in data) {
    if (Object.prototype.hasOwnProperty.call(data, dayKey)) {
      const day = data[dayKey];
      let lessonCounter = 0;

      const dayElement = (
        <Day key={dayKey}>
          <LeftSide>
            <div>{day.day}</div>
            <div>{day.date}</div>
          </LeftSide>
          <RightSide className='lessons'>
            {Object.keys(day.lessons).map((lessonKey) => {
              const lesson = day.lessons[lessonKey];
              lessonCounter++;
              return (
                <>
                  <div key={lessonKey} className='lesson'>
                    <ScheduleCell data={{ lessonKey, ...lesson }} />
                  </div>
                  {lessonCounter !== Object.keys(day.lessons).length && <Separator />}
                </>
              );
            })}
          </RightSide>
        </Day>
      );

      scheduleElements.push(dayElement);
    }
  }

  return <div className='schedule'>{scheduleElements}</div>;
};

export default ScheduleContent;
