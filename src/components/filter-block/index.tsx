import React, { useState } from 'react'
import { CheckboxContainer, CheckboxInput, FilterContainer, FilterSwitchContainer, FilterSwitchItems } from './styles'

export const FilterBlock = () => {
  const checkboxes = [
    { id: 'lectures', label: 'Лекции', color: '#1CB87F' },
    { id: 'seminars', label: 'Семинары', color: '#EAB308' },
    { id: 'practicals', label: 'Практ.занятия', color: '#38BDF8' },
    { id: 'labs', label: 'Лаб.занятия', color: '#818CF8' },
    { id: 'exams', label: 'Экзамены(зачеты)', color: '#FF4848' },
    { id: 'other', label: 'Прочее', color: '#312E81' }
  ]

  const [activeTab, setActiveTab] = useState('Группа')

  const checkboxElements = checkboxes.map(checkbox => (
    <CheckboxInput key={checkbox.id} color={checkbox.color}>
      <input type="checkbox" id={checkbox.id} name={checkbox.id} />
      <label htmlFor={checkbox.id}>{checkbox.label}</label>
    </CheckboxInput>
  ))

  return (
    <FilterContainer>
      <FilterSwitchContainer>
        <FilterSwitchItems
          onClick={() => {
            setActiveTab('Группа')
          }}
          active={activeTab === 'Группа'}
        >
          Группа
        </FilterSwitchItems>
        <FilterSwitchItems
          onClick={() => {
            setActiveTab('Преподаватель')
          }}
          active={activeTab === 'Преподаватель'}
        >
          Преподаватель
        </FilterSwitchItems>
      </FilterSwitchContainer>

      <CheckboxContainer>
        <p>Отображать события:</p>
        {checkboxElements}
      </CheckboxContainer>
    </FilterContainer>
  )
}
