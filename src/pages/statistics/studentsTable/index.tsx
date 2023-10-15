import React, {useState, useEffect} from 'react';
import { useTranslation } from 'react-i18next';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import {
  CourseButton,TableContainer, 
  DataButton, Header,
  HeaderBlock, ButtonsBlock,
  StyledGrid
} from './styles';

const StudentsTableBlock: React.FC = (): JSX.Element => {
  const { t } = useTranslation();
  const [activeCourse, setActiveCourse] = useState(1);
  const [rowData, setRowData] = useState([]);

  const updateRowData = () => {
    const students = studentData.find((data) => data.course === activeCourse).students;
    setRowData(students);
  };
  
  useEffect(() => {
    updateRowData();
  }, [activeCourse]);

  const studentData = [
    {
      course: 1,
      students: [
        { studentName: 'Студент 1', rating: '4.5', attendance: '90%', scholarship: 'Да', paid: 'Бюджет' },
        { studentName: 'Студент 2', rating: '3.2', attendance: '80%', scholarship: 'Нет', paid: 'Бюджет' },
        { studentName: 'Студент 3', rating: '4.8', attendance: '95%', scholarship: 'Нет', paid: 'Платка' },
        { studentName: 'Студент 1', rating: '4.5', attendance: '90%', scholarship: 'Да', paid: 'Бюджет' },
        { studentName: 'Студент 2', rating: '3.2', attendance: '80%', scholarship: 'Нет', paid: 'Бюджет' },
        { studentName: 'Студент 3', rating: '4.8', attendance: '95%', scholarship: 'Нет', paid: 'Платка' }, 
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

  const [columnDefs] = useState([
    { headerName: "Личность", field: 'studentName', lockPosition: true, width: 280 },
    { headerName: "Успеваемость", field: 'attendance', lockPosition: true},
    { headerName: "Оценка", field: 'rating', lockPosition: true},
    { headerName: "Стипендия", field: 'scholarship', lockPosition: true },
    { headerName: "Бюджет/платка", field: 'paid', lockPosition: true },
  ]);

  return (
      <TableContainer>
          <HeaderBlock>
              <Header>{t('statistics:statisticsTranslation.studentsTable.header')}</Header>
              <DataButton>{}</DataButton>
          </HeaderBlock>
          <ButtonsBlock>
            {[1, 2, 3].map((course) => (
                <CourseButton
                  key={course}
                  onClick={() => setActiveCourse(course)}
                >
                {course} {t('statistics:statisticsTranslation.studentsTable.course')}
                </CourseButton>
               ))}
          </ButtonsBlock>
          <div className="ag-theme-alpine" style={{ height: 400, width: 'auto', marginTop: '20px' }}>
            <StyledGrid 
              rowData={rowData} columnDefs={columnDefs}>
            </StyledGrid>
          </div>
      </TableContainer>
  );
};

export default StudentsTableBlock;