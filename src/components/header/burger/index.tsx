import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import {
  DrawerItemLink,
  DrawerList,
  DrawerListItem,
  DrawerLogout,
  DrawerWrapper,
  HeaderBurger,
  HeaderIconButton
} from './styles';
import { useTranslation } from 'react-i18next';
import { getNavigationsValue } from '@ijl/cli';
import Drawer from '@mui/material/Drawer';

type Link = {
  text: string;
  url: string;
};

export const Burger = (): JSX.Element => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const links: Link[] = [
    { text: t('main:header.menuLinks.schedule'), url: 'sirius-x.schedule' },
    { text: t('main:header.menuLinks.attendance'), url: 'sirius-x.attendance' },
    { text: t('main:header.menuLinks.statistic'), url: 'sirius-x.statistics' }
  ];

  const linkElements = links.map((link) => (
    <DrawerListItem key={link.text}>
      <DrawerItemLink to={getNavigationsValue(link.url)} onClick={handleMenuToggle}>
        {link.text}
      </DrawerItemLink>
    </DrawerListItem>
  ));

  return (
    <HeaderBurger>
      <HeaderIconButton size='large' edge='start' onClick={handleMenuToggle}>
        <MenuIcon />
      </HeaderIconButton>
      <Drawer
        anchor='right'
        open={isMenuOpen}
        onClose={handleMenuToggle}
        PaperProps={{
          sx: {
            backgroundColor: '#605dc7',
            width: '250px',
            borderRadius: '35px 0px 0px 35px'
          }
        }}
      >
        <DrawerWrapper>
          <DrawerList>{linkElements}</DrawerList>
          <DrawerLogout to={'#'} onClick={handleMenuToggle}>
            {t('main:header.menuLinks.logout')}
          </DrawerLogout>
        </DrawerWrapper>
      </Drawer>
    </HeaderBurger>
  );
};
