
// const citizen_ID = 1111111111111
// const First_Name = 'Rachata'
// const Last_Name = 'Limprasert'
const patient_info = require(`../fixtures/${Cypress.env('run_env')}/customer.json`)
// const patient_info = {
//   "first_name" : "Rachata",
//   "last_name" : "Limprasert",
//   "uid" : "abc12345"
// }


describe('template spec', () => {
    it('assignment_cypress', () => {
      // cy.visit('https://facebook.com')
      cy.visit('/')
      cy.get('[role="combobox"]').click()
      cy.get('.v-list-item-title').contains('EN').click()
      cy.get('#input-7').click()
      cy.get('#input-9').type(patient_info['first_name'])
      cy.get('#input-11').type(patient_info['last_name'])
      cy.get('#input-18').click()
      cy.get('#input-42').type(patient_info['uid'])
      // cy.get('#input-42-messages > .v-messages__message').should('have.text','The TH Citizen number you entered is invalid. Example: 3100700099999')
      
      
      // cy.wait(500)
    //   cy.get('#radio-group-3-messages > .v-messages__message').should('have.text', 'กรุณาเลือกประเภทลูกค้า')
    //   cy.get('#input-9-messages > .v-messages__message').should('have.text', 'กรุณากรอกชื่อ')
    //   cy.get('#input-11-messages > .v-messages__message').should('have.text', 'กรุณากรอกนามสกุล')
    //   cy.get('#input-13-messages > .v-messages__message').should('have.text', 'เบอร์โทรศัพท์มือถือที่คุณป้อนไม่ถูกต้อง ตัวอย่าง: 0891069999')
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

      
    })
  })