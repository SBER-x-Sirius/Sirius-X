import React, { ReactNode } from 'react';
import { FormWrapper } from './styles';

const BaseForm: React.FC = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <>
      <FormWrapper>{children}</FormWrapper>
    </>
  );
};

export default BaseForm as React.FC<{ children: ReactNode }>;
