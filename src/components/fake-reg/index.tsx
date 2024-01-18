import { getNavigationsValue } from '@ijl/cli';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useRegistrationMutation } from '../../__data__/services/api/attendance/auth';
import { RegistrationData } from '../../__data__/services/api/attendance/auth/types';
import { MeetingInput } from '../../pages/attendance/accession/style';
import { AuthFieldContainer, AuthFieldTitle, AuthFormContainer, AuthSubmitButton } from '../../styles/attendance/auth';
import { useTranslation } from 'react-i18next';

type Fields = {
  firstName?: string;
  middleName?: string;
  lastName?: string;
  email?: string;
  password?: string;
};

export const FakeReg = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [attendanceRegistration, { error: attendanceRegistrationSuccess }] = useRegistrationMutation();
  const [fields, setFields] = useState<Fields>({
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const handleFieldChange = (field: keyof Fields, value: string) => {
    setFields((prevFields) => ({
      ...prevFields,
      [field]: value
    }));
  };

  const handleSubmit = async () => {
    await attendanceRegistration(fields as RegistrationData);
    if (!attendanceRegistrationSuccess) {
      navigate(getNavigationsValue('sirius-x.attendance'), { replace: true });
    }
  };

  return (
    <>
      <AuthFormContainer>
        {Object.keys(fields).map((field) => (
          <AuthFieldContainer key={field} style={{ marginBottom: '6%' }}>
            <AuthFieldTitle htmlFor={field} style={{ marginBottom: '4%' }}>
              {t(`attendance:attendanceTranslation.registration-form.${field}.title`)}
            </AuthFieldTitle>
            <MeetingInput
              id={field}
              type='text'
              autoComplete='off'
              placeholder={t(`attendance:attendanceTranslation.registration-form.${field}.placeholder`)}
              value={fields[field]}
              onChange={(e) => handleFieldChange(field.toString() as keyof Fields, e.target.value)}
            />
          </AuthFieldContainer>
        ))}
        <AuthSubmitButton onClick={handleSubmit} type='button'>
          {t('attendance:attendanceTranslation.registration-form.button.title')}
        </AuthSubmitButton>
        <Link to={getNavigationsValue('sirius-x.attendance.auth.login')} style={{ color: '#fff' }}>
          {t('attendance:attendanceTranslation.registration-form.link.title')}
        </Link>
      </AuthFormContainer>
    </>
  );
};
