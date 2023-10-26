import React, { useState } from 'react';

type FakeRegProps = {
  projectTitle: 'attendance' | 'main' | 'schedule' | 'atatistics';
};

export const FakeLogin = (projectTitle: FakeRegProps) => {
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const hendlerLogin = (login: string) => {
    setLogin(login);
  };

  const hendlerPassword = (password: string) => {
    setPassword(password);
  };

  const handleSubmit = () => {
    switch (projectTitle.projectTitle) {
      case 'attendance':
        // тут прописываем вызов нужных запросов

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
        <label htmlFor='login'>login</label>
        <input id='login' type='text' autoComplete='off' value={login} onChange={(e) => hendlerLogin(e.target.value)} />
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
