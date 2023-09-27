import React from 'react';
import { ScheduleItem, Time, Name, Place, Teacher, MainBlock, PlaceText, Header, Number } from './styles';
import Map from '../../assets/svg/map.svg';
import Info from '../../assets/svg/info.svg';


const ScheduleCell = (data) => {
    const { lessonKey, time, name, placeActivity, teacher } = data.data;

    return (
        <ScheduleItem>
            <MainBlock>
                <Header>
                    <Number>{lessonKey}</Number>
                    <Time>{time}</Time>
                    <img src={Info} alt="Иконка информации" />
                </Header>
                <Name>{name}</Name>
                <Place>
                    <img src={Map} alt="Иконка карты" />
                    <PlaceText>{placeActivity}</PlaceText>
                </Place>
                <Teacher>{teacher}</Teacher>
            </MainBlock>
        </ScheduleItem>
    );
};

export default ScheduleCell;