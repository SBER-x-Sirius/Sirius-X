import React from 'react';
import { ContainerHeader } from './styles';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <ContainerHeader>
      <Link to='/schedule'><h1>Schedule</h1></Link>
    </ContainerHeader>
  );
};

export default Header;
