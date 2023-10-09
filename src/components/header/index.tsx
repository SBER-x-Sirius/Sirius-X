import React, { useEffect, useState } from 'react'
import {
  ContainerHeader, MenuNavigation,
  MenuList, MenuItem,
  MenuLink, LocalizeWrapper,
  LocalizeButton, ProfileLink,
  HeaderItemsWrapper, LogOutSvg
} from './styles'
import { getNavigationsValue } from '@ijl/cli'
import LogOutSVG from '../../assets/svg/log-out.svg';

type Link = {
    text: string;
    url: string;
  };

const Header: React.FC = (): JSX.Element => {
  const [activeLink, setActiveLink] = useState<string>('')
  const [activeLocalizeBtn, setActiveLocalizeBtn] = useState<string>('ru')

  const handleLinkClick = (link: string): void => {
    setActiveLink(link);
    localStorage.setItem('activeMenuLink', link);
  }

  const handleLocalizeClick = (btn: string): void => {
    setActiveLocalizeBtn(btn);
  }

  const links: Link[] = [
    { text: 'Расписание', url: 'sirius-x.schedule' },
    { text: 'Посещаемость', url: 'sirius-x.attendance' },
    { text: 'Успеваемость', url: 'sirius-x.statistics' }
  ]

  const linkElements = links.map((link) => (
        <MenuItem key={link.text}>
            <MenuLink
                to={ getNavigationsValue(link.url) }
                onClick={ () => handleLinkClick(link.url) }
                activeMenuLink={ activeLink === link.url }
            >
                {link.text}
            </MenuLink>
        </MenuItem>
  ))

  useEffect(() => {
    const storedActiveLink = localStorage.getItem('activeMenuLink');
    if (storedActiveLink) {
      setActiveLink(storedActiveLink);
    }
  }, []);

  return (
        <ContainerHeader>
            <MenuNavigation>
                <MenuList>
                    {linkElements}
                </MenuList>
            </MenuNavigation>
            <HeaderItemsWrapper>
                <LocalizeWrapper>
                    <LocalizeButton
                        onClick={ () => handleLocalizeClick('ru') }
                        activeLocalizeButton={ activeLocalizeBtn === 'ru' }
                    >ru</LocalizeButton>
                    <LocalizeButton
                        onClick={ () => handleLocalizeClick('en') }
                        activeLocalizeButton={ activeLocalizeBtn === 'en' }
                    >en</LocalizeButton>
                </LocalizeWrapper>
                <ProfileLink to={'#'}>
                    Личный кабинет
                </ProfileLink>
                <LogOutSvg src={LogOutSVG} alt="Кнопка выхода из личного кабинета" />
            </HeaderItemsWrapper>
        </ContainerHeader>
  )
}

export default Header
