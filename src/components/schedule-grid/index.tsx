import React from 'react'
import { ScheduleGridElement, Week, Day, Dates, ChooseWeek, Date, Whitespace } from './styles'
import ScheduleCell from '../schedule-cell'
import LeftArrow from '../../assets/svg/LeftArrow'
import RightArrow from '../../assets/svg/RightArrow'

const ScheduleGrid = (): JSX.Element => {
  // Тестовые данные
  const dataCell = {
    number: '1',
    time: '09:00-10:30',
    typeActivity: 'Практические занятия',
    name: 'Физическая культура_ОГСЭ',
    placeActivity: 'Корпус "Спорт" (Основной)',
    teacher: 'Зенцов А. С., Соснин Н. А.'
  }
  const dataDates = [1, 2, 3, 4, 5, 6]
  const dataWeek = {
    month: 'Сентябрь',
    year: '2023',
    week: '38'
  }

  const rows = Array.from({ length: 6 }, (_, rowIndex) => (
            <div key={rowIndex} className="row">
                {Array.from({ length: 7 }, (_, colIndex) => (
                    <ScheduleCell data={dataCell} key={colIndex}></ScheduleCell>
                ))}
            </div>
  ))

  const dates = (data): any => (
    data.map((item, index) => (
                <Date key={index}>{item}</Date>
    ))
  )

  return (
            <>
                <ChooseWeek>
                    <LeftArrow/>
                    <Whitespace/>
                    <RightArrow/>
                    <Whitespace/>
                    {dataWeek.month} {dataWeek.year} ({dataWeek.week} неделя)
                </ChooseWeek>
                <Week>
                    <Day>ПН</Day>
                    <Day>ВТ</Day>
                    <Day>СР</Day>
                    <Day>ЧТ</Day>
                    <Day>ПТ</Day>
                    <Day>СБ</Day>
                </Week>
                <Dates>{dates(dataDates)}</Dates>
                <ScheduleGridElement>
                    {rows}
                </ScheduleGridElement>
            </>
  )
}

export default ScheduleGrid
