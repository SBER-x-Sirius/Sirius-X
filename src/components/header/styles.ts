import styled from 'styled-components';
import { Link } from 'react-router-dom';

type MenuLinkProps = {
  active: boolean;
}

export const ContainerHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1536px;
  padding: 0 22px 0 7px;
  margin: 28px auto 0;
  height: 50px;
  border: 1px solid rgba(0, 0, 0, 1);
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
  color: rgba(52, 63, 66, 1);
  border-radius: 35px;
  align-items: center;
  text-decoration: none;
  min-width: 160px;
  height: 40px;
  background-color: ${props => props.active ? 'rgba(151, 171, 224, 1)' : 'transparent' };
  color: ${props => props.active ? 'white' : 'rgba(52, 63, 66, 1)' };
`

export const LocalizeWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 3px;
  gap: 5px;
  border-radius: 35px;
  min-width: 60px;
  min-height: 24px;
  background: rgba(244, 244, 249, 1);
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
  color: rgba(52, 63, 66, 1);
  background-color: ${props => props.active ? 'rgba(151, 171, 224, 1)' : 'transparent'};
`

export const ProfileLink = styled(Link)`
  display: flex;
  justify-content: center;
  color: rgba(52, 63, 66, 1);
  border-radius: 35px;
  align-items: center;
  text-decoration: none;
  min-width: 160px;
  height: 40px;

  &:hover {
    background-color: rgba(151, 171, 224, 1);
    color: rgba(255, 255, 255, 1);
  }
`
export const HeaderItemsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`
