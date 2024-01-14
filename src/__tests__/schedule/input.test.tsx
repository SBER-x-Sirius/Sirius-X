import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import Input from '../../components/input';
import { tabs } from '../../components/filter-block';
import '@testing-library/jest-dom';

const mockStore = configureStore([]);

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key })
}));

jest.mock('../../__data__/services/api/schedule/user.api', () => ({
  useGetTeacherOrGroupQuery: jest.fn()
}));

describe('Input component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      apiUser: {
        data: [],
        isLoading: false,
        error: null
      },
      filters: {
        inputFilter: {
          inputValue: '',
          isTeacher: false
        }
      }
    });
  });

  test('renders Input component', () => {
    jest
      .spyOn(require('../../__data__/services/api/schedule/user.api'), 'useGetTeacherOrGroupQuery')
      .mockReturnValue({ data: [], isFetching: false, error: null });

    const { container } = render(
      <Provider store={store}>
        <Input activeTab='schedule:scheduleTranslation.filterBlock.typesTab.teacher' tabs={tabs} />
      </Provider>
    );

    expect(container).toBeInTheDocument();
  });

  test('handles input change and dispatches actions correctly', async () => {
    jest.spyOn(require('../../__data__/services/api/schedule/user.api'), 'useGetTeacherOrGroupQuery').mockReturnValue({
      data: [{ id: 1, name: 'John', lastName: 'Doe', surName: 'Smith' }],
      isFetching: false,
      error: null
    });

    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <Input activeTab='schedule:scheduleTranslation.filterBlock.typesTab.teacher' tabs={tabs} />
      </Provider>
    );

    const input = getByPlaceholderText('schedule:scheduleTranslation.filterBlock.search.teacher');
    fireEvent.change(input, { target: { value: 'John Doe' } });

    await waitFor(() => {
      const actions = store.getActions();

      const expectedPayload = {
        type: 'scheduleFilters/setClearInput',
        payload: undefined
      };

      expect(actions).toEqual([expectedPayload]);
    });
  });

  test('handles input change and dispatches actions correctly for group', async () => {
    jest
      .spyOn(require('../../__data__/services/api/schedule/user.api'), 'useGetTeacherOrGroupQuery')
      .mockReturnValue({ data: [{ id: 1, name: 'GroupA' }], isFetching: false, error: null });

    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <Input activeTab='schedule:scheduleTranslation.filterBlock.typesTab.group' tabs={tabs} />
      </Provider>
    );

    fireEvent.change(getByPlaceholderText('schedule:scheduleTranslation.filterBlock.search.group'), {
      target: { value: 'GroupA' }
    });

    await waitFor(() => {
      const actions = store.getActions();

      const expectedClearPayload = {
        type: 'scheduleFilters/setClearInput',
        payload: undefined
      };

      expect(actions).toEqual([expectedClearPayload]);
    });
  });
});
