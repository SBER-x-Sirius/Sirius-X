import React, {useState, useEffect} from 'react';
import { useTranslation } from 'react-i18next';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { useGetStudentsByCourseQuery } from '../../../__data__/services/api/statistics';
import {
  CourseButton,TableContainer, 
  Header, HeaderBlock, 
  ButtonsBlock, StyledGrid
} from './styles';

const calculateLackCount = (passList) => {
  const lacks = passList.map((pass) => pass.lack);
  const nCount = lacks.join('').split('n').length - 1;
  return nCount;
};

const calculateAverage = (grades) => {
  const numbers = grades.map((grade) => grade.number);
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  const average = numbers.length > 0 ? sum / numbers.length : 0;
  return average.toFixed(2);
};

const StudentsTableBlock: React.FC = (): JSX.Element => {
  const { t } = useTranslation();
  const [activeCourse, setActiveCourse] = useState(1);
  const [rowData, setRowData] = useState([]);
  const { data: studentsData, isLoading, isError } = useGetStudentsByCourseQuery(activeCourse);

  useEffect(() => {
    if (studentsData) {
      const updatedData = studentsData.message.map((student) => ({
        ...student,
        passList: calculateLackCount(student.passList),
        grades: calculateAverage(student.grades),
      }));
      setRowData(updatedData);
    }
  }, [studentsData]);


  const [columnDefs] = useState([
    { headerName: 'Личность', field: 'firstname', lockPosition: true, width: 280 },
    { headerName: 'Количество пропусков', field: 'passList', lockPosition: true },
    { headerName: 'Оценка', field: 'grades', lockPosition: true },
    { headerName: 'Стипендия', field: 'scholarship', lockPosition: true },
    { headerName: 'Бюджет/платка', field: 'formOfTraining', lockPosition: true }
  ]);

  return (
    <TableContainer>
      <HeaderBlock>
        <Header>{t('statistics:statisticsTranslation.studentsTable.header')}</Header>
      </HeaderBlock>
      <ButtonsBlock>
        {[1, 2, 3].map((course) => (
          <CourseButton key={course} onClick={() => setActiveCourse(course)}>
            {course} {t('statistics:statisticsTranslation.studentsTable.course')}
          </CourseButton>
        ))}
      </ButtonsBlock>
      <div className='ag-theme-alpine' style={{ height: 400, width: 'auto', marginTop: '20px' }}>
        <StyledGrid rowData={rowData} columnDefs={columnDefs}></StyledGrid>
      </div>
    </TableContainer>
  );
};

export default StudentsTableBlock;
