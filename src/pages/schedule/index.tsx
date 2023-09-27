import React from 'react';
import {ScheduleContainer} from './styles';
import {FilterBlock} from '../../components/filter-block';
import ScheduleGrid from '../../components/schedule-grid';
import {ScheduleData} from './test-data';

export const Schedule = () => {
    return (
        <ScheduleContainer>
            <FilterBlock/>
            <ScheduleGrid data={ScheduleData}/>
        </ScheduleContainer>
    );
};
