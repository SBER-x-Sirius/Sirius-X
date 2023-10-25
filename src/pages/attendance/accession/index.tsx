import React from 'react';
import { useTranslation } from 'react-i18next';
import Sidebar from '../../../components/sidebar';
import BaseForm from '../../../components/form';
import { AttendanceWrapper } from '../style';
import { SessionButton, SessionFormContent, SessionInput } from './style';

const Accession: React.FC = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <AttendanceWrapper>
      <Sidebar />
      <BaseForm>
        <SessionFormContent>
          <SessionInput type='text' placeholder={t('attendance:attendanceTranslation.sessionForm.inputPlaceholder')} />
          <SessionButton>{t('attendance:attendanceTranslation.sessionForm.btnText')}</SessionButton>
        </SessionFormContent>
      </BaseForm>
    </AttendanceWrapper>
  );
};

export default Accession;
