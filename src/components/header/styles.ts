import styled from 'styled-components';
import { Link } from 'react-router-dom';

type MenuLinkProps = {
  activeMenuLink?: boolean;
  activeLocalizeButton?: boolean;
}

const primaryBackgroundColor = '#FFFFFF';
const primaryTextColor = '#343F42';
const activeMenuLinkColor = '#FFFFFF'
const activeMenuLinkBackground = '#97ABE0';
const localizeBackground = '#F4F4F9';

export const ContainerHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1536px;
  padding: 0 22px 0 7px;
  margin: 28px auto 0;
  height: 50px;
  background-color: ${primaryBackgroundColor};
  border-radius: 30px
`
export const MenuNavigation = styled.nav`
  height: 100%;
`

export const MenuList = styled.ul`
  display: flex;
  align-items: center;
  height: 100%;
  margin: 0;
  padding: 0;
  gap: 5px;
`

export const MenuItem = styled.li`
  display: flex;
  align-items: center;
  list-style: none;
  height: 100%;
`

export const MenuLink = styled(Link)<MenuLinkProps>`
  display: flex;
  justify-content: center;
  border-radius: 35px;
  align-items: center;
  text-decoration: none;
  min-width: 160px;
  height: 40px;
  background-color: ${props => props.activeMenuLink ? activeMenuLinkBackground : 'transparent' };
  color: ${props => props.activeMenuLink ? activeMenuLinkColor : primaryTextColor };
  transition: background-color 0.3s, color 0.3s;
`

export const LocalizeWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 3px;
  gap: 5px;
  border-radius: 35px;
  min-width: 60px;
  min-height: 24px;
  background-color: ${localizeBackground};
`

export const LocalizeButton = styled.button<MenuLinkProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding-bottom: 3px;
  width: 23px;
  height: 18px;
  border: 0;
  border-radius: 35px;
  color: ${primaryTextColor};
  background-color: ${props => props.activeLocalizeButton ? activeMenuLinkBackground : 'transparent'};
  transition: background-color 0.3s, color 0.3s;
`

export const ProfileLink = styled(Link)`
  display: flex;
  justify-content: center;
  color: ${primaryTextColor};
  border-radius: 35px;
  align-items: center;
  text-decoration: none;
  min-width: 160px;
  height: 40px;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${activeMenuLinkBackground};
    color: ${activeMenuLinkColor};
  }
`

export const LogOutSvg = styled.img`
  cursor: pointer;
`

export const HeaderItemsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`
