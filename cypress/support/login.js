Cypress.Commands.add("login_portal_qa", (user , pass) => {
    cy.visit('https://portal-qa.medcury.health')
    cy.get('#username').type(user)
    cy.get('#password').type(pass)
    cy.get('.btn-login > .v-btn__content').click().wait(1000)
  })

  Cypress.Commands.add("verify_landing_page", () => {
    cy.get('.v-list-item-avatar > .v-list-item__content > .v-list-item__title').should('have.text', 'ADMIN PORTAL')
    cy.get(':nth-child(4) > .v-list-item > .v-list-item__content > .v-list-item__title').should('have.text','Package & Promotion')
  })