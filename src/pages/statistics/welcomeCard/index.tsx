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
} from './styles';
import { useTranslation } from 'react-i18next';
import welcomeCardLogo from '../../../assets/svg/WelcomeCardLogo.svg';
import welcomeCardImage from '../../../assets/svg/WelcomeCardImage.svg';

const WelcomeCard: React.FC = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <Card>
      <ContainerLeft>
        <Date>{t('statistics:statisticsTranslation.welcomeCard.dateCard')}</Date>
        <ContentCard>
          <Header>{t('statistics:statisticsTranslation.welcomeCard.headerCard')}</Header>
          <Subtitle>{t('statistics:statisticsTranslation.welcomeCard.subtitle')}</Subtitle>
        </ContentCard>
        <ContainerButton>
          <HeaderButton>{t('statistics:statisticsTranslation.welcomeCard.headerButton')}</HeaderButton>
          <ButtonCard>{t('statistics:statisticsTranslation.welcomeCard.buttonCard')}</ButtonCard>
        </ContainerButton>
      </ContainerLeft>
      <ContainerRight>
        <Logo>
          <LogoCard src={welcomeCardLogo} alt={t('statistics:statisticsTranslation.welcomeCard.logoCardAlt')} />
          <NameLogoCard>{t('statistics:statisticsTranslation.welcomeCard.nameLogoCard')}</NameLogoCard>
        </Logo>
        <MainImageCard
          src={welcomeCardImage}
          alt={t('statistics:statisticsTranslation.welcomeCard.mainImageCardAlt')}
        />
      </ContainerRight>
    </Card>
  );
};

export default WelcomeCard;
