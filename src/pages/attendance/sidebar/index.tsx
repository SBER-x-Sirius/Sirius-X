import React, { FC } from 'react';
import { SidebarElement, SidebarMenu, Button } from './styles';
import menu from './data';

type MenuItem = {
  key: string;
  src: string;
  alt: string;
  title: string;
};

type SidebarProps = {
  menu: MenuItem[];
};

const Sidebar: FC<SidebarProps> = () => {
  return (
    <>
      <SidebarMenu>
        <SidebarElement>
          {menu.map((item) => (
            <Button key={item.key} src={item.src} alt={item.alt} title={item.title} />
          ))}
        </SidebarElement>
      </SidebarMenu>
    </>
  );
};

export default Sidebar;
