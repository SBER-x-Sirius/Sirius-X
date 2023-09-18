import React from 'react';
import { ContainerHeader } from './styles';
import { Link } from 'react-router-dom';
import { getNavigationsValue } from "@ijl/cli";

const Header = () => {
  return (
    <ContainerHeader>
      <Link to={getNavigationsValue('sirius-x.schedule')}><h1>Schedule</h1></Link>
    </ContainerHeader>
  );
};

export default Header;
