// Cypress.Commands.add("login_facebook", (user , pass) => {
//     cy.visit('https://www.facebook.com/')
//     cy.contains('อีเมลหรือ')
//     cy.get('[data-testid="royal_email"]').type(user);
//     cy.wait(2000);
//     cy.get('[data-testid="royal_pass"]').type(pass).wait(1000);
//     cy.get('[data-testid="royal_login_button"]').click();
//   })

  Cypress.Commands.add("register_facebook", (user , pass) => {
    cy.visit('https://www.facebook.com/')
    cy.contains('อีเมลหรือ')
    cy.get('[data-testid="royal_email"]').type(user);
    cy.wait(2000);
    cy.get('[data-testid="royal_pass"]').type(pass).wait(1000);
    cy.get('[data-testid="royal_login_button"]').click();
  })