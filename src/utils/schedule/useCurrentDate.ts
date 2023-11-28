import { useMemo } from 'react';

type CurrentDate = {
  day: string;
  date: number;
  week: string[];
};

const russianDays = {
  пнд: 'ПН',
  втр: 'ВТ',
  срд: 'СР',
  чтв: 'ЧТ',
  птн: 'ПТ',
  суб: 'СБ',
  вск: 'ВС'
};

const getRussianDay = (date: Date): string => {
  const daysOfWeek = ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'суб'];
  const dayOfWeek = daysOfWeek[date.getDay()];
  return russianDays[dayOfWeek];
};

const useCurrentDate = (data): CurrentDate => {
  const currentDate = new Date();

  const handleGetWeek = useMemo((): string[] => {
    const week = [];
    for (const dayKey in data) {
      week.push(data[dayKey].date);
    }
    return week;
  }, [data]);

  const day = getRussianDay(currentDate);
  const date = currentDate.getDate();

  return {
    day,
    date,
    week: handleGetWeek
  };
};

export default useCurrentDate;
