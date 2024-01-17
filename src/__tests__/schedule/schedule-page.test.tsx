import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Schedule } from '../../pages/schedule';
import configureStore from 'redux-mock-store';
import '@testing-library/jest-dom';
import { mockDataSchedule } from '../../__mocks__/schedule-mock-data';

const mockStore = configureStore([]);

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => key,
    i18n: { language: 'en' }
  })
}));

jest.mock('../../__data__/services/api/schedule/user.api', () => ({
  useGetTeacherOrGroupQuery: jest.fn()
}));

jest.mock('../../__data__/services/api/schedule/schedule.api', () => ({
  useGetWeeklyScheduleQuery: jest.fn()
}));

describe('Schedule page', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      apiUser: {
        data: [],
        isLoading: false,
        error: null
      },
      filters: { classTypeFilter: [], inputFilterGroup: '', inputFilterTeacher: '' },
      dispatch: () => {}
    });
  });

  test('renders without errors', () => {
    jest
      .spyOn(require('../../__data__/services/api/schedule/user.api'), 'useGetTeacherOrGroupQuery')
      .mockReturnValue({ data: [], isFetching: false, error: null });

    jest
      .spyOn(require('../../__data__/services/api/schedule/schedule.api'), 'useGetWeeklyScheduleQuery')
      .mockReturnValue({ data: mockDataSchedule, isFetching: false, error: null });

    render(
      <Provider store={store}>
        <Schedule />
      </Provider>
    );

    expect(screen.getByText('schedule:scheduleTranslation.filterBlock.typesTab.group')).toBeInTheDocument();
    expect(screen.getByText('schedule:scheduleTranslation.filterBlock.typesClass.lectures')).toBeInTheDocument();
  });
});
