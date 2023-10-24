import React from 'react';
import BaseForm from '../../../components/form';
import { SessionFormContent, SessionInput, SessionButton } from './style';
import { useTranslation } from 'react-i18next';
import Sidebar from '../../../components/sidebar';

const Accession: React.FC = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <>
      <Sidebar />
      <BaseForm>
        <SessionFormContent>
          <SessionInput type='text' placeholder={t('attendance:attendanceTranslation.sessionForm.inputPlaceholder')} />
          <SessionButton>{t('attendance:attendanceTranslation.sessionForm.btnText')}</SessionButton>
        </SessionFormContent>
      </BaseForm>
    </>
  );
};

export default Accession;
