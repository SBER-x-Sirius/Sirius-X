import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ScheduleContent from '../../components/schedule-grid/schedule-content';
import { Schedule } from '../../__data__/services/api/schedule/types';
import { mockDataSchedule } from '../../__mocks__/schedule-mock-data';
import '@testing-library/jest-dom';

const mockStore = configureStore([]);

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => key,
    i18n: { language: 'en' }
  })
}));

describe('ScheduleContent component', () => {
  let store;

  test('renders without errors', () => {
    store = mockStore({
      filters: { classTypeFilter: [], inputFilterGroup: '', inputFilterTeacher: '' },
      dispatch: () => {}
    });

    const { container} = render(
      <Provider store={store}>
        <ScheduleContent data={mockDataSchedule} />
      </Provider>
    );

    expect(container).toBeInTheDocument();
  });

  test('renders "No Classes" when there are no lessons for a day', () => {
    const store = mockStore({
      filters: { classTypeFilter: [], inputFilterGroup: '', inputFilterTeacher: '' },
      dispatch: () => {}
    });

    render(
      <Provider store={store}>
        <ScheduleContent
          data={
            {
              '1': {
                date: '8',
                day: 'ПН',
                lessons: []
              }
            } as Schedule
          }
        />
      </Provider>
    );

    expect(screen.getByText('schedule:scheduleTranslation.scheduleGrid.noClasses')).toBeInTheDocument();
  });

  test('renders "No Matches" when filters do not match any lessons', () => {
    const store = mockStore({
      filters: { classTypeFilter: ['Лекции'], inputFilterGroup: '', inputFilterTeacher: '' },
      dispatch: () => {}
    });

    render(
      <Provider store={store}>
        <ScheduleContent data={mockDataSchedule} />
      </Provider>
    );

    expect(screen.getByText('schedule:scheduleTranslation.scheduleGrid.noMatches')).toBeInTheDocument();
  });

  test('renders with inputFilterGroup', () => {
    store = mockStore({
      filters: { classTypeFilter: [], inputFilterGroup: 'K025-1', inputFilterTeacher: '' },
      dispatch: () => {}
    });

    render(
      <Provider store={store}>
        <ScheduleContent data={mockDataSchedule} />
      </Provider>
    );

    expect(screen.getByText('Математика (Семинар)')).toBeInTheDocument();
    expect(screen.getByText('Иванов Иван Сергеевич')).toBeInTheDocument();
    expect(screen.getByText('10:45-12:15')).toBeInTheDocument();
  });
});
