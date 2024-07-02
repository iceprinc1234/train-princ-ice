


describe('template spec', () => {
  it('passes', () => {
    // cy.visit('https://facebook.com')
    cy.visit('https://sit-eregistration.cfwplatform.com/v1.5/w-app/registration/?token=70d2422c-bb7a-4b62-978e-80ea4e897eb6')
    cy.get('.v-btn').click()
    // cy.wait(500)
    cy.get('#radio-group-3-messages > .v-messages__message').should('have.text', 'กรุณาเลือกประเภทลูกค้า')
    cy.get('#input-9-messages > .v-messages__message').should('have.text', 'กรุณากรอกชื่อ')
    cy.get('#input-11-messages > .v-messages__message').should('have.text', 'กรุณากรอกนามสกุล')
    cy.get('#input-13-messages > .v-messages__message').should('have.text', 'เบอร์โทรศัพท์มือถือที่คุณป้อนไม่ถูกต้อง ตัวอย่าง: 0891069999')

    // cy.get('[data-testid="royal_email"]').type('rachata.li@princhealth.com')
    // cy.wait(500)
    // cy.get('[data-testid="royal_pass"]').type('abc@1234')
    // cy.get('#pass').type('111111')
    // cy.get('[id="u_0_5_6K"]').click()
    // cy.get('[class="action-multiple-checkboxes"][type="checkbox"]').check("checkbox1");
    // cy.get('#input-18').check();
    // cy.get('#checkbox-20').check();
    // cy.get('[class="mdi-radiobox-marked mdi v-icon notranslate v-theme--light v-icon--size-default"][type="radio"]').check('citizen');
    // cy.get('[class="mdi-checkbox-blank-outline mdi v-icon notranslate v-theme--light v-icon--size-default"][type="checkbox"]').check('true');
    cy.get('[role="combobox"]').click()
    cy.get('.v-list-item-title').contains('EN').click()
    
  })
})