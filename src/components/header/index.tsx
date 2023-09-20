import React, { useState } from 'react'
import {
  ContainerHeader, MenuNavigation,
  MenuList, MenuItem,
  MenuLink, LocalizeWrapper,
  LocalizeButton, ProfileLink,
  HeaderItemsWrapper
} from './styles'
import { getNavigationsValue } from '@ijl/cli'

const Header = () => {
  const [activeLink, setActiveLink] = useState('')
  const [activeLocalizeBtn, setActiveLocalizeBtn] = useState('ru')

  const handleLinkClick = (link) => {
    setActiveLink(link)
  }

  const handleLocalizeClick = (btn) => {
    setActiveLocalizeBtn(btn)
  }

  const links = [
    { text: 'Расписание', url: 'sirius-x.schedule' },
    { text: 'Посещаемость', url: 'sirius-x.attendance' },
    { text: 'Успеваемость', url: 'sirius-x.statistics' }
  ]

  const linkElements = links.map((link) => (
        <MenuItem key={link.text}>
            <MenuLink
                to={getNavigationsValue(link.url)}
                onClick={() => { handleLinkClick(link.url) }}
                style={{
                  backgroundColor: activeLink === link.url ? 'rgba(151, 171, 224, 1)' : 'transparent',
                  color: activeLink === link.url ? 'white' : 'rgba(52, 63, 66, 1)'
                }}
            >
                {link.text}
            </MenuLink>
        </MenuItem>
  ))

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
                        onClick={() => { handleLocalizeClick('ru') }}
                        style={{ backgroundColor: activeLocalizeBtn === 'ru' ? 'rgba(151, 171, 224, 1)' : 'transparent' }}
                    >ru</LocalizeButton>
                    <LocalizeButton
                        onClick={() => { handleLocalizeClick('en') }}
                        style={{ backgroundColor: activeLocalizeBtn === 'en' ? 'rgba(151, 171, 224, 1)' : 'transparent' }}
                    >en</LocalizeButton>
                </LocalizeWrapper>
                <ProfileLink to={'#'}>
                    Личный кабинет
                </ProfileLink>
                <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.9412 17.6667L19.5 11.8333L13.9412 6" stroke="#343F42" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M18.7059 11.8334H6" stroke="#343F42" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15.8581 1L3.97163 1.00353C2.33077 1.0049 1.00083 2.41214 1 4.1479V19.8565C1 21.5926 2.33044 23 3.97163 23H16" stroke="#343F42" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </HeaderItemsWrapper>
        </ContainerHeader>
  )
}

export default Header
