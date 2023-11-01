import React from 'react';
import { ScheduleItem, Time, Name, Place, Teacher, MainBlock, PlaceText, Header, Number } from './styles';
import Map from '../../assets/svg/map.svg';
import Info from '../../assets/svg/info.svg';
import { useTranslation } from 'react-i18next';

type propsScheduleCell = {
  data: {
    lessonKey: string;
    name: string;
    classType: string;
    placeActivity: string;
    teacher: string;
    time: string;
  };
};

const ScheduleCell = ({ data }: propsScheduleCell): JSX.Element => {
  const { t } = useTranslation();

  return (
    <ScheduleItem>
      <MainBlock>
        <Header>
          <Number>{data.lessonKey}</Number>
          <Time>{data.time}</Time>
          <img src={Info} alt={t('schedule:scheduleTranslation.scheduleGrid.infoIcon')} />
        </Header>
        <Name>{`${data.name} (${data.classType})`}</Name>
        <Place>
          <img src={Map} alt={t('schedule:scheduleTranslation.scheduleGrid.mapIcon')} />
          <PlaceText>{data.placeActivity}</PlaceText>
        </Place>
        <Teacher>{data.teacher}</Teacher>
      </MainBlock>
    </ScheduleItem>
  );
};

export default ScheduleCell;
