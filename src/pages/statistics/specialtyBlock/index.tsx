import React from 'react';
import { useTranslation } from 'react-i18next';
import {
    SpecialtyBlockContainer,
    Header,
    Subheader,
    SpecialtyBlockContainerList,
    ListItem,
    ListItemText,
    ListItemImageBlock,
    ListItemImage,
    ListItemNum,
    Button
} from './styles';
import HotelBusinessLogo from '../../../assets/svg/HotelBusinessLogo.svg';
import InformationSecurityLogo from '../../../assets/svg/InformationSecurityLogo.svg';
import ProgrammersLogo from '../../../assets/svg/ProgrammersLogo.svg';
import SystemAdministratorsLogo from '../../../assets/svg/SystemAdministratorsLogo.svg';
import ComputerComplexLogo from '../../../assets/svg/ComputerComplexLogo.svg';

const SpecialtyBlock: React.FC = () => {
  const { t } = useTranslation();
  const specialtyData = [
    {
      logoSrc: SystemAdministratorsLogo,
      text: t('statistics:statisticsTranslation.specialtyBlock.specialties.systemAdministrators'),
      num: t('statistics:statisticsTranslation.specialtyBlock.numbers.systemAdministrators')
    },
    {
      logoSrc: ProgrammersLogo,
      text: t('statistics:statisticsTranslation.specialtyBlock.specialties.programmers'),
      num: t('statistics:statisticsTranslation.specialtyBlock.numbers.programmers')
    },
    {
      logoSrc: ComputerComplexLogo,
      text: t('statistics:statisticsTranslation.specialtyBlock.specialties.computerComplexes'),
      num: t('statistics:statisticsTranslation.specialtyBlock.numbers.computerComplexes')
    },
    {
      logoSrc: InformationSecurityLogo,
      text: t('statistics:statisticsTranslation.specialtyBlock.specialties.informationSecurity'),
      num: t('statistics:statisticsTranslation.specialtyBlock.numbers.informationSecurity')
    },
    {
      logoSrc: HotelBusinessLogo,
      text: t('statistics:statisticsTranslation.specialtyBlock.specialties.hotelBusiness'),
      num: t('statistics:statisticsTranslation.specialtyBlock.numbers.hotelBusiness')
    }
  ];

  return (
        <SpecialtyBlockContainer>
            <Header>{t('statistics:statisticsTranslation.specialtyBlock.header')}</Header>
            <Subheader>{t('statistics:statisticsTranslation.specialtyBlock.subheader')}</Subheader>
            <SpecialtyBlockContainerList>
              {specialtyData.map((specialty, index) => (
                <ListItem key={index}>
                <ListItemImageBlock>
                <ListItemImage src={specialty.logoSrc} />
                </ListItemImageBlock>
                <ListItemText>{t(specialty.text)}</ListItemText>
                <ListItemNum>{t(specialty.num)}</ListItemNum>
                </ListItem>
              ))}
            </SpecialtyBlockContainerList>
            <Button>{t('statistics:statisticsTranslation.specialtyBlock.buttonText')}</Button>
        </SpecialtyBlockContainer>
    );
};

export default SpecialtyBlock;
