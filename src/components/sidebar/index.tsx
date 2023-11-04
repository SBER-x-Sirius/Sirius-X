import React, { useEffect, useState } from 'react';
import { SidebarElement, SidebarMenu, Button, SidebarFocus } from './styles';
import { useTranslation } from 'react-i18next';
import SidebarButton from '../../assets/svg/SidebarButton.svg';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { getNavigationsValue } from '@ijl/cli';

type MenuItem = {
  alt: string;
  endpoint: string;
  key: string;
  src: string;
  title: string;
  url: string;
};

const Sidebar: React.FC = (): JSX.Element => {
  const { t } = useTranslation();
  const location = useLocation();

  const [activeLink, setActiveLink] = useState<string>('');

  useEffect(() => {
    const currentURL = location.pathname;
    const urlParts = currentURL.split('/');
    setActiveLink(urlParts[urlParts.length - 1]);
  }, [location.pathname]);

  const menu: MenuItem[] = [
    {
      alt: t('attendance:attendanceTranslation.sidebar.newMeeting.alt'),
      endpoint: 'new-meeting',
      title: t('attendance:attendanceTranslation.sidebar.newMeeting.title'),
      src: SidebarButton,
      key: 'create_meeting',
      url: 'sirius-x.attendance.new-meeting'
    },
    {
      alt: t('attendance:attendanceTranslation.sidebar.accession.alt'),
      endpoint: 'accession',
      title: t('attendance:attendanceTranslation.sidebar.accession.title'),
      src: SidebarButton,
      key: 'connect',
      url: 'sirius-x.attendance.accession'
    },
    {
      alt: t('attendance:attendanceTranslation.sidebar.getUsers.alt'),
      endpoint: 'users',
      title: t('attendance:attendanceTranslation.sidebar.getUsers.title'),
      src: SidebarButton,
      key: 'user_list',
      url: 'sirius-x.attendance.users'
    }
  ];

  return (
    <>
      <SidebarMenu>
        {menu.map((item) => (
          <SidebarElement key={item.key}>
            <Link to={getNavigationsValue(item.url)}>
              <SidebarFocus active={activeLink == item.endpoint}>
                <Button src={item.src} alt={item.alt} title={item.title} />
              </SidebarFocus>
            </Link>
          </SidebarElement>
        ))}
      </SidebarMenu>
    </>
  );
};

export default Sidebar;
