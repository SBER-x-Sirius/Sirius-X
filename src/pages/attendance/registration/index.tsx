import React from 'react';
import { FakeReg } from '../../../components/fake-reg';

export const Registration: React.FC = (): JSX.Element => {
  return (
    <div
      id='registration-container'
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}
    >
      <FakeReg />
    </div>
  );
};
