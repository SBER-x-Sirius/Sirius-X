import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import ScheduleGrid from '../../components/schedule-grid';
import configureStore from 'redux-mock-store';
import { mockDataSchedule } from '../../__mocks__/schedule-mock-data';
import '@testing-library/jest-dom';

const mockStore = configureStore([]);

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => key,
    i18n: { language: 'en' }
  })
}));

jest.mock('../../__data__/services/api/schedule/schedule.api', () => ({
  useGetWeeklyScheduleQuery: jest.fn()
}));

describe('ScheduleGrid component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      filters: { classTypeFilter: [], inputFilterGroup: 'K025-1', inputFilterTeacher: '' },
      dispatch: () => {}
    });
  });

  test('renders without errors', () => {
    jest
      .spyOn(require('../../__data__/services/api/schedule/schedule.api'), 'useGetWeeklyScheduleQuery')
      .mockReturnValue({ data: mockDataSchedule, isFetching: false, error: null });

    const { container} = render(
      <Provider store={store}>
        <ScheduleGrid />
      </Provider>
    );

    expect(container).toBeInTheDocument();
  });

  test('renders error message', () => {
    jest
      .spyOn(require('../../__data__/services/api/schedule/schedule.api'), 'useGetWeeklyScheduleQuery')
      .mockReturnValue({ data: null, isFetching: false, error: 'Fetch error' });

    render(
      <Provider store={store}>
        <ScheduleGrid />
      </Provider>
    );

    expect(screen.getByText('schedule:scheduleTranslation.scheduleGrid.error')).toBeInTheDocument();
  });

  test('handles click on prev/next week buttons', async () => {
    jest
      .spyOn(require('../../__data__/services/api/schedule/schedule.api'), 'useGetWeeklyScheduleQuery')
      .mockReturnValue({ data: mockDataSchedule, isFetching: false, error: null });

    render(
      <Provider store={store}>
        <ScheduleGrid />
      </Provider>
    );

    fireEvent.click(screen.getByAltText('schedule:scheduleTranslation.scheduleGrid.forwardIcon'));

    await waitFor(() => {
      expect(
        screen.getByText((content) => content.startsWith('schedule:scheduleTranslation.months.Январь'))
      ).toBeInTheDocument();
    });
  });
});
