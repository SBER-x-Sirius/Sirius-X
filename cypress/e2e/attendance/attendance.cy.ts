describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:8099/sirius-x/attendance');
    cy.contains('Расписание');
    cy.contains('Посещаемость');
    cy.contains('Успеваемость');
    cy.contains('Личный кабинет');
    cy.url().should('include', '/auth/login');

    cy.get('#email').type('admin');
    cy.get('#password').type('admin');
    cy.get('form > button').click();

    cy.url().should('include', '/attendance/accession');
    cy.contains('Подключиться');
    cy.get('input[placeholder="Введите код сессии"]');
    cy.get('img[alt="Создать встречу"]').click();

    cy.url().should('include', '/attendance/new-meeting');
    cy.contains('Создать новую встречу');
    cy.contains('Выберите группы');
    cy.contains('Добавьте других преподавателей');
    cy.get('img[alt="Список пользователей"]').click();

    cy.url().should('include', '/attendance/users');
    cy.contains('Поделиться');
    cy.contains('Присутствующие группы:');
    cy.get('img[alt="Присоединиться к встрече"]').click();

    cy.url().should('include', '/attendance/accession');
    cy.get('input[placeholder="Введите код сессии"]').type('test');
    cy.contains('Подключиться').click();
    cy.contains('Ошибка. Попробуйте снова или проверьте код встречи');
  })
})
