import styled from 'styled-components';
import { Link } from 'react-router-dom';

type MenuLinkProps = {
  activeMenuLink?: boolean;
  activeLocalizeButton?: boolean;
};

const primaryBackgroundColor = '#FFFFFF';
const primaryTextColor = '#343F42';
const activeMenuLinkColor = '#FFFFFF';
const activeMenuLinkBackground = '#97ABE0';
const localizeBackground = '#F4F4F9';

export const ContainerHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 100%;
  margin: 28px 0 0;
  height: 50px;
  background-color: ${primaryBackgroundColor};
  border-radius: 30px;
  font-family: 'Jost', sans-serif;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 650px) {
    background-color: transparent;
    height: 40px;
  }
`;

export const MenuNavigation = styled.nav`
  height: 100%;
  padding-left: 7px;

  @media (max-width: 650px) {
    display: none;
  }
`;

export const MenuList = styled.ul`
  display: flex;
  align-items: center;
  height: 100%;
  margin: 0;
  padding: 0;
  gap: 5px;
`;

export const MenuItem = styled.li`
  display: flex;
  align-items: center;
  list-style: none;
  height: 100%;
`;

export const MenuLink = styled(Link)<MenuLinkProps>`
  display: flex;
  justify-content: center;
  border-radius: 35px;
  align-items: center;
  text-decoration: none;
  min-width: 160px;
  height: 40px;
  background-color: ${(props) => (props.activeMenuLink ? activeMenuLinkBackground : 'transparent')};
  color: ${(props) => (props.activeMenuLink ? activeMenuLinkColor : primaryTextColor)};
  transition:
    background-color 0.3s,
    color 0.3s;

  @media (max-width: 1000px) {
    min-width: 120px;
  }

  @media (max-width: 768px) {
    min-width: 105px;
  }
`;

export const LocalizeWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 3px;
  gap: 5px;
  border-radius: 35px;
  min-width: 72px;
  min-height: 30px;
  background-color: ${localizeBackground};

  @media (max-width: 650px) {
    min-height: 40px;
    min-width: 96px;
    background-color: white;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
  }
`;

export const LocalizeButton = styled.button<MenuLinkProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding-bottom: 3px;
  width: 30px;
  height: 22px;
  border: 0;
  border-radius: 35px;
  color: ${primaryTextColor};
  background-color: ${(props) => (props.activeLocalizeButton ? activeMenuLinkBackground : 'transparent')};
  transition:
    background-color 0.3s,
    color 0.3s;
  cursor: pointer;
  font-family: 'Jost', sans-serif;
  font-size: 16px;

  @media (max-width: 650px) {
    width: 28px;
    height: 36px;
  }
`;

export const ProfileLink = styled(Link)`
  display: flex;
  justify-content: center;
  color: ${primaryTextColor};
  border-radius: 35px;
  align-items: center;
  text-decoration: none;
  min-width: 160px;
  height: 40px;
  transition:
    background-color 0.3s,
    color 0.3s;

  &:hover {
    background-color: ${activeMenuLinkBackground};
    color: ${activeMenuLinkColor};
  }

  @media (max-width: 1000px) {
    min-width: 130px;
  }

  @media (max-width: 768px) {
    min-width: 115px;
  }

  @media (max-width: 650px) {
    display: none;
  }
`;

export const LogOutSvg = styled.img`
  cursor: pointer;

  @media (max-width: 650px) {
    display: none;
  }
`;

export const HeaderItemsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding-right: 20px;

  @media (max-width: 1000px) {
    gap: 10px;
  }
`;
