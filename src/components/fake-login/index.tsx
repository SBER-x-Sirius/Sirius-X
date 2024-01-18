import { getNavigationsValue } from '@ijl/cli';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../../__data__/services/api/attendance/auth';
import { LoginData } from '../../__data__/services/api/attendance/auth/types';
import { MeetingInput } from '../../pages/attendance/accession/style';
import { AuthFieldContainer, AuthFieldTitle, AuthFormContainer, AuthSubmitButton } from '../../styles/attendance/auth';

export const FakeLogin = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [attendanceLogin, { error: attendanceLoginSuccess }] = useLoginMutation();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const hendlerEmail = (email: string) => {
    setEmail(email);
  };

  const hendlerPassword = (password: string) => {
    setPassword(password);
  };

  const handleSubmit = async () => {
    await attendanceLogin({ email, password } as LoginData);
    if (!attendanceLoginSuccess) {
      navigate(getNavigationsValue('sirius-x.attendance'), { replace: true });
    }
  };

  return (
    <AuthFormContainer>
      <AuthFieldContainer style={{ marginTop: '6%', marginBottom: '4%' }}>
        <AuthFieldTitle htmlFor='email'>{t('attendance:attendanceTranslation.login-form.email.title')}</AuthFieldTitle>
        <MeetingInput
          id='email'
          type='text'
          autoComplete='off'
          placeholder={t('attendance:attendanceTranslation.login-form.email.placeholder')}
          value={email}
          onChange={(e) => hendlerEmail(e.target.value)}
        />
      </AuthFieldContainer>
      <AuthFieldContainer
        style={{
          marginBottom: '24%'
        }}
      >
        <AuthFieldTitle htmlFor='password'>
          {t('attendance:attendanceTranslation.login-form.password.title')}
        </AuthFieldTitle>
        <MeetingInput
          id='password'
          type='password'
          autoComplete='off'
          placeholder={t('attendance:attendanceTranslation.login-form.password.placeholder')}
          value={password}
          onChange={(e) => hendlerPassword(e.target.value)}
        />
      </AuthFieldContainer>
      <AuthSubmitButton onClick={handleSubmit} type='button'>
        {t('attendance:attendanceTranslation.login-form.button.title')}
      </AuthSubmitButton>
      <Link to={getNavigationsValue('sirius-x.attendance.auth.registration')} style={{ color: '#fff' }}>
        {t('attendance:attendanceTranslation.login-form.link.title')}
      </Link>
    </AuthFormContainer>
  );
};
