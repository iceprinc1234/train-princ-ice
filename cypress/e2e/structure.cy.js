before(() => {
    // root-level hook
    // runs once before all tests
  })
  beforeEach(() => {
    // root-level hook
    // runs before every test block
    cy.visit('https://sit-eregistration.cfwplatform.com/v1.5/w-app/registration/?token=70d2422c-bb7a-4b62-978e-80ea4e897eb6')
    cy.get('.v-btn').click()
    var first_name = "Rachata"
    // Login function
  })
  afterEach(() => {
    // runs after each test block
    // cy.get('[data-testid="royal_login_button"]').click()
  })
  after(() => {
    // runs once all tests are done
    // Log Out function
  })

   var first_name = "Rachata"
  describe('Hooks 1', () => {
    it.only('H1 add case 1', () => {
        cy.get('#radio-group-3-messages > .v-messages__message').should('have.text', 'กรุณาเลือกประเภทลูกค้า')
    })
    it('H1 add case 2', () => {
        cy.get('#input-9-messages > .v-messages__message').should('have.text', 'กรุณากรอกชื่อ')
    })
    it('H1 add case 3', () => {
        cy.get('#input-11-messages > .v-messages__message').should('have.text', 'กรุณากรอกนามสกุล')
    })
    it('H1 add case 4', () => {
        cy.get('#input-13-messages > .v-messages__message').should('have.text', 'เบอร์โทรศัพท์มือถือที่คุณป้อนไม่ถูกต้อง ตัวอย่าง: 0891069999')
    })
    it('H1 add case 5', () => {
        cy.get('#input-9').type(first_name)
    })
  })