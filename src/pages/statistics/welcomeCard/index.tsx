import React from 'react';
import {
  Card,
  ContainerLeft,
  Date,
  ContentCard,
  Header,
  Subtitle,
  ContainerButton,
  HeaderButton,
  ButtonCard,
  ContainerRight,
  Logo,
  LogoCard,
  NameLogoCard,
  MainImageCard
} from './styles'
import { useTranslation } from 'react-i18next';
import welcomeCardLogo from "../../../assets/svg/WelcomeCardLogo.svg";
import welcomeCardImage from "../../../assets/svg/WelcomeCardImage.svg";

const WelcomeCard = (props) => {

  const { t } = useTranslation();
  const specialtyData = [
    {
      logoSrc: welcomeCardLogo,
      text: t('statistics:statisticsTranslation'),
      num: t('statistics:statisticsTranslation')
    },
    {
      logoSrc: welcomeCardImage,
      text: t('statistics:statisticsTranslation'),
      num: t('statistics:statisticsTranslation')
    }
  ];

  return (
    <>
      <Card>
        <ContainerLeft>
          <Date>{t('statistics:statisticsTranslation')}</Date>

          <ContentCard>
            <Header>{t('statistics:statisticsTranslation')}</Header>
            <Subtitle>{t('statistics:statisticsTranslation')}</Subtitle>
          </ContentCard>

          <ContainerButton>
            <HeaderButton>{t('statistics:statisticsTranslation')}</HeaderButton>
            <ButtonCard>{t('statistics:statisticsTranslation')}</ButtonCard>
          </ContainerButton>

        </ContainerLeft>
        <ContainerRight>
          <Logo>
            <LogoCard src={props.welcomeCardInfo.logoCard} alt={t('statistics:statisticsTranslation')} />
            <NameLogoCard>{t('statistics:statisticsTranslation')}</NameLogoCard>
          </Logo>

          <MainImageCard src={props.welcomeCardInfo.mainImageCard} alt={t('statistics:statisticsTranslation')} />
        </ContainerRight>
      </Card>
    </>
  );
};

export default WelcomeCard;
