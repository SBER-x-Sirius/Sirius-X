import React, {useCallback} from 'react';
import { ScheduleItem, Type, Time, Name, Place, Teacher, MainBlock, PlaceText, Header, HeaderLeft, Number } from './styles';
import Map from "../../assets/svg/Map";
import Info from "../../assets/svg/Info";


const ScheduleCell = (data) => {
    const { number, time, typeActivity, name, placeActivity, teacher } = data.data;

    const handleOnClick = useCallback(() => {
        // Заготовка для клика по карточке
        console.log('я в москве хаха я в москве');
    }, []);

    return (
        <ScheduleItem onClick={handleOnClick}>
            <MainBlock>
                <Header>
                    <HeaderLeft>
                        <Number>{number}</Number>
                        <Time>{time}</Time>
                    </HeaderLeft>
                    <Info/>
                </Header>
                <Type>{typeActivity}</Type>
                <Name>{name}</Name>
                <Place>
                    <Map/>
                    <PlaceText>{placeActivity}</PlaceText>
                </Place>
                <Teacher>{teacher}</Teacher>
            </MainBlock>
        </ScheduleItem>
    );
};

export default ScheduleCell;
