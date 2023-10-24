import styled from 'styled-components';

type SidebarFocusProps = {
  active?: boolean;
};

const activeBackground = '#97ABE0';

export const SidebarMenu = styled.ul`
  background-color: #605dc7;
  width: 60px;
  border-radius: 0 30px 30px 0;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 0;
  position: absolute;
  list-style-type: none;
  left: 30px;
  top: 50%;
  transform: translate(-50%, -50%);
  @media (max-width: 768px) {
    border-radius: 0 26px 26px 0;
    width: 40px;
    left: 20px;
  }
`;

export const SidebarElement = styled.li`
  padding-top: 20px;
  padding-bottom: 20px;
  @media (max-width: 768px) {
    padding-top: 30px;
    padding-bottom: 30px;
  }
`;

export const SidebarFocus = styled.div<SidebarFocusProps>`
  padding: 10px;
  margin: 0 10px;
  border-radius: 8px;
  background-color: ${(props) => (props.active ? activeBackground : '')};
  &:hover {
    background-color: ${activeBackground};
  }
  @media (max-width: 768px) {
    padding: 2px;
    margin: 0 2px;
  }
`;

export const Button = styled.img`
  list-style-type: none;
  width: 24px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 768px) {
    width: 20px;
  }
`;
