import React, { useState } from 'react'
import {
  ContainerHeader, MenuNavigation,
  MenuList, MenuItem,
  MenuLink, LocalizeWrapper,
  LocalizeButton, ProfileLink,
  HeaderItemsWrapper
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
    setActiveLink(link)
  }

  const handleLocalizeClick = (btn: string): void => {
    setActiveLocalizeBtn(btn)
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
                active={ activeLink === link.url }
            >
                {link.text}
            </MenuLink>
        </MenuItem>
  ))

  return (
    <>
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
                            active={ activeLocalizeBtn === 'ru' }
                        >ru</LocalizeButton>
                        <LocalizeButton
                            onClick={ () => handleLocalizeClick('en') }
                            active={ activeLocalizeBtn === 'en' }
                        >en</LocalizeButton>
                    </LocalizeWrapper>
                    <ProfileLink to={'#'}>
                        Личный кабинет
                    </ProfileLink>
                    <img src={LogOutSVG} alt="Кнопка выхода из личного кабинета" />
                </HeaderItemsWrapper>
            </ContainerHeader>
    </>
  )
}

export default Header
