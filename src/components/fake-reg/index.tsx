import React, { useState } from 'react';

type Fields = {
  firstName?: string;
  midlleName?: string;
  lastName?: string;
  email?: string;
  password?: string;
};

type FakeRegProps = {
  projectTitle: 'attendance' | 'main' | 'schedule' | 'atatistics';
};

export const FakeReg = (projectTitle: FakeRegProps) => {
  const [fields, setFields] = useState<Fields>({
    firstName: '',
    midlleName: '',
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
    <>
      <form style={{ display: 'flex', flexDirection: 'column' }}>
        {Object.keys(fields).map((field) => (
          <div key={field} style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor={field}>{field}</label>
            <input
              id={field}
              type={field === 'password' ? 'password' : 'text'}
              autoComplete='off'
              value={fields[field]}
              onChange={(e) => handleFieldChange(field.toString() as keyof Fields, e.target.value)}
            />
          </div>
        ))}
        <button onClick={handleSubmit} type='button'>
          Submit
        </button>
      </form>
    </>
  );
};
