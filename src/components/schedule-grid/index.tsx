import React from 'react'
import { ScheduleContainer, Day, LeftSide, RightSide, Separator, ChooseWeek, Whitespace } from './styles'
import ScheduleCell from '../schedule-cell';
import RightArrow from '../../assets/svg/right-arrow.svg';
import LeftArrow from '../../assets/svg/left-arrow.svg';
import {WeekData} from '../../pages/schedule/test-data';

const ScheduleGrid = (props: any): JSX.Element => {
    const {data} = props;

    const content = (schedule) => {
        const scheduleElements = [];

        for (const dayKey in schedule) {
            // eslint-disable-next-line no-prototype-builtins
            if (schedule.hasOwnProperty(dayKey)) {
                const day = schedule[dayKey];
                let lessonCounter = 0;

                const dayElement = (
                    <Day key={dayKey}>
                        <LeftSide>
                            <div>{day.date}</div>
                            <div>{day.day}</div>
                        </LeftSide>
                        <RightSide className="lessons">
                            {Object.keys(day.lessons).map((lessonKey) => {
                                const lesson = day.lessons[lessonKey];
                                lessonCounter++;
                                return (
                                    <>
                                        <div key={lessonKey} className="lesson">
                                            <ScheduleCell data={{lessonKey, ...lesson}}/>
                                        </div>
                                        {lessonCounter !== Object.keys(day.lessons).length && (
                                            <Separator/>
                                        )}
                                    </>

                                );
                            })}
                        </RightSide>
                    </Day>
                );

                scheduleElements.push(dayElement);
            }
        }

        return <div className="schedule">{scheduleElements}</div>;
    }

    return (
        <ScheduleContainer>
            <ChooseWeek>
                <img src={LeftArrow} alt="Назад" />
                <Whitespace/>
                <img src={RightArrow} alt="Вперед" />
                <Whitespace/>
                {WeekData.month} {WeekData.year} ({WeekData.week} неделя)
            </ChooseWeek>
            {content(data)}
        </ScheduleContainer>
    )
}

export default ScheduleGrid