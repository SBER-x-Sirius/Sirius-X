import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

interface CurrentDate {
  day: string;
  date: string;
}

const russianDays = {
  пнд: 'ПН',
  втр: 'ВТ',
  срд: 'СР',
  чтв: 'ЧТ',
  птн: 'ПТ',
  суб: 'СБ',
  вск: 'ВС'
};

const useCurrentDate = (): CurrentDate => {
  const currentDate = new Date();

  const formattedDay = format(currentDate, 'EEE', { locale: ru });

  return {
    day: russianDays[formattedDay],
    date: format(currentDate, 'dd')
  };
};

export default useCurrentDate;
