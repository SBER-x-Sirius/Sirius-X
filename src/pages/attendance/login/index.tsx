

export const Login: React.FC = (): JSX.Element => {
  return (
    <div
      id='login-container'
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}
    >
      <FakeLogin projectTitle={'attendance'} />
    </div>
  );
};

import React from 'react';
import { FakeLogin } from '../../../components/fake-login';