import { getNavigationsValue } from '@ijl/cli';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRegistrationMutation } from '../../__data__/services/api/attendance/auth';
import { RegistrationData } from '../../__data__/services/api/attendance/auth/types';

type Fields = {
  firstName?: string;
  middleName?: string;
  lastName?: string;
  email?: string;
  password?: string;
};

type FakeRegProps = {
  projectTitle: 'attendance' | 'main' | 'schedule' | 'atatistics';
};

export const FakeReg = (projectTitle: FakeRegProps) => {
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
    switch (projectTitle.projectTitle) {
      case 'attendance':
        await attendanceRegistration(fields as RegistrationData);
        if (!attendanceRegistrationSuccess) {
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
