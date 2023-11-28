import React from 'react';
import {
  Card,
  ContainerTop,
  Header,
  TopRightChat,
  TopRightImg,
  ContainerBottom,
  LabelSchedule,
  NameSchedule,
  PercentSchedule,
  Schedule
} from './styles';
import chat from '../../../assets/svg/chat.svg'
import { useTranslation } from 'react-i18next';


const AdditionalCard1: React.FC = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <Card>
      <ContainerTop>
        <Header>
          {t('statistics:statisticsTranslation.additionalCard1.header')}
        </Header>
        <TopRightChat>
          <TopRightImg src={chat} alt={t('statistics:statisticsTranslation.additionalCard1.imgAlt')}/>
        </TopRightChat>
      </ContainerTop>
      <ContainerBottom>
        <LabelSchedule>
          <NameSchedule>{t('statistics:statisticsTranslation.additionalCard1.nameSchedule')}</NameSchedule>
          <PercentSchedule>{t('statistics:statisticsTranslation.additionalCard1.percentSchedule')}</PercentSchedule>
        </LabelSchedule>
        <Schedule max="100" value="33"/>
      </ContainerBottom>
    </Card>
  );
};

export default AdditionalCard1;
