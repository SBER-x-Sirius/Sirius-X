import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import ScheduleCell from '../../components/schedule-cell';
import '@testing-library/jest-dom';
import { mockDataLesson } from '../../__mocks__/schedule-mock-data';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => key,
    i18n: { language: 'en' }
  })
}));

describe('ScheduleCell component', () => {
  test('renders correctly', async () => {
    render(<ScheduleCell data={mockDataLesson} />);

    await waitFor(() => {
      expect(screen.getByText('1')).toBeInTheDocument();
      expect(screen.getByText('09:00-10:30')).toBeInTheDocument();
      expect(screen.getByText('Математика (Семинар)')).toBeInTheDocument();
      expect(
        screen.getByText('ГМЦ, schedule:scheduleTranslation.scheduleGrid.audience K11')
      ).toBeInTheDocument();
      expect(screen.getByText('Иванов Иван Сергеевич')).toBeInTheDocument();
    });
  });
});
