describe('template spec', () => {
  it('Расписание', () => {
    cy.visit('http://localhost:8099/sirius-x/schedule');
    cy.contains('ru').click();
    cy.contains('Расписание');
    cy.contains('Посещаемость');
    cy.contains('Успеваемость');
    cy.contains('Группа');
    cy.contains('Преподаватель');
    cy.contains('Преподаватель').click();
    cy.get('input[placeholder="Выберите преподавателя..."]');
    cy.contains('Группа').click();
    cy.get('input[placeholder="Выберите группу..."]');
    cy.get('img[alt="Назад"]');
    cy.get('img[alt="Вперед"]');
    cy.contains('Январь 2024 (3 неделя)');
    cy.contains('Отображать события:');
    cy.get('input[id="lectures"').click();
    cy.get('input[id="seminars"]').click();
    cy.get('input[id="practicals"]').click();
    cy.get('input[id="labs"]').click();
    cy.get('input[id="exams"]').click();
    cy.get('input[id="other"]').click();
  })
})
