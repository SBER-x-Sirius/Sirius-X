interface WeekMonthYear {
  weekNumber: number;
  monthName: string;
  year: number;
}

const useWeekNumberMonthYear = (): WeekMonthYear => {
  const monthsInRussian = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь'
  ];

  const today = new Date();
  const year = today.getFullYear();
  const firstDayOfYear = new Date(year, 0, 1);
  const days = Math.floor((today.getTime() - firstDayOfYear.getTime()) / (24 * 60 * 60 * 1000));
  const weekNumber = Math.ceil((days + firstDayOfYear.getDay() + 1) / 7);
  const monthName = monthsInRussian[today.getMonth()];

  return { weekNumber, monthName, year };
};

export default useWeekNumberMonthYear;
