import React, {useState} from 'react';
import { useTranslation } from 'react-i18next';
import {
  StudentsTable, TableHead,
  TableRow, TableHeader,
  TableBody, CourseButton,
  TableContainer, TableData,
  DataButton, Header,
  HeaderBlock, ButtonsBlock,
  TableBlock
} from './styles';

const StudentsTableBlock: React.FC = (): JSX.Element => {
  const [activeCourse, setActiveCourse] = useState(1);

  const showCourse = (course) => {
    setActiveCourse(course);
  };

  const studentData = [
    {
      course: 1,
      students: [
        { studentName: 'Студент 1', rating: '4.5', attendance: '90%', scholarship: 'Да', paid: 'Бюджет' },
        { studentName: 'Студент 2', rating: '3.2', attendance: '80%', scholarship: 'Нет', paid: 'Бюджет' },
        { studentName: 'Студент 3', rating: '4.8', attendance: '95%', scholarship: 'Нет', paid: 'Платка' },
        { studentName: 'Студент 1', rating: '4.5', attendance: '90%', scholarship: 'Да', paid: 'Бюджет' },
        { studentName: 'Студент 2', rating: '3.2', attendance: '80%', scholarship: 'Нет', paid: 'Бюджет' },
        { studentName: 'Студент 3', rating: '4.8', attendance: '95%', scholarship: 'Нет', paid: 'Платка' }
      ]
    },
    {
      course: 2,
      students: [
        { studentName: 'Студент 4', rating: '3.9', attendance: '75%', scholarship: 'Да', paid: 'Бюджет' },
        { studentName: 'Студент 5', rating: '4.1', attendance: '85%', scholarship: 'Да', paid: 'Бюджет' },
      ]
    },
    {
      course: 3,
      students: [
        { studentName: 'Студент 6', rating: '4.7', attendance: '92%', scholarship: 'Да', paid: 'Бюджет' },
        { studentName: 'Студент 7', rating: '3.8', attendance: '78%', scholarship: 'Да', paid: 'Бюджет' },
      ]
    }
  ];

  return (
      <TableContainer>
          <HeaderBlock>
              <Header>Статистика по каждому студенту</Header>
              <DataButton>Сентябрь 2020</DataButton>
          </HeaderBlock>
          <ButtonsBlock>
            {[1, 2, 3].map((course) => (
                <CourseButton
                  key={course}
                  onClick={() => showCourse(course)}
                >
                {course} курс
                </CourseButton>
               ))}
          </ButtonsBlock>
          <TableBlock>
              <StudentsTable>
                     <TableHead>
                     <TableRow>
                            <TableHeader>Личность</TableHeader>
                            <TableHeader>Посещаемость</TableHeader>
                            <TableHeader>Оценка</TableHeader>
                            <TableHeader>Стипендия</TableHeader>
                            <TableHeader>Бюджет/платка</TableHeader>
                     </TableRow>
                     </TableHead>
                     <TableBody>
                       {studentData.map(({course, students}) => (
                         activeCourse === course &&
                         students.map(({studentName, attendance, rating, 
                            scholarship, paid}) => (
                                <TableRow>
                                    <TableData>{studentName}</TableData>
                                    <TableData>{attendance}</TableData>
                                    <TableData>{rating}</TableData>
                                    <TableData>{scholarship}</TableData>
                                    <TableData>{paid}</TableData>
                                </TableRow>
                            ))
                       ))}
                     </TableBody>
              </StudentsTable>
          </TableBlock>
      </TableContainer>
  );
};

export default StudentsTableBlock;