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
  Icons,
  CustomTooltip,
  IconCopy,
  InfoIcon
} from './styles';
import Map from '../../assets/svg/map.svg';
import Info from '../../assets/svg/info.svg';
import Copy from '../../assets/svg/copy.svg'
import { useTranslation } from 'react-i18next';
import { UIModalSchedule } from '@Olegyesterdays/ui-kit-sirius-x/dist/cjs';
import { createPortal } from 'react-dom';

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
  '18:30-20:00': 6
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

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <ScheduleItem>
        <MainBlock>
          <Header>
            <Number>{time[data.time] ? time[data.time] : '0'}</Number>
            <Time>{data.time}</Time>
            <InfoIcon src={Info} alt={t('schedule:scheduleTranslation.scheduleGrid.infoIcon')} onClick={toggleModal} />
          </Header>
          <Name>{`${data.name} (${data.classType})`}</Name>
          <Place>
            <Icons src={Map} alt={t('schedule:scheduleTranslation.scheduleGrid.mapIcon')} />
            <PlaceText>
              {data.placeActivity}, {t('schedule:scheduleTranslation.scheduleGrid.audience')} {data.classRoom}
            </PlaceText>
          </Place>
        <TeacherInfo>
          <Teacher>{data.teacher}</Teacher>
          <CustomTooltip title={tooltipText} placement='top' arrow>
            <IconCopy src={Copy} alt={t('schedule:scheduleTranslation.scheduleGrid.copyIcon')} onClick={handleCopyClick} />
          </CustomTooltip>
        </TeacherInfo>
        </MainBlock>
      </ScheduleItem>

      {isModalOpen &&
        createPortal(
          <UIModalSchedule title={'Информация о событии'} data={data} isOpen={isModalOpen} onClose={toggleModal} />,
          document.querySelector('#schedule-container')
        )}
    </>
  );
};

export default ScheduleCell;
