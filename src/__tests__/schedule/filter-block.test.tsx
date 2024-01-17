import React from 'react';
import { render, fireEvent, getByPlaceholderText } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { checkboxes, FilterBlock } from '../../components/filter-block';
import '@testing-library/jest-dom';

const mockStore = configureStore([]);

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key })
}));

jest.mock('../../__data__/services/api/schedule/user.api', () => ({
  useGetTeacherOrGroupQuery: jest.fn()
}));

describe('FilterBlock component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      apiUser: {
        data: [],
        isLoading: false,
        error: null
      },
      filters: {
        classTypeFilter: []
      }
    });
  });

  test('renders without crashing', () => {
    jest
      .spyOn(require('../../__data__/services/api/schedule/user.api'), 'useGetTeacherOrGroupQuery')
      .mockReturnValue({ data: [], isFetching: false, error: null });

    const { container } = render(
      <Provider store={store}>
        <FilterBlock />
      </Provider>
    );

    expect(container).toBeInTheDocument();
  });

  test('renders checkboxes with labels', () => {
    jest
      .spyOn(require('../../__data__/services/api/schedule/user.api'), 'useGetTeacherOrGroupQuery')
      .mockReturnValue({ data: [], isFetching: false, error: null });

    const { getByLabelText } = render(
      <Provider store={store}>
        <FilterBlock />
      </Provider>
    );

    checkboxes.forEach((checkbox) => {
      const label = getByLabelText(`schedule:scheduleTranslation.filterBlock.typesClass.${checkbox.id}`);
      expect(label).toBeInTheDocument();
    });
  });

  test('switches between tabs', () => {
    jest
      .spyOn(require('../../__data__/services/api/schedule/user.api'), 'useGetTeacherOrGroupQuery')
      .mockReturnValue({ data: [], isFetching: false, error: null });

    const { getByText, getByPlaceholderText } = render(
      <Provider store={store}>
        <FilterBlock />
      </Provider>
    );

    fireEvent.click(getByText('schedule:scheduleTranslation.filterBlock.typesTab.teacher') as Element);
    expect(getByPlaceholderText('schedule:scheduleTranslation.filterBlock.search.teacher')).toBeInTheDocument();

    fireEvent.click(getByText('schedule:scheduleTranslation.filterBlock.typesTab.group') as Element);
    expect(getByPlaceholderText('schedule:scheduleTranslation.filterBlock.search.group')).toBeInTheDocument();
  });
});
