import { getNavigationsValue } from '@ijl/cli';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import SidebarButton from '../../assets/svg/SidebarButton.svg';
import { useUserInfo } from '../../hooks/attendance/user-info';
import { Button, SidebarElement, SidebarFocus, SidebarMenu } from './styles';

type MenuItem = {
  alt: string;
  endpoint: string;
  key: string;
  src: string;
  title: string;
};

const Sidebar: React.FC = (): JSX.Element => {
  const staticPath = 'sirius-x.attendance.';
  const { t } = useTranslation();
  const location = useLocation();
  const { isStudent, isTeacher } = useUserInfo();
  const [activeLink, setActiveLink] = useState<string>('');

  useEffect(() => {
    const urlParts = location.pathname.split('/');
    setActiveLink(urlParts[urlParts.length - 1]);
  }, [location.pathname]);

  const menu: MenuItem[] = [
    {
      alt: t('attendance:attendanceTranslation.sidebar.new-meeting.alt'),
      endpoint: 'new-meeting',
      title: t('attendance:attendanceTranslation.sidebar.new-meeting.title'),
      src: SidebarButton,
      key: 'create_meeting'
    },
    {
      alt: t('attendance:attendanceTranslation.sidebar.accession.alt'),
      endpoint: 'accession',
      title: t('attendance:attendanceTranslation.sidebar.accession.title'),
      src: SidebarButton,
      key: 'connect'
    },
    {
      alt: t('attendance:attendanceTranslation.sidebar.users.alt'),
      endpoint: 'users',
      title: t('attendance:attendanceTranslation.sidebar.users.title'),
      src: SidebarButton,
      key: 'user_list'
    }
  ];

  return (
    <>
      {!isStudent && (
        <SidebarMenu>
          {menu.slice(0, isTeacher() ? menu.length - 1 : menu.length).map((item) => (
            <SidebarElement key={item.key}>
              <Link to={getNavigationsValue(staticPath + item.endpoint)}>
                <SidebarFocus active={activeLink == item.endpoint}>
                  <Button src={item.src} alt={item.alt} title={item.title} />
                </SidebarFocus>
              </Link>
            </SidebarElement>
          ))}
        </SidebarMenu>
      )}
    </>
  );
};

export default Sidebar;
