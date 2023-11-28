import { getNavigationsValue } from '@ijl/cli';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../../__data__/services/api/attendance/auth';
import { LoginData } from '../../__data__/services/api/attendance/auth/types';

type FakeRegProps = {
  projectTitle: 'attendance' | 'main' | 'schedule' | 'atatistics';
};

export const FakeLogin = (projectTitle: FakeRegProps) => {
  const navigate = useNavigate();
  const [attendanceLogin, { data, error: attendanceLoginSuccess }] = useLoginMutation();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const hendlerEmail = (email: string) => {
    setEmail(email);
  };

  const hendlerPassword = (password: string) => {
    setPassword(password);
  };

  const handleSubmit = async () => {
    switch (projectTitle.projectTitle) {
      case 'attendance':
        await attendanceLogin({ email, password } as LoginData);
        if (!attendanceLoginSuccess) {
          navigate(getNavigationsValue('sirius-x.attendance'), { replace: true });
        }

        break;
      case 'main':
        // тут прописываем вызов нужных запросов

        break;
      case 'schedule':
        // тут прописываем вызов нужных запросов

        break;
      case 'atatistics':
        // тут прописываем вызов нужных запросов

        break;

      default:
        break;
    }
  };

  return (
    <form style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label htmlFor='email'>email</label>
        <input id='email' type='text' autoComplete='off' value={email} onChange={(e) => hendlerEmail(e.target.value)} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label htmlFor='password'>password</label>
        <input
          id='password'
          type='password'
          autoComplete='off'
          value={password}
          onChange={(e) => hendlerPassword(e.target.value)}
        />
      </div>
      <button onClick={handleSubmit} type='button'>
        Submit
      </button>
    </form>
  );
};
