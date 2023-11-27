import React, { useCallback, useEffect, useState } from 'react';
import {
  ScheduleItem,
  Time,
  Name,
  Place,
  Teacher,
  MainBlock,
  PlaceText,
  Header,
  Number,
  TeacherInfo,
  Icons, CustomTooltip, IconCopy
} from './styles';
import Map from '../../assets/svg/map.svg';
import Info from '../../assets/svg/info.svg';
import Copy from '../../assets/svg/copy.svg'
import { useTranslation } from 'react-i18next';

type propsScheduleCell = {
  data: {
    teacher: string;
    name: string;
    lessonKey: string;
    time: string;
    placeActivity: string;
    classType: string;
    classRoom: string;
  };
};

const time = {
  '09:00-10:30': 1,
  '10:45-12:15': 2,
  '13:45-14:15': 3,
  '15:00-16:30': 4,
  '16:45-18:15': 5,
  '18:30-20:00': 6,
};

const ScheduleCell = ({ data }: propsScheduleCell): JSX.Element => {
  const { t, i18n } = useTranslation();
  const [tooltipText, setTooltipText] = useState(t('schedule:scheduleTranslation.scheduleGrid.copy'));

  const handleCopyClick = useCallback(() => {
    navigator.clipboard.writeText(data.teacher);
    setTooltipText(t('schedule:scheduleTranslation.scheduleGrid.copied'))
  }, [data.teacher]);

  useEffect(() => {
    setTooltipText(t('schedule:scheduleTranslation.scheduleGrid.copy'));
  }, [i18n.language, t]);

  return (
    <ScheduleItem>
      <MainBlock>
        <Header>
          <Number>{time[data.time]}</Number>
          <Time>{data.time}</Time>
          <img src={Info} alt={t('schedule:scheduleTranslation.scheduleGrid.infoIcon')} />
        </Header>
        <Name>{`${data.name} (${data.classType})`}</Name>
        <Place>
          <Icons src={Map} alt={t('schedule:scheduleTranslation.scheduleGrid.mapIcon')} />
          <PlaceText>{data.placeActivity}, {t('schedule:scheduleTranslation.scheduleGrid.audience')} {data.classRoom}</PlaceText>
        </Place>
        <TeacherInfo>
          <Teacher>{data.teacher}</Teacher>
          <CustomTooltip title={tooltipText} placement='top' arrow>
            <IconCopy src={Copy} alt={t('schedule:scheduleTranslation.scheduleGrid.copyIcon')} onClick={handleCopyClick} />
          </CustomTooltip>
        </TeacherInfo>
      </MainBlock>
    </ScheduleItem>
  );
};

export default ScheduleCell;
